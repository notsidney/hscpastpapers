import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import faSearch from "@fortawesome/fontawesome-free-solid/faSearch";

import "../css/SearchBox.css";

class SearchBox extends React.PureComponent {
  render() {
    return (
      <div className="search-box-container">
        <input
          className="search-box"
          type="text"
          placeholder={"Search " + this.props.title.toLowerCase() + "…"}
          onChange={(e) => this.props.filterItems(e.target.value)}
          autoFocus={this.props.autoFocus}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    );
  }
}

export default SearchBox;
