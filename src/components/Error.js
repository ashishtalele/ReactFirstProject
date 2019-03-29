import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header'

class Error extends Component {
  render() {
    const header = "Error";
    return (
      <div className="App">
        <Header header={header}/>
        <p>Path Dose not exist !!!</p>
      </div>
    );
  }
}

export default Error;
