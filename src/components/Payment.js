import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import { handleToken } from './../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Stripe Pay"
        description="$5 for 5 credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey="pk_test_f080bgugXjC6vFARRooE59mJ"
      >
        <button className="btn btn-primary btn-lg">ADD CREDITS</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handleToken })(Payments);
