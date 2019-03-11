import React, { Component } from 'react';
import { Item, Segment } from 'semantic-ui-react';
import CartItem from './CartItem/CartItem';

export default class CartItems extends Component {
  render() {
    return (
      <Segment padded>
        <Item.Group divided>
          {this.props.cartItems.map(item => (
            <CartItem deleteItem={this.props.deleteItem} key={item.id} id ={item.id} img={item.img} name={item.name} price={item.price} />
          ))}
        </Item.Group>
      </Segment>
    );
  }
}
