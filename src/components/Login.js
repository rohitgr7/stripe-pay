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
          <a
            className="btn btn-danger btn-lg"
            href="https://pay-stripe.herokuapp.com/auth/google"
          >
            Login
          </a>
        );
      default:
        return (
          <div>
            <h1>Credits: {user.credits}</h1>
            <br />
            <Payment />
            <a
              className="btn btn-danger btn-lg ml-2"
              href="https://pay-stripe.herokuapp.com/auth/logout"
            >
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
