/*------------------------------------------------------------------------------
ready.js
------------------------------------------------------------------------------*/

$(document).ready(function(){
	// when jQuery loads, hide warning
	$('#nojquery').hide();
	// store url params
	urlCourse = urlParam('course');
	urlYear = urlParam('year');
	urlDoc = urlParam('doc');
	// store url params2
	urlCourse2 = urlParam('course2');
	urlYear2 = urlParam('year2');
	urlDoc2 = urlParam('doc2');
	// open about window
	if (urlParam('open') == 'about') $('#about-modal').modal('show');
	// initialise new params object
	params = { mode: 'normal' };
	// activate mobile more-dropdown
	$('#more-dropdown').dropdown({action:'nothing'});
	// gets JSON from nesappscraper
	$.ajax({
		dataType: 'json',
		url: 'data/data.json',
		success: dataReceived,
		xhr: dataProgress
	});
	// Get version
	// show in about modal
	$('#version').html(version);
	// Update timestamp
	$.getJSON(
		'data/meta.json',
		function(data) {
			// create new date object so it can be formatted
			timestamp = new Date(data.timestamp);
			// show in about modal
			$('#timestamp').html( timestamp.toLocaleDateString() );
		}
	);
	// Set about modal transition duration
	$('#about-modal').modal({ duration: 200 });
});

function dataProgress() {
	var xhr = new window.XMLHttpRequest();
	xhr.addEventListener('progress', function(e) {
		var percent = Math.floor(e.loaded / 1269870 * 100);
		$('#loadingbar').progress({ percent: percent });
		$('#loadingpercent').html(percent + '%');
	}, false);
	return xhr;
}

function dataReceived(data) {
	console.log('received');
	// write to jsonData variable
	jsonData = data;
	// populate course dropdown
	populateDropdown(jsonData, 'course_name', '#course-menu', false);
	// also populate dropdown for split view
	populateDropdown(jsonData, 'course_name', '#course-menu2', false);
	// remove loading indicator
	$('#loadingpercent').html('100%');
	$('#loadingbar').progress({ percent: 100 }).delay(500).fadeOut(200);
	$('body').removeClass('loading');
	// show placeholder in iframe
	$('iframe').contents().find('body').append(
		'<div style="align-items:center;display:flex;height:100%;' +
			'justify-content:center;font-family:-apple-system,BlinkMacSystemFont' +
			',\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;cursor:default;' +
			'text-align:center;user-select:none;font-size:1.5em;' +
			'color:rgba(255,255,255,.5)">' +
        'Select a Course, Year, and Document above' +
      '</div>'
		);
	// activate course dropdown
	$('#course-dropdown')
		.removeClass('disabled')
		.dropdown('show')
		.dropdown({ selectOnKeydown: false });
	// also activate course dropdown for split view
	$('#course-dropdown2')
		.removeClass('disabled')
		.dropdown({ selectOnKeydown: false });
	// Select course from URL parameter
	if (urlCourse) {
		$('#course-dropdown')
			.dropdown('set selected', urlCourse)
			.dropdown('hide');
		// if not found
		if ( !$('#course-dropdown').dropdown('get value') ) urlNotFound('Course');
	}
	// Select course2 from URL parameter
	if (urlCourse2) {
		$('#course-dropdown2')
			.dropdown('set selected', urlCourse2)
			.dropdown('hide');
		// if not found
		if ( !$('#course-dropdown2').dropdown('get value') ) urlNotFound('Course2');
	}
}
