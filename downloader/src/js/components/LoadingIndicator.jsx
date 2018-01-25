import React from 'react';

import '../../css/LoadingIndicator.css';

const LoadingIndicator = (props) => {
  let isDone = (props.progress === 100) ? 'done' : '';

  return(
    <div className="loadingIndicatorFlexContainer">
      <div className="loadingIndicatorContainer">
        <div className="left text">
          Loading data…
        </div>
        <div className="right text">{props.progress}%</div>
        <div id="progressContainer">
          <div
            id="progressBar"
            className={isDone}
            style={{width: props.progress + '%'}} />
        </div>
      </div>
    </div>
  )
}

export default LoadingIndicator;
