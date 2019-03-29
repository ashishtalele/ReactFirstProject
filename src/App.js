import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import MainRouter from './components/MainRouter';

class App extends Component {
  render() {
    return (
      <Fragment>
        <MainRouter />
      </Fragment>
    );
  }
}

export default App;
