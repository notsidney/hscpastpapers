import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import ListItem from './ListItem.jsx';
import SearchBox from './SearchBox.jsx';

import '../../css/List.css';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '', filter: false,
      filteredList: [], filteredItemsIndexes: [],
      focused: -1
    };

    this.activateItem = this.activateItem.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.moveFocus = this.moveFocus.bind(this);

    this.listArray = this.props.items;
  }

  activateItem(index) {
    this.setState({focused: index});
    this.props.selectItem(this.props.title, index);
  }

  filterItems(query) {
    if (query) {
      // Array containing indexes of filtered items
      let filteredItemsIndexes = [];
      // Filter items and register their indexes to filteredItemsIndexes
      let filteredList = this.props.items.filter((item, index) => {
        if (item.toLowerCase().indexOf(query.toLowerCase()) > -1) {
          filteredItemsIndexes.push(index);
          return true;
        }
      });
      // Add to state
      this.setState({
        searchQuery: query.toLowerCase(),
        filter: true,
        filteredList: filteredList,
        filteredItemsIndexes: filteredItemsIndexes
      });
    }
    else {
      this.setState({
        searchQuery: '',
        filter: false,
        filteredList: [],
        filteredItemsIndexes: []
      });
    }
  }

  moveFocus(e) {
    const LEFT  = 37;
    const UP    = 38;
    const RIGHT = 39;
    const DOWN  = 40;
    const ENTER = 13;

    switch(e.keyCode) {
      case DOWN:
        e.preventDefault();
        // Focus only on filtered items
        if (this.state.filter) {
          // Find position of index of focused item in filteredItemsIndexes
          let index =
            this.state.filteredItemsIndexes.indexOf(this.state.focused);
          // Focus on next index from filteredItemsIndexes if it exists
          if (index < this.state.filteredItemsIndexes.length - 1) {
            this.setState({
              focused: this.state.filteredItemsIndexes[index + 1]
            });
          }
        }
        // Prevent from focusing on non-existent items
        else if (this.state.focused < this.props.items.length - 1) {
          this.setState({focused: this.state.focused + 1});
        }
        break;

      case UP:
        e.preventDefault();
        // Focus only on filtered items
        if (this.state.filter) {
          // Find position of index of focused item in filteredItemsIndexes
          let index =
            this.state.filteredItemsIndexes.indexOf(this.state.focused);
          // Focus on previous index from filteredItemsIndexes if it exists
          if (index > 0) {
            this.setState({
              focused: this.state.filteredItemsIndexes[index - 1]
            });
          }
        }
        // Prevent from focusing on non-existent items
        else if (this.state.focused > 0) {
          this.setState({focused: this.state.focused - 1});
        }
        break;

      case RIGHT:
      case ENTER:
        e.preventDefault();
        if (this.state.focused > -1) this.activateItem(this.state.focused);
        break;
    }
  }

  render() {
    if (this.props.items.length > 0) {
      // Choose source array based on whether the list is being filtered
      const sourceArray = this.state.filter ?
        this.state.filteredList : this.props.items;
      // Create elements for each item in array
      const listItems = sourceArray.map((item) =>
        <ListItem
          key={item}
          // Index must be the same as from props, not the filtered array
          index={this.props.items.indexOf(item)}
          text={item}
          activateItem={this.activateItem}
          // Highlight if selected
          active={item === this.props.items[this.props.selected]}
          // Highlight if focused
          focused={this.props.items.indexOf(item) === this.state.focused}
        />
      );

      return(
        <section
          tabIndex={0}
          onKeyDown={this.moveFocus}
          ref={node => this.node = node}
        >
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

  componentWillReceiveProps(nextProps) {
    if (this.props.items.length > 0 &&
        nextProps.items.length > 0 &&
        this.props.prevSelection !== nextProps.prevSelection) {
      this.node.classList.add('disabled');
    }
  }

  componentDidUpdate() {
    if (this.props.items.length > 0) {
      setTimeout(() => this.node.classList.remove('disabled'), 200);
    }
  }
}

export default List;
