import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios'

// https://reqres.in/api/users?page=2

import UserForm from './UserForm';
import Header from './Header';

class Home extends Component {

  state = {
    repos : null,
    page : null
  }

  getUser = (event) => {
    event.preventDefault();
    const page = event.target.elements.pageno.value;
    this.setState( { page });
    if (page === '2') {
      axios.get('https://reqres.in/api/users?page=' + page) //testin api
      .then((res) => {
        const repos = res.data.total;
        this.setState( { repos }); //{repos : repos} both are same
      })
    }
  }
  render() {
    const header = "HTTP Request in react using axiox";
    return (
      <div className="App">
      <Header header={header}/>
      <UserForm getUser={this.getUser}/>
      { this.state.page === '2' ? <p> Total : { this.state.page }</p> : <p>Please try with 2</p>}
    </div>
    );
  }
}

export default Home;
