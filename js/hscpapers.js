var jsonData,
courseIndex, yearIndex, docLink,
urlCourse, urlYear, urlDoc,
urlCourse2, urlYear2, urlDoc2,
selectedCourse, selectedYear, selectedDoc,
params, version, timestamp;

// get url parameters
function urlParam(name) {
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results === null ? '' : decodeURIComponent(results[1]);
}
// if not found
function urlNotFound(type) {
	var table = $('#not-found-modal-table'),
	modalType = $('#not-found-modal-type');
	// clear
	table.html('');
	modalType.html('');
	// add modal title
	modalType.html(type);

	// writer function
	function write(typeToWrite, val, error) {
		if (error) {
			table.append('<tr class="error"><td>' + typeToWrite +
				'</td><td>' + val + '</td></tr>');
		} else {
			table.append('<tr><td>' + typeToWrite + '</td><td>' + val + '</td></tr>');
		}
	}

	// show url params
	switch(type) {
		case 'Course':
			write('Course', urlCourse, true);
			break;
		case 'Year':
			write('Course', urlCourse, false);
			write('Year', urlYear, true);
			break;
		case 'Doc':
			write('Course', urlCourse, false);
			write('Year', urlYear, false);
			write('Doc', urlDoc, true);
		case 'Course2':
			write('Course2', urlCourse2, true);
			break;
		case 'Year2':
			write('Course2', urlCourse2, false);
			write('Year2', urlYear2, true);
			break;
		case 'Doc2':
			write('Course2', urlCourse2, false);
			write('Year2', urlYear2, false);
			write('Doc2', urlDoc2, true);
	}

	// show the modal
	$('#not-found-modal')
		.modal({
			duration: 200,
			onApprove: function() {
				// clear urlParams variables
				urlCourse = '';
				urlYear = '';
				urlDoc = '';
				// show dropdown
				setTimeout(function(){
					$('#' + type.toLowerCase() + '-dropdown').dropdown('show')
				}, 200);
			}
		})
		.modal('show');
}

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
	// initialise new params
	params = { course:'',year:'',doc:'' }
	// activate mobile more-dropdown
	$('#more-dropdown').dropdown({action:'nothing'});
	// gets JSON from nesappscraper
	$.getJSON(
		'data/data.json',
		function(data) {
			// write to jsonData
			jsonData = data;
			// populate course dropdown
			populateDropdown(jsonData, 'course_name', '#course-menu', false);
			// also populate dropdown for split view
			populateDropdown(jsonData, 'course_name', '#course-menu2', false);
			// remove loading indicator
			$('#loader').removeClass('active');
			$('#loadingmsg').hide();
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
	);
	// Get version
	$.getJSON(
		'version.json',
		function(data) {
			version = data.version;
			// show in about modal
			$('#version').html(data.version);
			// show in about popup
			$('.button-about')
				.popup({
					title: 'Version ' + data.version
				});
		}
	);
	// Update timestamp
	$.getJSON(
		'data/meta.json',
		function(data) {
			// create new date object so it can be formatted
			timestamp = new Date(data.timestamp);
			// show in about modal
			$('#timestamp')
				.html( timestamp.toLocaleDateString() )
				.popup({
					html: timestamp.toLocaleTimeString() + '<br>Sydney time'
				});
			// add to about popup
			$('.button-about').popup({
				title: 'Version ' + version,
				content: 'Data updated ' + timestamp.toLocaleDateString()
			});
		}
	);
	// Add logo/reload popup
	$('.popup').popup();
	// Set about modal transition duration
	$('#about-modal').modal({ duration: 200 });
});

// parses JSON to populate dropdowns
function populateDropdown(searchIn, searchFor, pushTo, reverse) {
	// get all items into an array
	var items = [];
	// loop through each item and push to array
	for (i = 0; i < searchIn.length; i++) {
		items.push(searchIn[i][searchFor]);
	}
	// sort array
	items.sort();
	// optionally reverses array (for year dropdown)
	if (reverse) items.reverse();
	// clears dropdown
	$(pushTo).empty();
	// loops through items in array and adds to the dropdown
	for (j = 0; j < items.length; j++) {
		$(pushTo).append('<div class="item" data-value"1">' + items[j] + '</div>');
	}
}

// when a course is selected, populate year dropdown
$('#course-input').change( function() {
	// get selected value
	selectedCourse = $('#course-input')[0].value;
	// add to new params
	params.course = selectedCourse
	// add loading spinner to year dropdown
	$('#year-dropdown').addClass('loading').removeClass('disabled');
	// loops through each element in json object to find index
	for (k = 0; k < jsonData.length; k++) {
		if (jsonData[k]['course_name'].toLowerCase() == selectedCourse) {
			courseIndex = k;
			break;
		}
	}
	// populates dropdown
	populateDropdown(jsonData[courseIndex].packs, 'year', '#year-menu', true);
	// activates year dropdown
	$('#year-dropdown')
		.removeClass('loading')
		.dropdown('restore defaults')
		.dropdown('show')
		.dropdown({ selectOnKeydown: false });
	// Select year from URL parameter
	if (urlYear) {
		$('#year-dropdown')
			.dropdown('set selected', urlYear)
			.dropdown('hide');
		// if not found
		if ( !$('#year-dropdown').dropdown('get value') ) urlNotFound('Year');
	}
	// change url to new params
	history.pushState(null, '', '?' + $.param(params) );
});

