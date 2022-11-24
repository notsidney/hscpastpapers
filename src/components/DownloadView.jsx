import React from "react";

import { LinkIcon, ArrowUpRightIcon } from "@iconicicons/react";

import "../css/DownloadView.css";

class DownloadView extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.enabled) {
      return (
        <section className="download-view" ref={(node) => (this.node = node)}>
          <div className="info">
            <LinkIcon />
            <h2>{this.props.docName}</h2>
            <p>
              {this.props.courseName} / {this.props.yearName}
            </p>
          </div>
          <div className="controls-container">
            <a
              className="button primary"
              href={this.props.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Open in NESA website
              <ArrowUpRightIcon className="end" />
            </a>
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
      setTimeout(() => {
        this.node.classList.remove("disabled");
        if (this.props.focus) {
          setTimeout(() => {
            this.node.scrollIntoView({ behavior: "smooth", inline: "center" });
          }, 250);
        }
      }, 200);
    }
  }
}

export default DownloadView;
