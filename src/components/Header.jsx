import LinkButton from "./LinkButton.jsx";

import { InformationIcon } from "@iconicicons/react";

import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <h1 className="item header-title">
        <img src="../img/icon.svg" width="16" height="16" aria-hidden />
        HSC Past Papers
      </h1>
      <LinkButton
        url="/classic"
        text="About"
        className="item"
        icon={<InformationIcon />}
      />
    </header>
  );
}
