import React, { Component } from 'react';
import { Grid,Button, Header, Card, Input } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import ActionTab from './ActionBar/ActionBar';
import CartItems from './CartItems/CartItems';
import CartInfo from './CartInfo/cartInfo';
import TakeMoney from '../Payment/Payment'

import axios from 'axios';

// import { URLSearchParams } from 'url';

class Cart extends Component {
  state = {
    totalPrice: 0,
    comment: '',
    items: [],
    // address: {
    //   longitude: '',
    //   latitude: ''
    // },
  };

  componentDidMount(){
    this.getDataHandler();
    // this.addItemFromQuery();
    // this.calcTotalPrice();
  }

  getDataHandler= async ()=>{
    axios.get('http://localhost:8000/api/cart/userCart/',{headers:{'x-auth-token':localStorage.getItem('token')}})
    .then(async(res)=>{
      axios.post('http://localhost:8000/api/products/list',{"ids":res.data})
      .then(res=>{
        console.log(res.data);
        this.setState({items:res.data})
      }).catch(err=>{
        console.log(err);
      })
    }).catch(e=>{
      console.log("err",e);
    })
  }

 
  // locationHandler = () => {
  //   const success = (position)=> {
  //     try{
  //     const latitude  = position.coords.latitude;
  //     const longitude = position.coords.longitude;
  //     console.log(this);
  //     this.setState({address: {
  //       longitude,
  //       latitude
  //     }})
  //     console.log("location", this.state.address.longitude, this.state.address.latitude);

  //   } catch(err){
  //     console.log(err);
  //   }
  // }
  //     navigator.geolocation.getCurrentPosition(success);
  //   }
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
  // goproduct=()=>{
  //   this.props.history.push('/AddProduct')
  // }
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
      // <React.Fragment>

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
            <Header as="h1" padded="vertically"></Header>
            <CartInfo calcTotalPrice={this.calcTotalPrice} totalPrice={this.state.totalPrice} cartItems={this.state.items} />
            <Card centered>
              <Card.Content>
              <Card.Header>Comment</Card.Header>
            </Card.Content>
        <Card.Content extra>
          <Input onChange={(event, {value})=>{this.setState({ comment: value})}}/>
        </Card.Content>
      </Card>            
      {/* <Button positive onClick={this.locationHandler}>PROCEED TO CHECKOUT</Button> */}
            <TakeMoney history={this.props.history} totalPrice={this.state.totalPrice} cartItems={this.state.items} 
            comment={this.state.comment}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
     
    );
  }
}

export default withRouter(Cart);
