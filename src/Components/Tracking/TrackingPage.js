import React, { Component } from 'react';
import MapComponent from './Map/Map';

export default class TrackingPage extends Component {
  state= {
    password: this.props.location.state
    };
  
  render() {
    return (
      <MapComponent password={this.state.password}/>  
    );
  }
}