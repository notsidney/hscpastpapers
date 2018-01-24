import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import LinkButton from './LinkButton.jsx';

import styles from '../../css/DownloadView.css';

class DownloadView extends React.Component {
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
    document.execCommand('Copy');
    alert('Copied link');
  }

  render() {
    if (this.props.enabled) {
      let fileName = /[^\/]+$/.exec(this.props.url);
      fileName = fileName[0].replace('?MOD=AJPERES','');

      return(
        <section className="downloadView" ref={node => this.node = node}>
          <h1>
            <FontAwesomeIcon icon="file-pdf" />
            {fileName}
          </h1>
          <div className="controlsContainer">
            <LinkButton
              url={this.props.url}
              download="true"
              className="primary"
            />
            <LinkButton
              url={this.props.url}
              text="Open in viewer"
              icon="eye"
              newTab="true"
            />
            <div className="linkContainer">
              <FontAwesomeIcon icon="link" />
              <input
                type="text"
                className="linkBox"
                ref={input => this.linkBox = input}
                value={this.props.url}
                onClick={this.selectOnClick}
                readOnly
              />
              <button className="button" onClick={this.copyLink}>
                <FontAwesomeIcon icon="copy" />
                Copy link
              </button>
              <LinkButton
                url={this.props.url}
                text="Open in new tab"
                icon="external-link-square-alt"
                newTab="true"
              />
            </div>
          </div>
        </section>
      )
    }
    else {
      return <section className="downloadView disabled"></section>
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url.length > 0 &&
        this.props.url !== nextProps.url) {
      this.node.classList.add('disabled');
    }
  }

  componentDidUpdate() {
    if (this.props.url.length > 0) {
      setTimeout(() => this.node.classList.remove('disabled'), 200);
    }
  }
}

export default DownloadView;
