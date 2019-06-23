import React, { Component } from 'react';
import MapComponent from './Map/Map';
import TrackingPassword from '../Tracking/TrackingPassword';
import { Grid } from 'semantic-ui-react';

export default class TrackingPage extends Component {
  render() {
    return (<Grid centered columns="three">
    <Grid.Row>
      <Grid.Column width={5}>
        <MapComponent/>
      </Grid.Column>
      <Grid.Column width={5}>
        <TrackingPassword/>
          </Grid.Column>
    </Grid.Row>
  </Grid>
    );
  }
}