import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from '../../css/Buttons.css';

const LinkButton = (props) => {
	return(
		<a className={props.className + ' button'} href={props.url}>
			<FontAwesome name={props.icon} />
			{props.text}
		</a>
	)
}

export default LinkButton;
