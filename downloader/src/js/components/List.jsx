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
      focused: -1
    };

    this.activateItem = this.activateItem.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.moveFocus = this.moveFocus.bind(this);
  }

  activateItem(index) {
    this.setState({focused: index});
    this.props.selectItem(this.props.title, index);
  }

  filterItems(query) {
    query ?
      this.setState({searchQuery: query.toLowerCase(), filter: true})
    :
      this.setState({searchQuery: '', filter: false});
  }

  moveFocus(e) {
    console.log('key', e.keyCode);
    const LEFT  = 37;
    const UP    = 38;
    const RIGHT = 39;
    const DOWN  = 40;
    const ENTER = 13;

    switch(e.keyCode) {
      case DOWN:
        e.preventDefault();
        if (this.state.focused < this.props.items.length - 1) {
          this.setState({focused: this.state.focused + 1});
        }
        break;

      case UP:
        e.preventDefault();
        if (this.state.focused > 0) {
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
    console.log('focused', this.state.focused, 'length', this.props.items.length);
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
