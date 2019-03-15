import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default class cartInfo extends Component {
  
 
  componentDidUpdate(prevProps) {
    if (this.props.cartItems !== prevProps.cartItems) {
     this.props.calcTotalPrice();
    }
  }

  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>Total Price</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <span>
            <Icon name="dollar" />
            {this.props.totalPrice}
          </span>
        </Card.Content>
      </Card>
    );
  }
}
