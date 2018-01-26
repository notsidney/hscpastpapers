import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';

import '../../css/ListItem.css';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { focused: false };
  }

  render() {
    return(
      <li
        className={(this.props.active) ? 'active' : ''}
        onClick={() => { this.props.activateItem(this.props.index); }}
        tabIndex={this.state.focused ? 0 : -1}
        ref={this.state.focused ? node => this.node = node : false}
      >
        <span className="list-item-text">{this.props.text}</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </li>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.focused && nextProps.focused) {
      this.setState({focused: true});
    }
    else if (this.state.focused && !nextProps.focused) {
      this.setState({focused: false});
    }
  }

  componentDidUpdate() {
    if (this.state.focused) this.node.focus();
  }
}

export default ListItem;
