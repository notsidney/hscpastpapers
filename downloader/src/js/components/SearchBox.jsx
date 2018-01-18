import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import styles from '../../css/SearchBox.css';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {text: ''};
  }

  render() {
    return(
      <div className="searchBoxContainer">
        <input
          className="searchBox"
          type="text"
          placeholder={'Search ' + this.props.title.toLowerCase() + '…'}
        />
        <FontAwesomeIcon icon="search" />
      </div>
    )
  }
}

export default SearchBox;
