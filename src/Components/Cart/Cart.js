import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Button, Header } from 'semantic-ui-react';
import ActionTab from './ActionBar/ActionBar';
import CartItems from './CartItems/CartItems';
import CartInfo from './CartInfo/cartInfo';

export default class Cart extends Component {
  state = {
    totalPrice: 0,
    items: [
      {
        id:1,
        name: 'Something Useless',
        img: 'https://react.semantic-ui.com/images/wireframe/image.png',
        price: 50
      },
      {
        id:2,
        name: 'Another Useless Thing"',
        img: 'https://react.semantic-ui.com/images/wireframe/image.png',
        price: 5000
      },
      { id:3,
        name: 'I like Useless Stuff, Fight me!',
        img: 'https://react.semantic-ui.com/images/wireframe/image.png',
        price: 19000
      }
    ]
  };

  componentDidMount(prevState){
      this.calcTotalPrice();
  }

  addToCart =() =>{
    let tempItems= this.state.items;
    tempItems.push({ id:tempItems.length+1,
      name: 'New Item ',
      img: 'https://react.semantic-ui.com/images/wireframe/image.png',
      price: 666
    });

    this.setState({items:tempItems})
    this.calcTotalPrice();
  }

  deleteItem=(id)=>{
    let tempItems= this.state.items;
    tempItems= tempItems.filter(el =>  el.id !== id)
    this.setState({items: tempItems});
    this.calcTotalPrice();
  }

  calcTotalPrice = () => {
    let sum = 0
    const items = this.state.items;
    for( let i = 0 ;i < items.length;i++){      
      sum = sum +  items[i].price; 
    }
    this.setState({totalPrice:sum})   
  }
  render() {
    return (
      <Grid>
        <Grid.Row centered padded="vertically">
          <ActionTab />
        </Grid.Row>

        <Grid.Row>
          <GridColumn width={2} />
          <Grid.Column width={9}>
            <Header as="h1" padded="vertically">
              Shopping Cart
            </Header>
            <CartItems deleteItem={this.deleteItem} cartItems={this.state.items}/>

            <Grid.Row textAlign="center"> 
            <Button primary onClick={this.addToCart} >Add Item</Button>
            </Grid.Row>           
          </Grid.Column>

          <GridColumn width={1} />

          <Grid.Column width={4} textAlign="center" verticalAlign="middle">
            <GridRow />
            <CartInfo calcTotalPrice={this.calcTotalPrice} totalPrice={this.state.totalPrice} cartItems={this.state.items} />
            <Grid.Row>
              <Button positive>PROCEED TO CHECKOUT</Button>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
