import React, { Component } from 'react';
import { connect } from 'react-redux';

import Payment from './components/Payment';
import Header from './components/Header';
import { fetchUser } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.user ? <Payment /> : <a href="/auth/google">Login</a>}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
};

export default connect(mapStateToProps, { fetchUser })(App);
