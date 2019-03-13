import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import './Product.css';
import StarRating from '../../StarRatings/StarRatings';

export default class Product extends Component {
  render() {
    return (
    <Card color="black">
        <Image src={this.props.imgUrl} 
        width={170}
        height={200} centered/>
        <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>
            <span className="color">{this.props.color}</span>
            </Card.Meta>
            <Card.Description className="desc">
            {this.props.description}
            </Card.Description>
                <Card.Description>
                <span className='badge'><StarRating/></span>
                </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a className="price" id="price">
            Price: 
            {this.props.price} LE
            </a>
            <i class="fas fa-shopping-cart"></i>
        </Card.Content>
      </Card>
    )
  }
}
