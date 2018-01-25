import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../../css/SearchBox.css';

const SearchBox = (props) => {
  return(
    <div className="search-box-container">
      <input
        className="search-box"
        type="text"
        placeholder={'Search ' + props.title.toLowerCase() + '…'}
        onChange={(e) => props.filterItems(e.target.value)}
      />
      <FontAwesomeIcon icon="search" />
    </div>
  )
}

export default SearchBox;
