import React from 'react';
import FontAwesome from 'react-fontawesome';

import ListItem from './ListItem.jsx';
import SearchBox from './SearchBox.jsx';

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
      	<div className="title">
      		<FontAwesome name={this.props.icon} />
      		{this.props.title}
      	</div>
      	<SearchBox title={this.props.title + 's'} />
        <ol>{listItems}</ol>
      </section>
    )
  }
}

export default List;
