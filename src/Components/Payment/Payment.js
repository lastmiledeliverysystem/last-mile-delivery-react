import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import axios from 'axios';

const generator = require('generate-password');

export default class TakeMoney extends React.Component {
  
    state = {
        address: {
          longitude: '',
          latitude: ''
        },
        trackingPassword: '',
      };
  onToken = (token) => {
    console.log("payment done");
    console.log("redirect to tracking");
    axios.post('http://localhost:8000/api/orders',
        {
            total: this.props.totalPrice, 
            items: this.props.cartItems,
            notes: this.props.comment,
            address:{
                long: this.state.address.longitude,
                lat: this.state.address.latitude  
            }
          }
            , {headers:{'x-auth-token':localStorage.getItem('token')}}
        )
    .then(res => {
      console.log("blabla", res.data);
    }).catch( error => {
      console.log(error.response);
    });
  }
  passwordHandler = () => {
    const password = generator.generate({
      length: 10,
      numbers: true,
      uppercase: false
    });
    this.setState({ trackingPassword: password});
    console.log("password", this.state.trackingPassword);
  }
  locationHandler = () => {
    const success = (position)=> {
      try{
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(this);
      this.setState({address: {
        longitude,
        latitude
      }})
      console.log("location", this.state.address.longitude, this.state.address.latitude);

    } catch(err){

      console.log(err.response);
    }
  }
      navigator.geolocation.getCurrentPosition(success);
    }
  render() {
    return (
      // ...
      <StripeCheckout
        label= "PROCEED TO CHECKOUT"
        token={this.onToken}
        stripeKey="pk_test_moQf2agBX9vIiwTZ9EEkt4B1002nfWrMTi">
        <Link to={'/TrackingPassword/'}>
        <Button positive onClick={this.locationHandler}>PROCEED TO CHECKOUT</Button>
        </Link>
        </StripeCheckout>
    )
  }
}