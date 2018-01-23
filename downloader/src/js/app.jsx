import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faCloudDownloadAlt from '@fortawesome/fontawesome-free-solid/faCloudDownloadAlt';
import faMoon from '@fortawesome/fontawesome-free-solid/faMoon';
import faWindowClose from '@fortawesome/fontawesome-free-solid/faWindowClose';
import faBook from '@fortawesome/fontawesome-free-solid/faBook';
import faHistory from '@fortawesome/fontawesome-free-solid/faHistory';
import faFilePdf from '@fortawesome/fontawesome-free-solid/faFilePdf';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faChevronRight from '@fortawesome/fontawesome-free-solid/faChevronRight';
import faDownload from '@fortawesome/fontawesome-free-solid/faDownload';
import faEye from '@fortawesome/fontawesome-free-solid/faEye';
import faLink from '@fortawesome/fontawesome-free-solid/faLink';
import faCopy from '@fortawesome/fontawesome-free-solid/faCopy';
import faExternalLinkSquareAlt from '@fortawesome/fontawesome-free-solid/faExternalLinkSquareAlt';
fontawesome.library.add(
  faCloudDownloadAlt,
  faMoon,
  faWindowClose,
  faBook,
  faHistory,
  faFilePdf,
  faSearch,
  faChevronRight,
  faDownload,
  faEye,
  faLink,
  faCopy,
  faExternalLinkSquareAlt
);

import Header from './components/Header.jsx';
import List from './components/List.jsx';
import DownloadView from './components/DownloadView.jsx';
import LoadingIndicator from './components/LoadingIndicator.jsx';

import styles from '../css/base.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.selectItem = this.selectItem.bind(this);

    this.state = {
      downloading: true,
      downloadProgress: 0,
      data: [],
      courseArray: [],
      yearArray: [],
      docArray: [],
      course: -1,
      year: -1,
      doc: -1,
      showDownloadView: false,
      docName: '',
      docLink: ''
    };
  }

  componentDidMount() {
    // Load data.json
    axios.get('../data/data.json', {
      onDownloadProgress: progressEvent => {
        let progress = Math.floor(
          progressEvent.loaded / progressEvent.total * 100);
        this.setState({downloadProgress: progress});
      }
    })
    .then(response => {
      this.setState({
        downloading: false,
        data: response.data,
        courseArray: response.data.map(elem => elem.course_name)
      });
    })
    .catch(error => {
      alert('Error loading data:\n' + error);
    });
  }

  selectItem(type, index) {
    switch(type) {

      case 'Course':
        // Reset
        this.setState({
          yearArray: [],
          docArray: [],
          course: -1,
          year: -1,
          doc: -1,
          showDownloadView: false,
          docName: '',
          docLink: ''
        });
        // Show actual data
        this.setState({
          course: index,
          yearArray: this.state.data[index]
            .packs.map(elem => elem.year)
        });
        break;

      case 'Year':
        this.setState({
          year: index,
          docArray: this.state.data[this.state.course]
            .packs[index]
            .docs.map(elem => elem.doc_name),
          // reset
          doc: -1,
          showDownloadView: false,
          docName: '',
          docLink: ''
        });
        break;

      case 'Document':
        let dataEntry = this.state.data[this.state.course]
          .packs[this.state.year]
          .docs[index];
        this.setState({
          doc: index,
          showDownloadView: true,
          docName: dataEntry.doc_name,
          docLink: dataEntry.doc_link
        });
        break;
    }
  }

  render() {
    // Show if loading
    const bodyElements = (this.state.downloading) ?
        <LoadingIndicator progress={this.state.downloadProgress} />
      :
        <main id="listContainer">
          <List
            title="Course"
            icon="book"
            items={this.state.courseArray}
            selected={this.state.course}
            selectItem={this.selectItem}
          />
          <List
            title="Year"
            icon="history"
            items={this.state.yearArray}
            selected={this.state.year}
            selectItem={this.selectItem}
          />
          <List
            title="Document"
            icon="file-pdf"
            items={this.state.docArray}
            selected={this.state.doc}
            selectItem={this.selectItem}
          />
          <DownloadView
            enabled={this.state.showDownloadView}
            url={this.state.docLink}
          />
        </main>
    ;

    return(
      <React.Fragment>
        <Header />
        {bodyElements}
      </React.Fragment>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
