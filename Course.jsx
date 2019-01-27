//Modules/Course.jsx

import React, { Component } from "react";
class Course extends Component {
  state = {};
  render() {
    console.log("course props");
    console.log(this.props);
    return (
      <div>
        <label>{this.props.course.id}</label>
        <label>{this.props.course.name}</label>
        <button
          onClick={() => {
            this.props.onDelete(this.props.course.id);
          }}
        >
          delete
        </button>
      </div>
    );
  }
}

export default Course;
