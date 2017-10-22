import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setDBdata } from './redux/reducer';

class Database extends Component {

  constructor() {
    super()

    this.state = { 
      auth_id: 'secret_authID_321'
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3010/api/users/${this.state.auth_id}`)
    .then(responseObject => {
      this.props.setDBdata(responseObject.data)
    })
  }

  render() {
    return (
      <div>
        <h1>Database</h1>
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

// export default Database;
export default connect(mapStateToProps, {setDBdata: setDBdata})(Database);

