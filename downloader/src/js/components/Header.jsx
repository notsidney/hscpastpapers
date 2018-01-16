import React from 'react';
import FontAwesome from 'react-fontawesome';

import LinkButton from './LinkButton.jsx';

import styles from '../../css/Header.css';

const Header = () => {
  return(
    <header>
      <img className="item" src="../img/icon.svg" width="16" height="16" />
      <div className="item headerTitle">
      	<FontAwesome name="cloud-download" />
      	Downloader
      </div>
      <LinkButton
      	url="../"
      	text="Exit"
      	icon="window-close"
      	className="item right"
      />
    </header>
  )
}

export default Header;
