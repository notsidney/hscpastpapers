import { InformationIcon } from "@iconicicons/react";

import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <h1 className="item header-title">
        <img src="../img/icon.svg" width="16" height="16" aria-hidden />
        HSC Past Papers
      </h1>
      <button
        className="button item"
        onClick={() => document.getElementById("about-dialog").showModal()}
      >
        <InformationIcon className="start" />
        About
      </button>
    </header>
  );
}
