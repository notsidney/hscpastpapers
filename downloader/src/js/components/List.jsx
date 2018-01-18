import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import ListItem from './ListItem.jsx';
import SearchBox from './SearchBox.jsx';

import styles from '../../css/List.css';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.activateItem = this.activateItem.bind(this);
  }

  activateItem(index) {
    this.props.selectItem(this.props.title, index);
  }

  handleClick() {
    console.log('click');
  }

  render() {
    if (this.props.items.length > 0) {
      const listItems = this.props.items.map((item, index) =>
        (index === this.props.selected) ?
          <ListItem
            key={item}
            index={index}
            text={item}
            activateItem={this.activateItem}
            active="true"
          />
        :
          <ListItem
            key={item}
            index={index}
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
          <SearchBox title={this.props.title + 's'} />
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
