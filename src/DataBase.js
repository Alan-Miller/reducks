import React, { Component } from 'react';
import axios from 'axios';

class DataBase extends Component {

  constructor() {
    super()

    this.state = { 
      auth_id: 'asdf1234',
      user: {}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3010/api/users/${this.state.auth_id}`)
    .then(response => {
      this.setState({user: response.data})
    })
  }

  render() {
    return (
      <div>
        <h1>DataBase</h1>
        <h4>component calls database sets values on Redux</h4>
        <div>Name: {this.state.user.name}</div>
        <div>ID: {this.state.user.id}</div>
      </div>
    )
  }
}

export default DataBase;