import React from "react";

import "../css/buttons.css";

const LinkButton = (props) => {
  let extraClasses = "";
  if (props.className) extraClasses = props.className;
  let extraProps = {};

  if (props.newTab) {
    extraProps.target = "_blank";
    extraProps.rel = "noopener noreferrer nofollow";
  }

  return (
    <a className={extraClasses + " button"} href={props.url} {...extraProps}>
      <span className="text">{props.text}</span>
      {props.icon}
    </a>
  );
};

export default LinkButton;
