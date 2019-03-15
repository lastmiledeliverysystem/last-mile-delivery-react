import React, { Component } from 'react'
import { Grid, Segment  } from 'semantic-ui-react';

export default class NotFound extends Component {
  render() {
    return (
        <Grid.Column textAlign='center' width={16}>
          <Segment>Not Found</Segment>
        </Grid.Column>
    )
  }
}
