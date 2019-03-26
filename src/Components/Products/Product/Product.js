import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import StarRating from '../../StarRatings/StarRatings';
import { Link } from 'react-router-dom';

const style = {
  name:{
    'font-size':'25px'
  },
  cart:{
    // 'position': 'relative',
    //  'margin-left': '10px'
  },
  desc:{
    'color':'black', 
    'font-size':'13px'

  },
  price:{
    'color':'black',
    'font-size':'15px'
  },
  color:{
    'color': 'black',
    'font-size':'15px'
  }
}
export default class Product extends Component {
  handleShoppingCartClick = (event) => {
    event.preventDefault();
    alert("Go to shopping cart page");
  }
  
  render() {
    return (
      <Card color="black">
        <Image src={this.props.imgUrl} 
        width={170}
        height={200} centered/>
        <Card.Content>
          <Card.Header style={style.name}>{this.props.name}</Card.Header>
          <Card.Meta>
            <span style={style.color}>{this.props.color}</span>
          </Card.Meta>
            <Card.Description style={style.desc}>{this.props.description}</Card.Description>
            <Card.Description>
            <span className='badge'><StarRating/></span>
            </Card.Description>
        </Card.Content>
        <Card.Content extra >
            <Link to='/ProductPage' style={style.price} onClick={()=>this.props.changeProductHandler(this.props.productData)}>
            Price: 
            {this.props.price} EGP
            <i className="fas fa-shopping-cart" style={style.cart}></i>
            </Link>
        </Card.Content>
      </Card>
    )
  }
}
