import React, { Component } from 'react'
import { Card, Image, GridRow } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


import { Grid } from 'semantic-ui-react';
import StarRating from '../../StarRatings/StarRatings';

const style = {
  name:{
    'font-size':'25px'
  },
  cash:{
    'color':'black',
    'font-size':'20px'
  },
  add:{
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
export default class Vendor extends Component {
  handleShoppingCartClick = (event) => {
    event.preventDefault();
    alert("Go to list of products page");
  }
  
  render() {
    return (

    <Card color="black">
        <Image src={this.props.imageURL} 
        width={170}
        height={200} centered/>
        <Card.Content>
            <Card.Header style={style.name}>{this.props.name}</Card.Header>
            <Card.Meta>
            <span style={style.color}></span>
            </Card.Meta>
              
            <Card.Description style={style.add}></Card.Description>

                <Card.Description>
                <span className='badge'></span>
                </Card.Description>
           
        </Card.Content>
        <Card.Content extra >
            <Link to={`/Products/${this.props.id}`} style={style.price}>
            <i class="fa fa-phone-square" aria-hidden="true" style={style.cash} onClick={this.handleShoppingCartClick}></i>
            {this.props.phone}
            </Link>
        </Card.Content>
      </Card>
    )
  }
}