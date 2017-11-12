<?php

	// This limits the request rate to the size of the $rolling_window
	// http://www.onlineaspect.com/2009/01/26/how-to-use-curl_multi-without-blocking/
	function rolling_curl($urls, $callback, $custom_options = null) {

		// make sure the rolling window isn't greater than the # of urls
		$rolling_window = 10;
		$rolling_window = (sizeof($urls) < $rolling_window) ? sizeof($urls) : $rolling_window;

		$master = curl_multi_init();
		$curl_arr = array();

		// add additional curl options here
		$std_options = array(	CURLOPT_RETURNTRANSFER => true,
					CURLOPT_FOLLOWLOCATION => true,
					CURLOPT_MAXREDIRS => 5);
		$options = ($custom_options) ? ($std_options + $custom_options) : $std_options;

		// start the first batch of requests
		for ($i = 0; $i < $rolling_window; $i++) {
			$ch = curl_init();
			$options[CURLOPT_URL] = $urls[$i];
			curl_setopt_array($ch, $options);
			curl_multi_add_handle($master, $ch);
		}

		do {
			while ( ($execrun = curl_multi_exec($master, $running)) == CURLM_CALL_MULTI_PERFORM );
			if ($execrun != CURLM_OK) {
				break;
			}
			// a request was just completed -- find out which one
			while ( $done = curl_multi_info_read($master) ) {
				$info = curl_getinfo($done['handle']);
				if ($info['http_code'] == 200)  {
					$output = curl_multi_getcontent($done['handle']);

					// request successful.  process output using the callback function.
					$callback($output);

					// start a new request (it's important to do this before removing the old one)
					$ch = curl_init();
					@$options[CURLOPT_URL] = $urls[$i++];  // increment i
					curl_setopt_array($ch, $options);
					curl_multi_add_handle($master, $ch);

					// remove the curl handle that just completed
					curl_multi_remove_handle($master, $done['handle']);
				} else {
					// request failed.  add error handling.
				}
			}
		} while ($running);
	   
		curl_multi_close($master);
		return true;
	}


	/* 
	 * Script to take post data and return the data with an
	 * appropriate with an appropriate header so a users is prompted
	 * for a download
	 */

	$bldglist_url = "www.osm.utoronto.ca/booking_request/f?p=200:3:::NO::P3_BLDG:null";
	$roomlist_url = "www.osm.utoronto.ca/booking_request/f?p=200:3:::NO::P3_BLDG:";
	$mimetype = "application/json";

	// Set headers
	header("Cache-Control: public");
	//header("Content-Description: File Transfer");
	//header("Content-Disposition: attachment; filename=$filename");
	header("Content-Type: " . $mimetype);
	header("Content-Transfer-Encoding: binary");

	// echo file_get_contents($url);
	// file_get_contents is disabled on some servers, so use
	// curl instead.
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $bldglist_url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	$roomlist_html = curl_exec($ch);
	curl_close($ch);

	$dom = new DOMDocument;
	@$dom->loadHTML($roomlist_html);

	// Sample code for extracting some xml from a webpage
	//$innerHTML = '';
	//foreach ($dom->getElementsByTagName('select') as $child) {
	//	$innerHTML .= $child->ownerDocument->saveXML($child);
	//}


	// get a list of all buildings
	$bldg_elm = $dom->getElementById('P3_BLDG');
	$bldg_array = array();
	foreach ($bldg_elm->getElementsByTagName('option') as $child) {
		$val = $child->getAttribute('value');
		// make sure we have a valid building name
		if (strpos($val, 'null') == false) {
			$desc = $child->textContent;
			$bldg_array[] = array("name" => $val, "desc" => $desc);
		}
	}


	$room_array = array();

	$url_list = array_map(function($x) { return $GLOBALS['roomlist_url'] . $x['name']; }, $bldg_array);
	function process_page($page) {
		//$room_array = array();

		$dom = new DOMDocument;
		@$dom->loadHTML($page);

		$bldg = null;
		$bldg_desc = null;
		$elm = $dom->getElementById('P3_BLDG');
		// figure out what building we're in
		foreach ($elm->getElementsByTagName('option') as $child) {
			$val = $child->getAttribute('selected');
			if ($val != null) {
				$bldg = $child->getAttribute('value');
				$bldg_desc = $child->textContent;

			}
		}

		$elm = $dom->getElementById('P3_ROOM');
		foreach ($elm->getElementsByTagName('option') as $child) {
			$val = $child->getAttribute('value');
			// make sure we have a valid building name
			if (strpos($val, 'null') == false) {
				$desc = $child->textContent;
				$GLOBALS['room_array'][] = array("bldg" => $bldg, "room" => $val, "desc" => $desc);
			}
		}

	}
	rolling_curl($url_list, 'process_page');
	

	$all_info = array('bldgs' => $bldg_array, 'rooms' => $room_array);
	echo json_encode($all_info);

	/*
	foreach ($bldg_array as $info) {
		$bldg = $info['name'];

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $roomlist_url . $bldg);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		$roomlist_html = curl_exec($ch);
		curl_close($ch);


		$dom = new DOMDocument;
		@$dom->loadHTML($roomlist_html);
		$innerHTML = '';
		foreach ($dom->getElementsByTagName('select') as $child) {
			$innerHTML .= $child->ownerDocument->saveXML($child);
		}
		echo $innerHTML;

	}
	 */
?> 
