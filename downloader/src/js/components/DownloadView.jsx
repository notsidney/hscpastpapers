import React from 'react';
import FontAwesome from 'react-fontawesome';

import LinkButton from './LinkButton.jsx';

import styles from '../../css/DownloadView.css';

const selectOnClick = () => {
	document.getElementById('linkBox').select();
}

const copyLink = () => {
	console.log('copied');
}

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
      <div className="linkContainer">
      	<FontAwesome name="link" />
	      <input
	      	type="text"
	      	className="linkBox"
	      	id="linkBox"
	      	value={props.url}
	      	readOnly
	      	onClick={selectOnClick}
	      />
				<button className="button" onClick={copyLink}>
					<FontAwesome name="clipboard" />
					Copy link
				</button>
			</div>
    </section>
  )
}

export default DownloadView;
