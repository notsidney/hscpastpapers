import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from '../../css/buttons.css';

const LinkButton = (props) => {
  let extraClasses = '';
  if (props.className) extraClasses = props.className;

  if (props.download) {
    return(
      <a className={extraClasses + ' button'} href={props.url} download>
        <FontAwesomeIcon icon="download" />
        Download {props.text}
      </a>
    )
  }
  else if (props.newTab) {
    return(
      <a className={extraClasses + ' button'} href={props.url}
        target="_blank">
        <FontAwesomeIcon icon={props.icon} />
        {props.text}
      </a>
    )
  }
  else {
    return(
      <a className={extraClasses + ' button'} href={props.url}>
        <FontAwesomeIcon icon={props.icon} />
        <span className="text">{props.text}</span>
      </a>
    )
  }
}

export default LinkButton;
