/*------------------------------------------------------------------------------
helpers.js
------------------------------------------------------------------------------*/

// get url parameters
function urlParam(name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  return results === null ? '' : decodeURIComponent(results[1]);
}

// if not found from url params
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
      break;
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
          $('#' + type.toLowerCase() + '-dropdown').dropdown('show');
        }, 200);
      }
    })
    .modal('show');
}

// use PDF Object to detect if PDF can be embedded
function openPDF(link, side) {
  // get target iframe
  var target = $('#iframe');
  if (side === 'right') target = $('#iframe-split-right');
  // show PDF in iframe - also includes fix for firefox
  if (PDFObject.supportsPDFs || navigator.userAgent.indexOf("Firefox") > -1) {
    target.attr('src', link);
    // dim
    dimmable = true;
  } else {
    // hide loader
    $('#loader').removeClass('active');
    // get file name
    var fileName = /[^\/]+$/.exec(link);
    fileName = fileName[0].replace('?MOD=AJPERES','');
    // show message
    iframeMsg(side,
      '<i class="big warning circle icon"></i><br>' +
      'Your browser doesn’t support PDF embeds<br>' +
      '<a href="' + link + '" download target="_blank"' +
      'class="ui huge primary compact button">' +
        '<i class="download icon"></i>Download ' + fileName +
      '</a>'
    );
  }
}

// write message to iframe
function iframeMsg(side, msg) {
  // get target iframe
  var target = $('#iframe');
  if (side === 'right') target = $('#iframe-split-right');
  // add semantic css, body background
  target.contents().find('head').html(
    '<link rel="stylesheet" type="text/css" href="semantic/dist/semantic.min.css">' +
    '<style>' +
      '.msg-body {' +
        'background-color: #262626;' +
        'min-width: auto;' +
        'padding: 20px' +
      '}' +
      '.container {' +
        'align-items: center;' +
        'display: flex;' +
        'height: 100%;' +
        'justify-content: center' +
      '}' +
      '.message {' +
        'background: 0 0;' +
        'color: rgba(255,255,255,.5);' +
        'cursor: default;' +
        'font-size: 24px;' +
        'line-height: 1.2em;' +
        'text-align: center;' +
        'user-select: none' +
      '}' +
      '.message .icon:not(.big) {' +
        'margin: 0 .2em 0 .3em' +
      '}' +
      '.message .big.icon {' +
        'margin-bottom: .25em' +
      '}' +
      '.ui.button {' +
        'border-radius: 10px;' +
        'line-height: 1.2em;' +
        'margin-top: 1.5em;' +
      '}' +
      '.divider {' +
        'background-color: rgba(255,255,255,.2);' +
        'height: 80%;' +
        'left: 0;' +
        'position: absolute;' +
        'top: 10%;' +
        'width: 1px' +
      '}' +
    '</style>'
  );
  target.contents().find('body').addClass('msg-body').html(
    '<div class="container">' +
      '<div class="message">' +
        msg +
      '</div>' +
    '</div>'
  );
  // add left border to right iframe placeholder
  if (side === 'right') {
    target.contents().find('body').append('<div class="divider"></div>');
  }
}
