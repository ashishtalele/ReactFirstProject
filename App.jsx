import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Modules/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      id: ""
    };
    this.apiData = this.apiData.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Dashboard name={this.state.name} onApiData={this.apiData} />
      </div>
    );
  }
  apiData(name) {
    this.state.name = name;
    this.setState(this.state);
  }
}

export default App;
