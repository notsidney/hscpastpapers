$(document).ready(function() {
	// Get current year
	var currentYear = new Date().getFullYear();
	// Clear dropdown
	$('#select-year').html('<option value="" selected>Year</option>');
	// Populate year dropdown
	for (i = currentYear; i >= 2001; i--) {
		$('#select-year').append('<option>' + i + '</option>');
	}

	// Keep selection on Go
	$('#select-course')[0].value = getParam('course');
	$('#select-year')[0].value = getParam('year');

	// Activate comboboxes
	$('.combobox').combobox();

	// Load correct page
	getPage();
});

function getParam(param) {
	var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < url.length; i++) {  
    var urlParam = url[i].split('=');
    if (urlParam[0] == param) {
      return urlParam[1];
    }
	}
}

function getPage() {
	var base = 'http://educationstandards.nsw.edu.au/wps/portal/nesa/11-12/Understanding-the-curriculum/resources/hsc-exam-papers/hsc-exam-paper-detail/',
	  course = getParam('course'),
	    year = getParam('year');

	if (course && year) $('#iframe')[0].src = base + year + '/' + course + '-' + year + '-hsc-exam-pack';
}
