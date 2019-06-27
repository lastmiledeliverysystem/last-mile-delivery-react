import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import StarRating from '../../StarRatings/StarRatings';
import { Link } from 'react-router-dom';

const style = {
  name:{
    fontSize:'18px',
    fontWeight:"Bold"
  },
  cart:{
    // 'position': 'relative',
     'marginRight': '10px',
     color:"black"
  },
  desc:{
    'color':'black', 
    fontSize:'15px'

  },
  price:{
    'color':'black',
    fontSize:'15px'
  },
  color:{
    'color': 'black',
    fontSize:'15px'
  },
  img:{
    objectFit:"cover",
    objectPosition:"center"
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
        style={style.img}
        width={230}
        height={230} centered/>
        <Card.Content>
          <Link to={'/ProductPage/'+this.props.productId} style={style.price} onClick={()=>this.props.changeProductHandler(this.props.productData)}>
            <Card.Header style={style.name}>{this.props.name}</Card.Header>
          </Link>
          <Card.Meta>
            <span style={style.color}>{this.props.color}</span>
          </Card.Meta>
            {/* <Card.Description style={style.desc}>{this.props.description}</Card.Description> */}
            <Card.Description>
            <span className='badge'><StarRating/></span>
            </Card.Description>
        </Card.Content>
        <Card.Content extra >
            <i className="fas fa-shopping-cart" style={style.cart}></i>
            {this.props.price} EGP
        </Card.Content>
      </Card>
    )
  }
}
