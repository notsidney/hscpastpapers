import React from 'react';
import axios from 'axios';

import faGraduationCap from '@fortawesome/fontawesome-free-solid/faGraduationCap';
import faHistory from '@fortawesome/fontawesome-free-solid/faHistory';
import faFilePdf from '@fortawesome/fontawesome-free-solid/faFilePdf';

import Header from './components/Header.jsx';
import List from './components/List.jsx';
import DownloadView from './components/DownloadView.jsx';
import LoadingIndicator from './components/LoadingIndicator.jsx';

import './css/base.css';
import './css/spinner.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      downloading: true, downloadProgress: 0,
      data: [],
      focusedSection: 0,
      courseArray: [], yearArray: [], docArray: [],
      course: -1,      year: -1,      doc: -1,
      courseName: '',  yearName: '',  docName: '',  docLink: '',
      showDownloadView: false
    };

    this.loadData = this.loadData.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.sectionFocus = this.sectionFocus.bind(this);
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
          focusedSection: 1,
          course: index,
          courseName: this.state.data[index].course_name,
          yearArray: this.state.data[index]
            .packs.map(elem => elem.year),
          // Reset
          docArray: [],
          year: -1, doc: -1,
          docName: '', docLink: '',
          showDownloadView: false
        });
        break;

      case 'Year':
        this.setState({
          focusedSection: 2,
          year: index,
          yearName: this.state.data[this.state.course].packs[index].year,
          docArray: this.state.data[this.state.course]
            .packs[index]
            .docs.map(elem => elem.doc_name),
          // Reset
          doc: -1,
          docName: '', docLink: '',
          showDownloadView: false
        });
        break;

      case 'Document':
        let dataEntryPoint = this.state.data[this.state.course]
          .packs[this.state.year]
          .docs[index];
        this.setState({
          focusedSection: 3,
          doc: index,
          docName: dataEntryPoint.doc_name, docLink: dataEntryPoint.doc_link,
          showDownloadView: true
        });
        break;
    }
  }

  sectionFocus(input) {
    let newFocus = null;

    if (typeof input === 'number') {
      newFocus = input;
    }
    else if (input === 'f') {
      newFocus = this.state.focusedSection + 1;
    }
    else if (input === 'b') {
      newFocus = this.state.focusedSection - 1;
    }

    if (newFocus > 2) newFocus = 2;
    if (newFocus < 0) newFocus = 0;

    this.setState({focusedSection: newFocus});
  }

  render() {
    // Show if loading
    const bodyElements = (this.state.downloading) ?
        <LoadingIndicator progress={this.state.downloadProgress} />
      :
        <main id="list-container">
          <List
            title="Course"
            icon={faGraduationCap}
            items={this.state.courseArray}
            selected={this.state.course}
            selectItem={this.selectItem}
            sectionFocus={this.sectionFocus}
            focus={this.state.focusedSection === 0}
            index={0}
            autoFocus={true}
          />
          <List
            title="Year"
            icon={faHistory}
            prevSelection={this.state.course}
            items={this.state.yearArray}
            selected={this.state.year}
            selectItem={this.selectItem}
            sectionFocus={this.sectionFocus}
            focus={this.state.focusedSection === 1}
            index={1}
          />
          <List
            title="Document"
            icon={faFilePdf}
            prevSelection={this.state.year}
            items={this.state.docArray}
            selected={this.state.doc}
            selectItem={this.selectItem}
            sectionFocus={this.sectionFocus}
            focus={this.state.focusedSection === 2}
            index={2}
          />
          <DownloadView
            enabled={this.state.showDownloadView}
            url={this.state.docLink}
            viewerUrl={'../'
              + '?course=' + this.state.courseName.toLowerCase()
              + '&year=' + this.state.yearName
              + '&doc=' + this.state.docName.toLowerCase()
            }
            sectionFocus={this.sectionFocus}
            focus={this.state.focusedSection === 3}
            index={3}
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

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.downloading !== nextState.downloading) return true;
    if (this.state.downloadProgress !== nextState.downloadProgress) return true;
    if (this.state.course !== nextState.course) return true;
    if (this.state.year !== nextState.year) return true;
    if (this.state.doc !== nextState.doc) return true;
    if (this.state.focusedSection !== nextState.focusedSection) return true;
    if (this.state.showDownloadView !== nextState.showDownloadView) return true;
    return false;
  }
}