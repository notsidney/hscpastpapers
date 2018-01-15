/*------------------------------------------------------------------------------
dropdown.js
------------------------------------------------------------------------------*/

// parses JSON to populate dropdowns
function populateDropdown(json, searchFor, pushTo, reverse) {
	if (typeof(json) == 'object') {
		// get all items into an array
		var items = [];
		// loop through each item and push to array
		for (i = 0; i < json.length; i++) {
			items.push(json[i][searchFor]);
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
	} else {
		console.error('Input JSON not an object: ' + json);
		alert('Error:\n\nInput JSON not an object: ' + json);
	}
}

// when a course is selected, populate year dropdown
$('#course-input').change( function() {
	// get selected value
	selectedCourse = $('#course-input')[0].value;
	// add to new params
	params.course = selectedCourse;
	// add loading spinner to year dropdown
	$('#year-dropdown').addClass('loading').removeClass('disabled');
	// loops through each element in json object to find index
	for (k = 0; k < jsonData.length; k++) {
		if (jsonData[k].course_name.toLowerCase() == selectedCourse) {
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
	if ($(this)[0].value === '') return;
	// get selected year
	selectedYear = $('#year-input')[0].value;
	// add to new params
	params.year = selectedYear;
	// add loading spinner to year dropdown
	$('#doc-dropdown').addClass('loading').removeClass('disabled');
	// loops through each element in json object to find year index
	for (l = 0; l < jsonData[courseIndex].packs.length; l++) {
		if (jsonData[courseIndex].packs[l].year == selectedYear) {
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
  $('#actions-dropdown').removeClass('disabled').dropdown({action:'nothing'});
	$('.button-exampack')
		.removeClass('disabled')
		.attr('href', jsonData[courseIndex].packs[yearIndex].link);
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
		if (jsonData[courseIndex].packs[yearIndex].docs[m].doc_name.toLowerCase() ==
			selectedDoc) {
			docLink = jsonData[courseIndex].packs[yearIndex].docs[m].doc_link;
			// force https
			docLink = docLink.replace('http', 'https');
			break;
		}
	}
	// add loading indicator on logo
	$('#loader').addClass('active');
	// open in iframe
	openPDF(docLink, 'left');
	// activate download & link buttons
	$('.button-download').removeClass('disabled').attr('href', docLink);
	$('.button-link').removeClass('disabled').removeAttr('disabled');
	// change url to new params
	history.pushState(null, '', '?' + $.param(params) );
	// change tab title
	updateTabTitle();
});
