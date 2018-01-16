import React from 'react';
import FontAwesome from 'react-fontawesome';

import styles from '../../css/ListItem.css';

const ListItem = (props) => {
	const className = (props.active) ? 'active' : '';

	return(
		<li
			className={className}
			onClick={() => { props.activateItem(props.index) }}
		>
			<span className="listItemText">{props.text}</span>
			<FontAwesome name="chevron-right" />
		</li>
	)
}

export default ListItem;
