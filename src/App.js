import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/Header';
import Login from './components/Login';
import { fetchUser } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="d-flex justify-content-center">
            <Login />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
