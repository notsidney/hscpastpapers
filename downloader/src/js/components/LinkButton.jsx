import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from '../../css/LinkButton.css';

const LinkButton = (props) => {
	if (props.download) {
		return(
			<a className={props.className + ' button'} href={props.url} download>
				<FontAwesome name="download" />
				Download {props.text}
			</a>
		)
	}
	else {
		return(
			<a className={props.className + ' button'} href={props.url}>
				<FontAwesome name={props.icon} />
				{props.text}
			</a>
		)
	}
}

export default LinkButton;
