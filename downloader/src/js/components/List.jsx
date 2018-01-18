import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import ListItem from './ListItem.jsx';
import SearchBox from './SearchBox.jsx';

import styles from '../../css/List.css';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = { searchQuery: '', filter: false };

    this.activateItem = this.activateItem.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }

  activateItem(index) {
    this.props.selectItem(this.props.title, index);
  }

  filterItems(query) {
    query ?
      this.setState({searchQuery: query.toLowerCase(), filter: true})
    :
      this.setState({searchQuery: '', filter: false});
  }

  render() {
    if (this.props.items.length > 0) {
      // Get array from props
      let listArray = this.props.items;
      // If items need to be filtered for search, filter them
      if (this.state.filter) {
        listArray = listArray.filter(
          item => item.toLowerCase().indexOf(this.state.searchQuery) > -1);
      }
      // Create elements for each item in array
      const listItems = listArray.map((item) =>
        // Highlight if selected
        (item === this.props.items[this.props.selected]) ?
          <ListItem
            key={item}
            // Index must be the same as from props, not the filtered array
            index={this.props.items.indexOf(item)}
            text={item}
            activateItem={this.activateItem}
            active="true"
          />
        :
          <ListItem
            key={item}
            index={this.props.items.indexOf(item)}
            text={item}
            activateItem={this.activateItem}
          />
      );

      return(
        <section>
          <div className="title">
            <FontAwesomeIcon icon={this.props.icon} fixedWidth />
            {this.props.title}
          </div>
          <SearchBox
            title={this.props.title + 's'}
            filterItems={this.filterItems}
          />
          <ol>{listItems}</ol>
        </section>
      )
    }
    else {
      return(
        <section className="disabled"></section>
      )
    }
  }
}

export default List;
