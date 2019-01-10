<?php
/**
 * HISTORY
 *
 * osm/ace changes their stuff a lot. Up until Jan 1, 2019
 *    $info_url = "$tld/ws/f?p=200:3:::NO::P3_BLDG,P3_ROOM,P3_CALENDAR_DATE:$bldg,$room,$date";
 * worked to get a page with all booking information pre-rendered as HTML. Then
 * the format switched to an AJAX call. 
 *
 * On Jan 6, 2019
 *    https://www.ace.utoronto.ca/webapp/wwv_flow.show?p_flow_id=200&p_flow_step_id=1&x01=GET&x02=20190110000000&x03=20190119000000&p_arg_names=P1_BLDG&p_arg_values=BA&p_arg_names=P1_ROOM&p_arg_values=1210&p_request=PLUGIN%3DFlIVl7YLRBrfr4Mzt9w4WDdaCiUgDMK4zQ1ygeNYs511blieKrKwJ0p1pRd75V2t
 * worked. PLUGIN%3DFlIVl7YLRBrfr4Mzt9w4WDdaCiUgDMK4zQ1ygeNYs511blieKrKwJ0p1pRd75V2t is the escaped version of PLUGIN=FlIVl7YLRBrfr4Mzt9w4WDdaCiUgDMK4zQ1ygeNYs511blieKrKwJ0p1pRd75V2t
 * It appears that every time the page is "updated" by ace, the PLUGIN changes. It is stored as the ajaxIdentifier in the call to cssCalendar.
 */


// pass in bldg, room, and date (in YYYMMDD format); If date is null, room info including
// capacity is returned. If date is non-null, bookings near that date are returned.
$GLOBALS["ROOM_DEBUG"] = ["urls" => []];
$GLOBALS["cookies"] = [];

function curlResponseHeaderCallback($ch, $headerLine) {
    if (preg_match('/^Set-Cookie:\s*([^;]*)/mi', $headerLine, $cookie) == 1)
        $GLOBALS["cookies"] = $cookie;
    return strlen($headerLine); // Needed by curl
}


function get_url($url, $get_cookie=false, $cookie="") {
	// fetch the given URL
	$GLOBALS["ROOM_DEBUG"]["urls"][] = ["url" => $url, "get_cookie" => $get_cookie, "cookie" => $cookie];

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	if ($get_cookie) {
		curl_setopt($ch, CURLOPT_HEADERFUNCTION, "curlResponseHeaderCallback");
	}
	if ($cookie) {
		curl_setopt($ch, CURLOPT_COOKIE, $cookie);
	}
	$roominfo_html = curl_exec($ch);
	curl_close($ch);

	return $roominfo_html;
}

function extract_apikey($txt) {
	$out = [];
	preg_match_all('/cssCalendar.*ajaxIdentifier":"(?<match>.*?)"/', $txt, $out);
	//preg_match_all('/ajaxIdentifier":"(?<match>.*?)"/', $txt, $out);
	return $out["match"][0];
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
$apikey = "5vNyMqA40bfLE6_4kXNhte1nUrUh6O5XlKFswW7qNRdVgpkICYUQaLeJafYwk0LZ";

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

function bookings_from_ace_json($json, $bldg, $room) {
	// return date format "YYYYMMDDHHmmss"
	// returns an array ["time" => formatted date, "desc" => room booking, "id" => something for caching]
	date_default_timezone_set('UTC');

	$ret = [];

	foreach ($json as $item) {
		$booking = $item["title"];
		$start = strtotime($item["start"]);
		$end = strtotime($item["end"]);

		while ($start < $end) {
			$time = date('YmdHis', $start);
			$ret[] = ["time" => $time, "desc" => $booking, "id" => "$bldg $room $time"];
			$start += 3600;
		}
	}
	return $ret;
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

$orig_date = $date;
$curr_day = DateTime::createFromFormat("Y-m-d", "$year-$month-$day");
$curr_day->modify('+1 day');
$datenext = $curr_day->format('Ymd');


$parsed = [];

/**
 * XXXXX This no longer works

// now grab scheduling data
$info_url = "$tld/ws/f?p=200:3:::NO::P3_BLDG,P3_ROOM,P3_CALENDAR_DATE:$bldg,$room,$date";
// get the room info
$roominfo_html = get_url($info_url);

$parsed = parse_timetable($roominfo_html, $year, $bldg, $room);
 */

// we need to fetch the $tld once to get a cookie and the $apikey
$info_url = "$tld/webapp/f?p=200:1::::::";
$base_page = get_url($info_url, true);
$apikey = extract_apikey($base_page);

$info_url = "$tld/webapp/wwv_flow.show?p_flow_id=200&p_flow_step_id=1&x01=GET&x02=$date&x03=$datenext" .
	"&p_arg_names=P1_BLDG&p_arg_values=$bldg" .
	"&p_arg_names=P1_ROOM&p_arg_values=$room" .
	"&p_request=PLUGIN=$apikey";

$cookie_string = substr($GLOBALS["cookies"][0], 12) . "; " . $GLOBALS["cookies"][1];
$roominfo_json = get_url($info_url, false, $cookie_string);


$room_data['bookings'] = bookings_from_ace_json(json_decode($roominfo_json, true), $bldg, $room);

$GLOBALS["ROOM_DEBUG"]["cookie_string"] = $cookie_string;
$room_data['debug'] = $GLOBALS["ROOM_DEBUG"];

$room_data["date"] = date('YmdHms', strtotime("2019-01-08T13:00:00"));
$room_data["dateA"] = strtotime("2019-01-08T13:00:00");
$room_data["dateB"] = strtotime("2019-01-08T14:00:00");

echo json_encode($room_data);
?>
