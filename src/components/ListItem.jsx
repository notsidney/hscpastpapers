import React from "react";

import { ChevronRightIcon } from "@iconicicons/react";

import "../css/ListItem.css";

class ListItem extends React.PureComponent {
  render() {
    let classes = "";
    if (this.props.active) classes += "active ";
    if (this.props.focused) classes += "focused";

    return (
      <li
        className={classes}
        onClick={(e) => {
          this.props.activateItem(this.props.index, e);
          if (this.props.onClick) this.props.onClick();
        }}
      >
        <span className="list-item-text">{this.props.text}</span>
        {this.props.active && <ChevronRightIcon className="chevron-right" />}
      </li>
    );
  }
}

export default ListItem;
