import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import LinkButton from './LinkButton.jsx';

import styles from '../../css/DownloadView.css';


const selectOnClick = () => {
  document.getElementById('linkBox').select();
}

const copyLink = () => {
  document.getElementById('linkBox').select();
  document.execCommand('Copy');
  alert('Copied link');
}

const DownloadView = (props) => {
  if (props.enabled) {
    let fileName = /[^\/]+$/.exec(props.url);
    fileName = fileName[0].replace('?MOD=AJPERES','');

    return(
      <section className="downloadView">
        <h1>
          <FontAwesomeIcon icon="file-pdf" />
          {fileName}
        </h1>
        <div className="controlsContainer">
          <LinkButton
            url={props.url}
            download="true"
            className="primary"
          />
          <div className="linkContainer">
            <FontAwesomeIcon icon="link" />
            <input
              type="text"
              className="linkBox"
              id="linkBox"
              value={props.url}
              onClick={selectOnClick}
              readOnly
            />
            <button className="button" onClick={copyLink}>
              <FontAwesomeIcon icon="copy" />
              Copy link
            </button>
            <LinkButton
              url={props.url}
              text="Open in new tab"
              icon="external-link-square-alt"
              newTab="true"
            />
          </div>
        </div>
      </section>
    )
  }
  else {
    return <section className="downloadView disabled"></section>
  }
}

export default DownloadView;
