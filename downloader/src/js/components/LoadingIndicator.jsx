import React from 'react';

import styles from '../../css/LoadingIndicator.css';

const LoadingIndicator = (props) => {
  return(
    <div className="loadingIndicatorContainer">
      Loading data… {props.progress}%
      <progress max="100" value={props.progress} />
    </div>
  )
}

export default LoadingIndicator;
