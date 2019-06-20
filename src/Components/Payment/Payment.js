import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class TakeMoney extends React.Component {
  
  onToken = (token) => {
    console.log("payment done");
    console.log("redirect to tracking");
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        // alert(`We are in business, ${data.email}`);
        alert('We are in business');
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_moQf2agBX9vIiwTZ9EEkt4B1002nfWrMTi"
      />
    )
  }
}