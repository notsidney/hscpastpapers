import React from 'react';
import FontAwesome from 'react-fontawesome';

import LinkButton from './Buttons.jsx';

import styles from '../../css/DownloadView.css';

const DownloadView = (props) => {
  return(
    <section className="downloadView">
      <h1>{props.docName}</h1>
      <LinkButton
      	url={props.url}
      	text={props.docName}
      	download="true"
      	className="primary"
      />
    </section>
  )
}

export default DownloadView;
