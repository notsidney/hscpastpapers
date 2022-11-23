import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import faCloudDownloadAlt from "@fortawesome/fontawesome-free-solid/faCloudDownloadAlt";
import faLightbulb from "@fortawesome/fontawesome-free-solid/faLightbulb";
import faWindowClose from "@fortawesome/fontawesome-free-solid/faWindowClose";

import LinkButton from "./LinkButton.jsx";
import ToggleButton from "./ToggleButton.jsx";

import "../css/Header.css";
import "../css/dark.css";

class Header extends React.PureComponent {
  render() {
    return (
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
          firstState={document.body.classList.contains("dark")}
        />
        <LinkButton
          url="../"
          text="Exit"
          icon={faWindowClose}
          className="item"
        />
      </header>
    );
  }
}

function darkMode(active) {
  if (active) {
    document.body.classList.add("dark");
    localStorage.setItem("dark", "true");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("dark", "false");
  }
}

export default Header;
