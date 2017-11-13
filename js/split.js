// activate split view
$('.button-split').click(function(){
	// add split class to body
	$('body').addClass('split');
	// construct new params to keep already open doc, if it exists
	var splitParams = '?mode=split';
	if (selectedCourse) splitParams += '&course=' + selectedCourse;
	if (selectedYear) splitParams += '&year=' + selectedYear;
	if (selectedDoc) splitParams += '&doc=' + selectedDoc;
	// change url
	history.pushState(null, '', splitParams);
});
