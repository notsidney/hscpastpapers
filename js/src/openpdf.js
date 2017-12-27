/*------------------------------------------------------------------------------
openpdf.js
------------------------------------------------------------------------------*/

// use PDF Object to detect if PDF can be embedded
function openPDF(link, side) {
  // get target iframe
  var target = $('#iframe');
  if (side === 'right') target = $('#iframe-split-right');
  // add fix for firefox
  if (PDFObject.supportsPDFs || navigator.userAgent.indexOf("Firefox") > -1) {
    target.attr('src', link);
  } else {
    // hide loader
    $('#loader').removeClass('active');
    // get file name
    var fileName = /[^\/]+$/.exec(link);
    fileName = fileName[0].replace('?MOD=AJPERES','');
    // show message
    target.contents().find('body').css('background-color', '#262626').html(
      '<div style="align-items:center;display:flex;height:100%;' +
      'justify-content:center;font-family:-apple-system,BlinkMacSystemFont' +
      ',\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif;cursor:default;' +
      'text-align:center;user-select:none;font-size:1.5em;' +
      'color:rgba(255,255,255,.5)"><div style="display:block">' +
      'Your browser doesn’t support PDF embeds' +
      '<a href="' + link + '" download target="_blank" style="' +
      'background-color:rgb(100, 53, 201);color:#fff;display:block;' +
      'font-size:20px;padding:.589286em 1.125em;margin:1em;' +
      'border-radius:4px;text-decoration:none' +
      '"><b>Download</b> ' + fileName + '</a>' +
      '</div></div>'
    );
  }
}
