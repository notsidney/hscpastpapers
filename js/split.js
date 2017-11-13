var courseIndex2, yearIndex, docLink,
urlCourse2, urlYear2, urlDoc2,
selectedCourse2, selectedYear2, selectedDoc2;

// if url has ?mode=split, open split view immediately
$(document).ready(function(){
	// open about window
	if (urlParam('mode') == 'split') $('body').addClass('split');
});

// activate split view
$('.button-split').click(function(){
	// add split class to body
	$('body').addClass('split');
	// construct new params to keep already open doc, if it exists
	var newParams = '?mode=split';
	if (selectedCourse) newParams += '&course=' + selectedCourse;
	if (selectedYear) newParams += '&year=' + selectedYear;
	if (selectedDoc) newParams += '&doc=' + selectedDoc;
	// change url
	history.pushState(null, '', newParams);
});

// exit split view
$('.button-splitexit').click(function(){
	// remove split class from body
	$('body').removeClass('split');
	// construct new params to keep already open doc, if it exists
	var newParams = '?';
	if (selectedCourse) newParams += 'course=' + selectedCourse;
	if (selectedYear) newParams += '&year=' + selectedYear;
	if (selectedDoc) newParams += '&doc=' + selectedDoc;
	// change url
	history.pushState(null, '', newParams);
})
