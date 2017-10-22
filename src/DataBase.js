import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setDBdata } from './redux/reducer';

class DataBase extends Component {

  constructor() {
    super()

    this.state = { 
      auth_id: 'secret_authID_321'
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3010/api/users/${this.state.auth_id}`)
    .then(responseObject => {
      console.log('db responseObject', responseObject.data)
      this.props.setDBdata(responseObject.data)
    })
  }

  render() {
    console.log('this.props.user', this.props.user);

    return (
      <div>
        <h1>DataBase</h1>
        <h4>component calls database sets values on Redux</h4>
        <div>{this.props.user.name}</div>
        <div>{this.props.user.id}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

// export default DataBase;
export default connect(mapStateToProps, {setDBdata: setDBdata})(DataBase);

