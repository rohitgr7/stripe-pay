import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderLogin = () => {
    const { user } = this.props;
    switch (user) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login</a>;
      default:
        return [
          <h3>Credits: {user.credits}</h3>,
          <a href="/auth/logout">Logout</a>
        ];
    }
  };

  render() {
    return (
      <div>
        <h1>Stripe Pay</h1>
        {this.renderLogin()}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    user
  };
};

export default connect(mapStateToProps)(Header);
