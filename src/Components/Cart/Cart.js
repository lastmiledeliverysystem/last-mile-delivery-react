import React, { Component } from 'react';
import { Grid,Button, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import ActionTab from './ActionBar/ActionBar';
import CartItems from './CartItems/CartItems';
import CartInfo from './CartInfo/cartInfo';
// import { URLSearchParams } from 'url';

class Cart extends Component {
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
        price: 500
      },
      { id:3,
        name: 'I like Useless Stuff, Fight me!',
        img: 'https://react.semantic-ui.com/images/wireframe/image.png',
        price: 100
      }
    ],
    address: {
      longitude: '',
      latitude: ''
    },
  };

  componentDidMount(prevState){
    this.addItemFromQuery();
    this.calcTotalPrice();
  }

  addItemFromQuery = ()=>{
    const query = new URLSearchParams(this.props.location.search);
    if (query.has('name')){
      const item = {id:this.state.items.length+1};
      for(let param of query.entries()){
        param[0]==='price'? item[param[0]] = +param[1] : item[param[0]] = param[1]
      }
      const items = [...this.state.items]
      items.push(item)
      this.setState({items:items})
    }
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
      console.log(err);
    }
  }
      navigator.geolocation.getCurrentPosition(success);
    }
  addToCart =() =>{
    let tempItems= [...this.state.items];
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
        <Grid.Row  padded="vertically">
          
          <ActionTab />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={9}>
            <Header as="h1" padded="vertically">
              Shopping Cart
            </Header>
            <CartItems deleteItem={this.deleteItem} cartItems={this.state.items}/>
            <Button primary onClick={this.addToCart} >Add Item</Button>
          </Grid.Column>
          <Grid.Column width={4} textAlign="center" verticalAlign="top">
            <Header as="h1" padded="vertically">asd</Header>
            <CartInfo calcTotalPrice={this.calcTotalPrice} totalPrice={this.state.totalPrice} cartItems={this.state.items} />
            <Button positive onClick={this.locationHandler}>PROCEED TO CHECKOUT</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default withRouter(Cart);
