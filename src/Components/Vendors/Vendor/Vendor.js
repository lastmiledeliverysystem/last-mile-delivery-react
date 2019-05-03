import React, { Component } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const style = {
  name:{
    'fontSize':'18px',
    fontWeight:"Bold"
  },
  cash:{
    'color':'black',
    'fontSize':'20px'
  },
  add:{
    'color':'black', 
    'fontSize':'13px'

  },
  price:{
    'color':'black',
    'fontSize':'15px'
  },
  color:{
    'color': 'black',
    'fontSize':'15px'
  },
  img:{
    objectFit:"cover",
    objectPosition:"center"
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
        style={style.img}
        width={230}
        height={230} centered/>
        <Card.Content>
          <Link to={`/Products/${this.props.vendorId}`} style={style.price}>
            <Card.Header style={style.name}>{this.props.name}</Card.Header>
          </Link>
            <Card.Meta>
            <span style={style.color}></span>
            </Card.Meta>
              
            <Card.Description style={style.add}>{this.props.category}</Card.Description>

                <Card.Description>
                <span className='badge'></span>
                </Card.Description>
           
        </Card.Content>
        <Card.Content extra >
            <Link to={'/Products/'+this.props.vendorId} style={style.price}>
            <i className="fa fa-phone-square" aria-hidden="true" style={style.cash} onClick={this.handleShoppingCartClick}></i>
            {this.props.phone}
            </Link>
        </Card.Content>
      </Card>
    )
  }
}