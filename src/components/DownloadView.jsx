import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import faFilePdf from "@fortawesome/fontawesome-free-solid/faFilePdf";
import faEye from "@fortawesome/fontawesome-free-solid/faEye";
import faLink from "@fortawesome/fontawesome-free-solid/faLink";
import faCopy from "@fortawesome/fontawesome-free-solid/faCopy";
import faExternalLinkSquareAlt from "@fortawesome/fontawesome-free-solid/faExternalLinkSquareAlt";

import LinkButton from "./LinkButton.jsx";

import "../css/DownloadView.css";

class DownloadView extends React.PureComponent {
  constructor(props) {
    super(props);

    this.selectOnClick = this.selectOnClick.bind(this);
    this.copyLink = this.copyLink.bind(this);
  }

  selectOnClick() {
    this.linkBox.select();
  }

  copyLink() {
    this.linkBox.select();
    document.execCommand("Copy");
    alert("Copied link");
  }

  render() {
    if (this.props.enabled) {
      let fileName = /[^\/]+$/.exec(this.props.url);
      fileName = fileName[0].replace("?MOD=AJPERES", "");

      return (
        <section className="download-view" ref={(node) => (this.node = node)}>
          <h1>
            <FontAwesomeIcon icon={faFilePdf} />
            {fileName}
          </h1>
          <div className="controls-container">
            <LinkButton
              url={this.props.url}
              download="true"
              className="primary"
            />
            <LinkButton
              url={this.props.viewerUrl}
              text="Open in viewer"
              icon={faEye}
              newTab="true"
            />
            <div className="link-container">
              <FontAwesomeIcon icon={faLink} />
              <input
                type="text"
                className="linkBox"
                ref={(input) => (this.linkBox = input)}
                value={this.props.url}
                onClick={this.selectOnClick}
                readOnly
              />
              <button className="button" onClick={this.copyLink}>
                <FontAwesomeIcon icon={faCopy} />
                Copy link
              </button>
              <LinkButton
                url={this.props.url}
                text="Open in new tab"
                icon={faExternalLinkSquareAlt}
                newTab="true"
              />
            </div>
          </div>
        </section>
      );
    } else {
      return <section className="download-view disabled"></section>;
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url.length > 0 && this.props.url !== nextProps.url) {
      this.node.classList.add("disabled");
    }
  }

  componentDidUpdate() {
    if (this.props.url.length > 0) {
      setTimeout(() => this.node.classList.remove("disabled"), 200);
    }
  }
}

export default DownloadView;
