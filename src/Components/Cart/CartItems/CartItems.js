import React, { Component } from 'react';
import { Item, Segment } from 'semantic-ui-react';
import CartItem from './CartItem/CartItem';

export default class CartItems extends Component {
  state = {
    cartItemss: [
      {
        name: 'Something Useless',
        img: 'https://react.semantic-ui.com/images/wireframe/image.png',
        price: 50
      },
      {
        name: 'Another Useless Thing"',
        img: 'https://react.semantic-ui.com/images/wireframe/image.png',
        price: 5000
      },
      {
        name: 'I like Useless Stuff, Fight me!',
        img: 'https://react.semantic-ui.com/images/wireframe/image.png',
        price: 19000
      }
    ]
  };
  render() {
    return (
      <Segment padded>
        <Item.Group divided>
          {this.state.cartItemss.map(item => (
            <CartItem img={item.img} name={item.name} price={item.price} />
          ))}
        </Item.Group>
      </Segment>
    );
  }
}
