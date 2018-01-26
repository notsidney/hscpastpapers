import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';

import '../../css/SearchBox.css';

class SearchBox extends React.Component {
  render() {
    return(
      <div className="search-box-container">
        <input
          className="search-box"
          type="text"
          placeholder={'Search ' + this.props.title.toLowerCase() + '…'}
          onChange={(e) => this.props.filterItems(e.target.value)}
          ref={node => this.node = node}
        />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    )
  }

  componentDidMount() {
    this.node.focus();
  }
}

export default SearchBox;
