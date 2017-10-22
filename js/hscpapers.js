var jsonData, courseIndex, yearIndex, docLink;

$(document).ready(function(){
	// activate mobile more-dropdown
	$('#more-dropdown').dropdown({action:'nothing'});
	// gets JSON from nesappscraper
	$.getJSON(
		'https://raw.githubusercontent.com/notseenee/nesappscraper/master/data.json',
		function(data) {
			// write to jsonData
			jsonData = data;
			// populate course dropdown
			populateDropdown(jsonData, 'course_name', '#course-menu', false);
			// activate course dropdown
			$('#course-dropdown')
				.removeClass('loading')
				.dropdown('show')
				.dropdown({ selectOnKeydown: false });
		}
	);
	// Update timestamp
	$.getJSON(
		'https://raw.githubusercontent.com/notseenee/nesappscraper/master/meta.json',
		function(data) {
			console.log(data.timestamp);
			$('#timestamp').html( data.timestamp.replace('T',' ').substring(0,19) );
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
	// add loading spinner to year dropdown
	$('#year-dropdown').addClass('loading').removeClass('disabled');
	// loops through each element in json object to find index
	for (k = 0; k < jsonData.length; k++) {
		if (jsonData[k]['course_name'].toLowerCase() ==
			$('#course-input')[0].value) {
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
});

// when a year is selected, populate docs dropdown
$('#year-input').change( function() {
	// if year is blank for some reason, ignore
	if ($(this)[0].value == '') return;
	// add loading spinner to year dropdown
	$('#doc-dropdown').addClass('loading').removeClass('disabled');
	// loops through each element in json object to find year index
	for (l = 0; l < jsonData[courseIndex].packs.length; l++) {
		if (jsonData[courseIndex].packs[l]['year'] == $('#year-input')[0].value) {
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
	// activate exam pack buttons and adds link
	$('.button-exampack')
		.removeClass('disabled')
		.attr('href', jsonData[courseIndex].packs[yearIndex]['link']);
});

// when a doc is selected, open it
$('#doc-input').change( function(){
	// if selected doc is blank, ignore
	if ($(this)[0].value == '') return;
	// loops thorugh each doc to find doc index
	for (m = 0; m < jsonData[courseIndex].packs[yearIndex].docs.length; m++) {
		if (jsonData[courseIndex].packs[yearIndex].docs[m]['doc_name'].toLowerCase()
			== $('#doc-input')[0].value) {
			docLink = jsonData[courseIndex].packs[yearIndex].docs[m]['doc_link'];
			// force https
			docLink = docLink.replace('http', 'https');
			break;
		}
	}
	// open in iframe
	$('#iframe').attr('src', docLink);
	// add loading indicator on logo
	$('#iframe-loader').addClass('active');
	// activate download & link buttons
	$('.button-download').removeClass('disabled').attr('href', docLink);
	$('.button-link').removeClass('disabled').removeAttr('disabled');
	// change tab title
	document.title = $('#year-dropdown .text').html() + ' ' +
		$('#doc-dropdown .text').html() + ' - ' +
		$('#course-dropdown .text').html();
});
// when logo is clicked, reload
$('#logo').click( function(){ location.reload(); });
// when link button is clicked, show prompt
$('.button-link').click( function(){ prompt('Copy link below:', docLink); });
// when about button is clicked, show modal
$('.button-about').click( function(){ $('#about-modal').modal('show'); });
// when iframe finishes loading, remove loading indicator on logo
$('#iframe').on('load', function(){	$('#iframe-loader').removeClass('active'); });
