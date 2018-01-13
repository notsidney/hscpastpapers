/*------------------------------------------------------------------------------
dim.js
------------------------------------------------------------------------------*/

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
  this.addEventListener('touchstart', function (e) { resetTimer(); }, false);
  this.addEventListener('touchmove', function (e) { resetTimer(); }, false);
  this.addEventListener('touchend', function (e) { resetTimer(); }, false);
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
