import React from 'react';
import FontAwesome from 'react-fontawesome';

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
	if (!props.disabled) {
	  return(
	    <section className="downloadView">
	    	<div className="downloadViewFlexContainer">
		      <h1>
		      	<FontAwesome name="file-pdf-o" />
		      	<span>{props.docName}</span>
		      </h1>
		      <LinkButton
		      	url={props.url}
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
			      	onClick={selectOnClick}
			      />
						<button className="button" onClick={copyLink}>
							<FontAwesome name="copy" />
							Copy link
						</button>
						<LinkButton
							url={props.url}
							text="Open in new tab"
							icon="external-link"
							newTab="true"
						/>
					</div>
				</div>
	    </section>
	  )
	}
	else {
		return <section className="disabled"></section>
	}
}

export default DownloadView;
