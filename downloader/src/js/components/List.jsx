import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import ListItem from './ListItem.jsx';
import SearchBox from './SearchBox.jsx';

import '../../css/List.css';

class List extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '', filter: false,
      filteredList: [], filteredItemsIndexes: [],
      focused: -1
    };

    this.focusSection = this.focusSection.bind(this);
    this.activateItem = this.activateItem.bind(this);
    this.filterItems = this.filterItems.bind(this);
    this.moveFocus = this.moveFocus.bind(this);

    this.listArray = this.props.items;
  }

  // When section is clicked, set focus to search box within section
  focusSection(liftToState) {
    this.section.getElementsByTagName('input')[0].focus();
    // Use !== false so it triggers even if parameter is not passed
    if (liftToState !== false) this.props.sectionFocus(this.props.index);
  }

  activateItem(index, event) {
    if (event) event.stopPropagation();
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
        if (this.state.focused > -1) {
          this.activateItem(this.state.focused);
          this.props.sectionFocus('f');
        }
        break;

      case LEFT:
        e.preventDefault();
        this.props.sectionFocus('b');
        break;
    }
  }

  render() {
    // Only render if props array has elements
    if (this.props.items.length > 0) {
      // Choose source array based on whether the list is being filtered
      const sourceArray = this.state.filter ?
        this.state.filteredList : this.props.items;
      // If source array has elements...
      const listContents = (sourceArray.length > 0) ?
        // ...wrap in an ol...
        <ol ref={ol => this.ol = ol}> {
          // ...and create ListItems for each item in array
          sourceArray.map((item, index) => {
            const itemIndex = this.state.filter ?
              this.props.items.indexOf(item) : index;
            return <ListItem
              key={item}
              // Index must be the same as from props, not the filtered array
              index={itemIndex}
              text={item}
              activateItem={this.activateItem}
              // Highlight if selected
              active={item === this.props.items[this.props.selected]}
              // Highlight if focused
              focused={itemIndex === this.state.focused}
            />
          })
        }</ol>
      // Else, show a message
      :
        <div className="empty-message">No results</div>
      ;

      return(
        <section
          onKeyDown={this.moveFocus}
          onClick={this.focusSection}
          ref={section => this.section = section}
        >
          <div className="title">
            <FontAwesomeIcon icon={this.props.icon} fixedWidth />
            Select {this.props.title}
          </div>
          <SearchBox
            title={this.props.title + 's'}
            filterItems={this.filterItems}
            autoFocus={this.props.autoFocus}
          />
          {listContents}
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
    // Show disabled class for animation when list items change
    if (this.props.items.length > 0 &&
        nextProps.items.length > 0 &&
        this.props.prevSelection !== nextProps.prevSelection) {
      this.section.classList.add('disabled');
    }
  }

  componentDidUpdate() {
    // Remove disabled class to show again
    if (this.props.items.length > 0 &&
      this.section.classList.contains('disabled'))
        setTimeout(() => this.section.classList.remove('disabled'), 200);
    // If an element is focused but not selected, scroll to it
    if (this.ol &&
      this.ol.getElementsByClassName('focused').length > 0 &&
      this.state.focused !== this.props.selected) {
        this.ol.scrollTop =
          this.ol.getElementsByClassName('focused')[0].offsetTop - 18; // 18 gap
      }
    // If focused in props, focus on searchBox
    if (this.props.focus) this.focusSection(false);
  }
}

export default List;