// when a year is selected, populate docs dropdown
$('#year-input').change( function() {
	// if year is blank for some reason, ignore
	if ($(this)[0].value == '') return;
	// get selected year
	selectedYear = $('#year-input')[0].value;
	// add to new params
	params.year = selectedYear;
	// add loading spinner to year dropdown
	$('#doc-dropdown').addClass('loading').removeClass('disabled');
	// loops through each element in json object to find year index
	for (l = 0; l < jsonData[courseIndex].packs.length; l++) {
		if (jsonData[courseIndex].packs[l]['year'] == selectedYear) {
			yearIndex = l;
			break;
		}
	}
	// populates dropdown
	populateDropdown(jsonData[courseIndex].packs[yearIndex].docs,
		'doc_name', '#doc-menu', false);
	// activate doc dropdown
	$('#doc-dropdown')
		.removeClass('loading')
		.dropdown('restore defaults')
		.dropdown('show');
	// Select doc from URL parameter
	if (urlDoc) {
		$('#doc-dropdown')
			.dropdown('set selected', urlDoc)
			.dropdown('hide');
		// if not found
		if ( !$('#doc-dropdown').dropdown('get value') ) urlNotFound('Doc');
	}
	// activate exam pack buttons and adds link
	$('.button-exampack')
		.removeClass('disabled')
		.attr('href', jsonData[courseIndex].packs[yearIndex]['link']);
	// change url to new params
	history.pushState(null, '', '?' + $.param(params) );
});

// when a doc is selected, open it
$('#doc-input').change( function(){
	// if selected doc is blank, ignore
	if ($(this)[0].value == '') return;
	// get selected doc
	selectedDoc = $('#doc-input')[0].value;
	// add to new params
	params.doc = selectedDoc;
	// loops thorugh each doc to find doc index
	for (m = 0; m < jsonData[courseIndex].packs[yearIndex].docs.length; m++) {
		if (jsonData[courseIndex].packs[yearIndex].docs[m]['doc_name'].toLowerCase()
			== selectedDoc) {
			docLink = jsonData[courseIndex].packs[yearIndex].docs[m]['doc_link'];
			// force https
			docLink = docLink.replace('http', 'https');
			break;
		}
	}
	// open in iframe
	$('#iframe').attr('src', docLink);
	// add loading indicator on logo
	$('#loader').addClass('active');
	// activate download & link buttons
	$('.button-download').removeClass('disabled').attr('href', docLink);
	$('.button-link').removeClass('disabled').removeAttr('disabled');
	$('#pdf-dropdown').removeClass('disabled').dropdown({action:'nothing'});
	// change url to new params
	history.pushState(null, '', '?' + $.param(params) );
	// change tab title
	updateTabTitle();
	// enable dim function
	dimmable = true;
});
// when link button is clicked, show prompt
$('.button-link').click( function(){ prompt('Copy link below:', docLink); });
// when about button is clicked, show modal
$('.button-about').click( function(){ $('#about-modal').modal('show'); });
// if from /about, remove ?open=about from url
$('#close-modal').click( function(){
	if (urlParam('open') == 'about') history.pushState(null, '', '?');
});
// when iframe finishes loading, remove loading indicator on logo
$('#iframe').on('load', function(){ $('#loader').removeClass('active'); });

// dims ui elements when idle
var idleTime = 0,
		dimmable = false;
$(document).ready(function () {
  // Increment the idle time counter every minute.
  var idleInterval = setInterval(timerIncrement, 5000); // 5 sec
  // Reset on mouse movement, click or key press
  $(this).mousemove( function (e) { resetTimer(); } );
  $(this).mousedown( function (e) { resetTimer(); } );
  $(this).mouseup( function (e) { resetTimer(); } );
  $(this).keypress( function (e) { resetTimer(); } );
});
// dim
function timerIncrement() {
  idleTime = idleTime + 5;
  if (idleTime >= 5 && dimmable === true) { // 5 sec then dim
      $('body').addClass('idle');
  }
}
// reset
function resetTimer() {
	idleTime = -5;
	$('body').removeClass('idle');
}

// updates tab title
function updateTabTitle() {
	document.title = $('#year-dropdown .text').html() + ' ' +
		$('#course-dropdown .text').html() + ' ' +
		$('#doc-dropdown .text.overflow').html();

	if ( $('body').hasClass('split') ) {
		document.title += ' | ' + $('#year-dropdown2 .text').html() + ' ' +
		$('#course-dropdown2 .text').html() + ' ' +
		$('#doc-dropdown2 .text.overflow').html();
	}
}
