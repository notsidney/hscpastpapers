import React from 'react';
import FontAwesome from 'react-fontawesome';

const ListItem = (props) => {
	const className = (props.active) ? 'active' : '';

	return(
		<li className={className}>
			{props.text}
			<FontAwesome name="chevron-right" />
		</li>
	)
}

export default ListItem;
