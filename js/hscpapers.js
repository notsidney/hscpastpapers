var jsonData, courseIndex, yearIndex, docLink;

$.getJSON(
	'https://raw.githubusercontent.com/notseenee/nesappscraper/master/data.json',
	function(data) {
		jsonData = data;

		parseJSON(jsonData, 'course_name', '#course-menu', false);

		$('#course-dropdown')
			.removeClass('loading')
			.dropdown('show')
			.dropdown({ allowTab: true, selectOnKeydown: false });
	}
);

function parseJSON(searchIn, searchFor, pushTo, reverse) {
	// Get all items into an array
	var items = [];

	// Loop through each item and push to array
	for (i = 0; i < searchIn.length; i++) {
		// Format each
		var formatted = searchIn[i][searchFor].replace('Hsc', 'HSC');
		items.push(formatted);
	}
	// sort array
	items.sort();
	// reverses
	if (reverse) items.reverse();
	// Clears dropdown
	$(pushTo).empty();
	// loops through items in array and adds to the dropdown
	for (j = 0; j < items.length; j++) {
		$(pushTo).append('<div class="item" data-value"1">' + items[j] + '</div>');
	}
}

$('#course-input').change( function() {
	$('#year-dropdown').addClass('loading').removeClass('disabled');

	// Loops through each element in json object to find index
	for (k = 0; k < jsonData.length; k++) {
		if (jsonData[k]['course_name'].toLowerCase() == $('#course-input')[0].value) {
			courseIndex = k;
			break;
		}
	}
	parseJSON(jsonData[courseIndex].packs, 'year', '#year-menu', true);

	$('#year-dropdown')
		.removeClass('loading')
		.dropdown('restore defaults')
		.dropdown('show')
		.dropdown({ allowTab: true, selectOnKeydown: false });
}
);

$('#year-input').change( function() {
	if ($(this)[0].value == '') return;

	$('#doc-dropdown').addClass('loading').removeClass('disabled');

	// Loops through each element in json object to find year index
	for (l = 0; l < jsonData[courseIndex].packs.length; l++) {
		if (jsonData[courseIndex].packs[l]['year'] == $('#year-input')[0].value) {
			yearIndex = l;
			break;
		}
	}
	parseJSON(jsonData[courseIndex].packs[yearIndex].docs, 'doc_name', '#doc-menu', false);

	$('#doc-dropdown')
		.removeClass('loading')
		.dropdown('restore defaults')
		.dropdown('show')
		.dropdown({ allowTab: true });

	$('#exampack')
		.removeClass('disabled')
		.attr('href', jsonData[courseIndex].packs[yearIndex]['link']);
}
);

$('#doc-input').change( function(){
	if ($(this)[0].value == '') return;
	// Loops thorugh each doc to find doc index
	for (m = 0; m < jsonData[courseIndex].packs[yearIndex].docs.length; m++) {
		if (jsonData[courseIndex].packs[yearIndex].docs[m]['doc_name'].toLowerCase() == $('#doc-input')[0].value) {
			docLink = jsonData[courseIndex].packs[yearIndex].docs[m]['doc_link'];
			// https fix
			docLink = docLink.replace('http', 'https');
			break;
		}
	}

	$('#iframe').attr('src', docLink);
	$('#iframe-loader').addClass('active');
	$('#download').removeClass('disabled').attr('href', docLink);
	$('#link').removeClass('disabled').removeAttr('disabled');

});

$('#link').click( function(){
	prompt('Copy link below:', docLink);
});

$('#about').click( function(){
	$('#about-modal').modal('show');
});

$('#reload').click( function(){ location.reload(); });

$('#iframe').on('load', function(){
	$('#iframe-loader').removeClass('active');
});
