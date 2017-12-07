/*------------------------------------------------------------------------------
tabTitle.js
------------------------------------------------------------------------------*/

// updates tab title
function updateTabTitle() {
	// but only if a doc is actually selected
	if ( $('#doc-dropdown .text.overflow').html() != 'Document' ) {
	document.title = $('#year-dropdown .text').html() + ' ' +
		$('#course-dropdown .text').html() + ' ' +
		$('#doc-dropdown .text.overflow').html();

		if ( $('body').hasClass('split') &&
			$('#doc-dropdown2 .text.overflow').html() != 'Document' ) {
			document.title += ' | ' + $('#year-dropdown2 .text').html() + ' ' +
			$('#course-dropdown2 .text').html() + ' ' +
			$('#doc-dropdown2 .text.overflow').html();
		}
	}
	else {
		document.title = 'HSCPastPapers.com';
	}
}
