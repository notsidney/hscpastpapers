import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import List from './components/List.jsx';

import styles from '../css/base.css';

const courses = ['Aboriginal Studies', 'Agriculture', 'Ancient History', 'Arabic Beginners', 'Arabic Continuers', 'Arabic Extension', 'Armenian Continuers', 'Automotive', 'Biology', 'Business Services'];

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			course: -1,
			year: -1,
			doc: -1
		};
	}

  render() {
    return(
    	<div className="container">
	      <Header />
	      <div className="listContainer">
		      <List items={courses} />
		    </div>
	    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
