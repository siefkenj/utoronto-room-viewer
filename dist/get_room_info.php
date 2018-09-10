<?php
// pass in bldg, room, and date (in YYYMMDD format); If date is null, room info including
// capacity is returned. If date is non-null, bookings near that date are returned.
$GLOBALS["ROOM_DEBUG"] = ["urls" => []];

function get_url($url) {
	// fetch the given URL
	$GLOBALS["ROOM_DEBUG"]["urls"][] = $url;

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	$roominfo_html = curl_exec($ch);
	curl_close($ch);

	return $roominfo_html;
}

function timetable_array_to_flat($array, $year, $bldg, $room) {
	// $array has a first row consisting of the dates
	// and further rows with times and bookings. e.g.
	// $array = [["", "Monday 9/24", "Tuesday 09/25", ...],
	// 	     ["07:00", "MAT135", ...], ...]
	//
	//
	// return date format "YYYYMMDDHHmmss"
	// returns an array ["time" => formatted date, "desc" => room booking, "id" => null]

	$ret = [];
	$dates = [];
	foreach ($array[0] as $i => $item) {
		if(preg_match("/(\d\d)\/(\d\d)/", $item, $match)) {
			$dates[] = $match[1] . $match[2];
		} else {
			$dates[] = null;
		}
	}

	foreach ($array as $i => $row) {
		if ($i == 0) {
			// we already parsed the first row
			continue;
		}
		$curr_time = "";
		foreach ($row as $j => $item) {
			if ($j == 0) {
				// the first row has the times stored
				if (preg_match("/(\d\d):(\d\d)/", $item, $match)) {
					$curr_time = $match[1] . $match[2] . "00";
				} else {
					continue;
				}
			} else {
				// we should be a booking
				$booking = trim($item);
				if ($booking != "") {
					$time = $year . $dates[$j] . $curr_time;
					$ret[] = ["time" => $time, "desc" => $booking, "id" => "$bldg $room $time"];
				}
			}
		}
	}
	return $ret;
}

function parse_timetable($html, $year="", $bldg="", $room="") {
	// extract all room bookings from the HTML table
	$bookings = [];

	$dom = new DOMDocument;
	@$dom->loadHTML($html);
	$xpath = new DOMXpath($dom);

	//$date_elms = $xpath->query('//div[@class="apex-calendar"]//table//table/tbody');
	$date_elms = $xpath->query('//div[@class="apex-calendar"]//table//table//tr');

	$ret = [];
	foreach ($date_elms as $i => $row) {
		$new_row = [];
		foreach ($row->childNodes as $j => $node) {
			if ($node->nodeName == "th" || $node->nodeName == "td") {
				$new_row[] = $node->textContent;
			}
		}
		$ret[] = $new_row;
	}

	return timetable_array_to_flat($ret, $year, $bldg, $room);
}

header('Content-type: application/json');
$tld = "https://www.ace.utoronto.ca";

$room_data = [];

function arr_get($array, $key, $default = null){
    return isset($array[$key]) ? $array[$key] : $default;
}

$bldg = arr_get($_GET, 'bldg', null);
$room = arr_get($_GET, 'room', null);
$date = arr_get($_GET, 'date', null);
if ($bldg == null) {
	echo json_encode(array('status' => 'error', 'error' => 'No building specified'));
	exit();
}
if ($room == null) {
	echo json_encode(array('status' => 'error', 'error' => 'No room specified'));
	exit();
}

if ($date == null) {
	$info_url = "$tld/f?p=210:1:::::P1_BLDG,P1_ROOM:$bldg,$room";
	// get the room info
	$roominfo_html = get_url($info_url);

	$dom = new DOMDocument;
	@$dom->loadHTML($roominfo_html);
	$xpath = new DOMXpath($dom);

	// extract useful data

	// the picture
	$elms = $xpath->query('(//div[@id="columnright"]//table[2]//td[@headers="PHOTO"]//img)[1]');
	$room_data['photo'] = $tld . $elms->item(0)->getAttribute('src');

	// the capacity and types
	$elms = $xpath->query('//div[@id="columnright"]/div[1]')->item(0);
	foreach ($elms->getElementsByTagName('tr') as $child) {
		$cells = $child->getElementsByTagName('td');
		if ($cells->length == 2) {
			switch ($cells->item(0)->textContent) {
			case "Capacity":
				$room_data['capacity'] = intval($cells->item(1)->textContent);
				break;
			case "Teaching station":
				$room_data['teaching_station'] = $cells->item(1)->textContent == "Y" ? true : false;
			case "Teaching station Junior":
				$room_data['teaching_station_junior'] = $cells->item(1)->textContent == "Y" ? true : false;

			}
		}
	}

	echo json_encode($room_data);
	exit();
}

$bookings = array();
// XXX the osm website lists Sunday listings as belonging to the previous week,
// but their API makes Sunday the start of the next week. If the day is a sunday,
// retrieve two weeks of data and merge it.
$year = substr($date, 0, 4);
$month = substr($date, 4, 2);
$day = substr($date, 6, 2);
date_default_timezone_set('UTC');
$weekday = date('w', strtotime("$year-$month-$day"));
if ($weekday == 0 || $weekday == 6) {
	$orig_date = $date;
	$curr_day = DateTime::createFromFormat("Y-m-d", "$year-$month-$day");
	$curr_day->modify('-1 day');
	// $date is now one day previous from where it was
	$date = $curr_day->format('Ymd');

	// XXX REPEATED CODE...but I can't be bothered to figure out functions right now...

	// now grab scheduling data
	$info_url = "$tld/ws/f?p=200:3:::NO::P3_BLDG,P3_ROOM,P3_CALENDAR_DATE:$bldg,$room,$date";
	// get the room info

	$roominfo_html = get_url($info_url);

	$dom = new DOMDocument;
	@$dom->loadHTML($roominfo_html);
	$xpath = new DOMXpath($dom);

	$date_elms = $xpath->query('//div[@id="apex_cal_data_grid_src"]/../input[1]');

	for ($i = 0; $i < $date_elms->length; $i++) {
		$booking_time = $date_elms->item($i)->getAttribute('value');
		$elm = $xpath->query('../div[@id="apex_cal_data_grid_src"]', $date_elms->item($i));
		$booking_details = trim($elm->item(0)->textContent);
		$bookings[] = array("time" => $booking_time, "desc" => $booking_details, "id" => "$bldg $room $booking_time");
	}

	$date = $orig_date;
}

// now grab scheduling data
$info_url = "$tld/ws/f?p=200:3:::NO::P3_BLDG,P3_ROOM,P3_CALENDAR_DATE:$bldg,$room,$date";
// get the room info
$roominfo_html = get_url($info_url);

$parsed = parse_timetable($roominfo_html, $year, $bldg, $room);
$room_data['bookings'] = $parsed;
$room_data['debug'] = $GLOBALS["ROOM_DEBUG"];
echo json_encode($room_data);
?>
