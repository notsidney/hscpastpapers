import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../../css/buttons.css';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {toggled: false};

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({toggled: !this.state.toggled});
    this.props.ifToggled(!this.state.toggled);
  }

  render() {
    let extraClasses = '';
    if (this.props.className) extraClasses = this.props.className;

    return(
      <button
        className={extraClasses + (this.state.toggled ? ' button active'
          : ' button')}
        id={this.props.id}
        onClick={this.toggle}
      >
        <FontAwesomeIcon icon={this.props.icon} />
        <span className="text">{this.props.text}</span>
      </button>
    )
  }
}

export default ToggleButton;
