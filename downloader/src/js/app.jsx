import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import List from './components/List.jsx';
import DownloadView from './components/DownloadView.jsx';

import styles from '../css/base.css';

const courses = ['Aboriginal Studies', 'Agriculture', 'Ancient History', 'Arabic Beginners', 'Arabic Continuers', 'Arabic Extension', 'Armenian Continuers', 'Automotive', 'Biology', 'Business Services', 'Business Studies', 'Chemistry', 'Chinese Beginners', 'Chinese Continuers', 'Chinese Extension', 'Chinese and Literature/Chinese Background Speakers', 'Chinese in Context/Heritage Chinese (Mandarin)', 'Classical Greek Continuers', 'Classical Hebrew Extension', 'Community and Family Studies', 'Construction'];
const years = ['2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001'];
const docs = ['HSC Exam Paper', 'Marking Guidelines', 'Sample Answers'];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.selectItem = this.selectItem.bind(this);

		this.state = {
			course: -1,
			year: -1,
			doc: -1
		};
	}

	selectItem(type, index) {
		switch(type) {
			case 'Course':
				this.setState({course: index});
		}
	}

  render() {
    return(
    	<div className="container">
	      <Header />
	      <div className="listContainer">
		      <List title="Course" icon="graduation-cap" selected={this.state.course} selectItem={this.selectItem} items={courses} />
		      <List title="Year" icon="history" items={[]} />
		      <List title="Doc" icon="file-text" items={[]} />
		      <DownloadView disabled="true" docName="really-long-doc-name-doc.pdf" url="example.com/doc.pdf" />
		    </div>
	    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
