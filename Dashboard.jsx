//Modules/Dashboard.js

import React, { Component } from "react";
import Course from "./Course";
const axios = require("axios");

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        cources: [
          { id: 1, name: "cource1" },
          { id: 2, name: "cource2" },
          { id: 3, name: "cource3" },
          { id: 4, name: "cource4" }
        ]
      }
    };
    this.handleOnApiData = this.handleOnApiData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete = id => {
    let data = {};
    data.cources = this.state.data.cources.filter(course => {
      return course.id !== id;
    });
    this.setState({ data: data });
  };
  render() {
    return (
      <Fragment>
        <h1> Dashboard contents Are here</h1> {this.props.name}
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div>
          {this.state.data.cources.map(cours => (
            <Course
              key={cours.id}
              course={cours}
              onDelete={this.handleDelete}
            />
          ))}
        </div>
        <button type="button" onClick={this.handleOnApiData}>
          Make Request
        </button>
      </Fragment>
    );
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/cources").then(response => {
      console.log("response");
      console.log(response);
      this.setState((this.state.data.cources = response.data));
      console.log("this.state.data.cources");
      console.log(this.state.data.cources);
    });
  }
  handleChange(e) {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  }

  handleOnApiData() {
    console.log(this.state.name);
    this.props.onApiData("Arvind");
  }
}

export default Dashboard;
