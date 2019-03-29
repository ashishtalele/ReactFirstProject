import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header'

class About extends Component {
  render() {
    const header = "About Us";
    return (
      <div className="App">
        <Header header={header}/>
        <p>About Us</p>
      </div>
    );
  }
}

export default About;
