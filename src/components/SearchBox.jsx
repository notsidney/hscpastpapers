import { SearchIcon } from "@iconicicons/react";

import "../css/SearchBox.css";

export default function SearchBox(props) {
  return (
    <div className="search-box-container">
      <input
        className="search-box"
        type="text"
        autoFocus={props.autoFocus}
        aria-label={"Search " + props.title.toLowerCase()}
        placeholder={"Search " + props.title.toLowerCase()}
        onChange={(e) => props.filterItems(e.target.value)}
      />
      <SearchIcon />
    </div>
  );
}
