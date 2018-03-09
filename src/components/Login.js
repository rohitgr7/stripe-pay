import React, { Component } from 'react';
import { connect } from 'react-redux';

import Payment from './Payment';

class Login extends Component {
  renderLogin = () => {
    const { user } = this.props;
    switch (user) {
      case null:
        return;
      case false:
        return (
          <a href="/auth/google" className="btn btn-danger btn-lg">
            Login
          </a>
        );
      default:
        return (
          <div>
            <h1>Credits: {user.credits}</h1>
            <br />
            <Payment />
            <a href="/auth/logout" className="btn btn-danger btn-lg ml-2">
              Logout
            </a>
          </div>
        );
    }
  };

  render() {
    return <div>{this.renderLogin()}</div>;
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps)(Login);
