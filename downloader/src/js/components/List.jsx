import React from 'react';

import ListItem from './ListItem.jsx';

import styles from '../../css/List.css';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.activateItem = this.activateItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {selected: -1};
  }

  activateItem(index) {
    // this.setState({selected: index});
    console.log('activateItem: ' + index);
  }

  handleClick() {
    console.log('click');
  }

  render() {
    const listItems = this.props.items.map((item, index) => 
      <ListItem
        key={item}
        index={index}
        text={item}
        onClick={this.handleClick()}
      />
    );

    return(
      <section>
        <ol>{listItems}</ol>
      </section>
    )
  }
}

export default List;
