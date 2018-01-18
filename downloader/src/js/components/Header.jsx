import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import LinkButton from './LinkButton.jsx';
import ToggleButton from './ToggleButton.jsx';

import styles from '../../css/Header.css';

const Header = () => {
  return(
    <header>
      <img className="item" src="../img/icon.svg" width="16" height="16" />
      <div className="item headerTitle">
        <FontAwesomeIcon icon="cloud-download-alt" />
        Downloader
      </div>
      <ToggleButton
        id="darkMode"
        icon="moon"
        text="Dark mode"
        ifToggled={darkMode}
      />
      <LinkButton
        url="../"
        text="Exit"
        icon="window-close"
        className="item right"
      />
    </header>
  )
}

function darkMode(active) {
  (active) ?
    document.body.classList.add('dark')
  :
    document.body.classList.remove('dark')
  ;
}

export default Header;
