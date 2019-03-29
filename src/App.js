import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
class App extends Component {
  render() {
    // exact: use only exact path
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route component={Error} exact/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
