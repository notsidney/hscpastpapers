import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import faCloudDownloadAlt from '@fortawesome/fontawesome-free-solid/faCloudDownloadAlt';
import faLightbulb from '@fortawesome/fontawesome-free-solid/faLightbulb';
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
  faCloudDownloadAlt, faLightbulb, faWindowClose, faBook, faHistory, faFilePdf,
  faSearch, faChevronRight, faDownload, faEye, faLink, faCopy,
  faExternalLinkSquareAlt);

import Header from './components/Header.jsx';
import List from './components/List.jsx';
import DownloadView from './components/DownloadView.jsx';
import LoadingIndicator from './components/LoadingIndicator.jsx';

import '../css/base.css';
import '../css/spinner.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.loadData = this.loadData.bind(this);
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

  // Before loading data.json, check if localStorage cached version is expired
  componentDidMount() {
    // No need to check for localStorage support since it's more widely
    // supported than JS Promises, which is required by axios
    let expired = true;
    const lsTimestamp = localStorage.getItem('timestamp');
    // Get meta.json timestamp
    axios.get('../data/meta.json')
      .then(response => {
        // Store in localStorage
        localStorage.setItem('meta', JSON.stringify(response.data));
        console.log('Cached meta.json');
        // Check if there is a timestamp in localStorage
        if (lsTimestamp !== null) {
          // Compare with timestamp in localStorage:
          // if localStorage's timestamp is greater than timestamp of data.json,
          // data.json in localStorage is not expired
          if (new Date(response.data.timestamp) < new Date(lsTimestamp)) {
            expired = false;
          }
        }
        // Otherwise, put a timestamp in localStorage
        else {
          const newTimestamp = new Date();
          localStorage.setItem('timestamp', newTimestamp);
          console.log(`Set new download date: ${newTimestamp}`);
        }
        // Finally, load data
        this.loadData(expired);
      })
      .catch(error => alert(`Error loading data:\n${error}`));
  }
  // Load data.json into App state
  loadData(expired) {
    // Check if data.json is in localStorage and not expired
    const lsData = localStorage.getItem('data');
    if (lsData !== null && !expired) {
      console.log('Serving cached data.json');
      // Parse stringified JSON from localStorage
      try {
        const data = JSON.parse(lsData);
        // Add to App state
        this.setState({
          downloading: false,
          data: data,
          courseArray: data.map(elem => elem.course_name)
        });
      }
      // Display error message, remove from localStorage, and reload
      catch (e) {
        alert(`Failed to parse data.json from localStorage cache.\n
          ${e}\n\nPress OK to reload.`);
        localStorage.removeItem('data');
        location.reload();
      }
    }
    // Otherwise, download data.json
    else {
      console.log('Downloading data.json');
      axios.get('../data/data.json', {
        // Send progress to App state
        onDownloadProgress: progressEvent => {
          let progress = Math.floor(
            progressEvent.loaded / progressEvent.total * 100);
          this.setState({downloadProgress: progress});
        }
      })
        .then(response => {
          // Cache to localStorage
          localStorage.setItem('data', JSON.stringify(response.data));
          // Add to App state
          this.setState({
            downloading: false,
            data: response.data,
            courseArray: response.data.map(elem => elem.course_name)
          });
        })
        .catch(error => alert(`Error loading data:\n${error}`));
    }
  }
  // Handle when items are selected in <List>s
  selectItem(type, index) {
    switch(type) {

      case 'Course':
        this.setState({
          course: index,
          yearArray: this.state.data[index]
            .packs.map(elem => elem.year),
          // Reset
          docArray: [],
          year: -1,
          doc: -1,
          showDownloadView: false,
          docName: '',
          docLink: ''
        });
        break;

      case 'Year':
        this.setState({
          year: index,
          docArray: this.state.data[this.state.course]
            .packs[index]
            .docs.map(elem => elem.doc_name),
          // Reset
          doc: -1,
          showDownloadView: false,
          docName: '',
          docLink: ''
        });
        break;

      case 'Document':
        let dataEntryPoint = this.state.data[this.state.course]
          .packs[this.state.year]
          .docs[index];
        this.setState({
          doc: index,
          showDownloadView: true,
          docName: dataEntryPoint.doc_name,
          docLink: dataEntryPoint.doc_link
        });
        break;
    }
  }

  render() {
    // Show if loading
    const bodyElements = (this.state.downloading) ?
        <LoadingIndicator progress={this.state.downloadProgress} />
      :
        <main id="list-container">
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
            prevSelection={this.state.course}
            items={this.state.yearArray}
            selected={this.state.year}
            selectItem={this.selectItem}
          />
          <List
            title="Document"
            icon="file-pdf"
            prevSelection={this.state.year}
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
