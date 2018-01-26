import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCloudDownloadAlt from '@fortawesome/fontawesome-free-solid/faCloudDownloadAlt';
import faLightbulb from '@fortawesome/fontawesome-free-solid/faLightbulb';
import faWindowClose from '@fortawesome/fontawesome-free-solid/faWindowClose';

import LinkButton from './LinkButton.jsx';
import ToggleButton from './ToggleButton.jsx';

import '../../css/Header.css';
import '../../css/dark.css';

const Header = () => {
  return(
    <header>
      <img className="item" src="../img/icon.svg" width="16" height="16" />
      <div className="item header-title">
        <FontAwesomeIcon icon={faCloudDownloadAlt} />
        Downloader
      </div>
      <ToggleButton
        id="darkMode"
        icon={faLightbulb}
        text="Dark mode"
        className="item"
        ifToggled={darkMode}
      />
      <LinkButton
        url="../"
        text="Exit"
        icon={faWindowClose}
        className="item"
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
