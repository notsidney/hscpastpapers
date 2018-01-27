import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

import '../../css/SearchBox.css';

const SearchBox = (props) => {
  return(
    <div className="search-box-container">
      <input
        className="search-box"
        type="text"
        placeholder={'Search ' + props.title.toLowerCase() + '…'}
        onChange={(e) => props.filterItems(e.target.value)}
        autoFocus={props.autoFocus}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
    )
}

export default SearchBox;
