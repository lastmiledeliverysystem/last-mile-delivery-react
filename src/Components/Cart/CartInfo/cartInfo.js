import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default class cartInfo extends Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>Total Price</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <span>
            <Icon name="dollar" />
            1900
          </span>
        </Card.Content>
      </Card>
    );
  }
}
