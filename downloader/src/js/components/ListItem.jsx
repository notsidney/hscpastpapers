import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from '../../css/ListItem.css';

const ListItem = (props) => {
  return(
    <li
      className={(props.active) ? 'active' : ''}
      onClick={() => { props.activateItem(props.index); }}
    >
      <span className="listItemText">{props.text}</span>
      <FontAwesomeIcon icon="chevron-right" />
    </li>
  )
}

export default ListItem;
