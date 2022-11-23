import React from "react";

import "../css/LoadingIndicator.css";

const LoadingIndicator = (props) => {
  let isDone = props.progress === 100 ? "done" : "";

  return (
    <div className="loading-indicator-flex-container">
      <div className="loading-indicator-container">
        <div className="left text">Loading data…</div>
        <div className="right text">{props.progress}%</div>
        <div id="progress-container">
          <div
            id="progress-bar"
            className={isDone}
            style={{ width: props.progress + "%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;
