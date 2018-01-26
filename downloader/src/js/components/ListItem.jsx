import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

import '../../css/ListItem.css';

const ListItem = (props) => {
  let classes = '';
  if (props.active) classes += 'active ';
  if (props.focused) classes += 'focused';
  
  return(
    <li
      className={classes}
      onClick={() => { props.activateItem(props.index); }}
    >
      <span className="list-item-text">{props.text}</span>
      <FontAwesomeIcon icon={faChevronRight} />
    </li>
  )
}

export default ListItem;
