import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header'

class Contact extends Component {
  render() {
    const header = "Contact Us";
    return (
      <div className="App">
        <Header header={header}/>
        <p>Contact Us</p>
      </div>

    );
  }
}

export default Contact;
