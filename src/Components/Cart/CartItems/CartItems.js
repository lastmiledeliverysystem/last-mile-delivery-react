import React, { Component } from 'react';
import { Item, Segment } from 'semantic-ui-react';
import CartItem from './CartItem/CartItem';

export default class CartItems extends Component {

  render() {
    // console.log("iteems",this.props.cartItems);
    return (
      <Segment padded>
        <Item.Group divided>
          {this.props.cartItems.map(item => (
            <CartItem deleteItem={this.props.deleteItem} key={item._id} id ={item._id} img={item.options.image} name={item.name} price={item.price} />
          ))}
        </Item.Group>
      </Segment>
    );
  }
}
