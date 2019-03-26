import React, { Component } from 'react';
// import './App.css';
import Rating from './Rating/Rating'
import Size from './Size/Size'
import ProductColor from './ProductColor/ProductColor'
import Description from './Description/Description'
import AddToCart from './AddToCart/AddToChar'
import { Grid, Image } from 'semantic-ui-react';

// import Navbar from './Navbar/Navbar'
const style={
  rating:{
     // position: "absolute",
     // left: "470px",
     // top: "15%"
  },
 name:{
     "fontWeight": "bold",
     "font-family":"Times New Roman",
     color:"Black ",
     'font-size':'40px',
     marginBottom:'20px'
 },
 price:{
     "fontWeight": "bold",
     "font-family":"Times New Roman",
     color:"green ",
     'font-size':'20px',
     marginTop:'10px',
     marginBottom:'20px'
 },
 marginB:{
  marginBottom:'200px'
 }
}

class ProductPage extends Component {

  
  render() {
    console.log(this.props.productData)
    return (
        <Grid centered columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Image size='large' verticalAlign='top'  src={this.props.productData.options.image}/>            
            </Grid.Column>

            <Grid.Column>
              <h1 className="name" style={style.name}>{this.props.productData.name}</h1>
              <p className="price" style={style.price}>{this.props.productData.price} $</p>
              <Rating name={this.props.productData.name} price={this.props.productData.price} rate={this.props.productData.rate}/>     
              <Size/>   
              <ProductColor/>
              <Description description={this.props.productData.description}/>
            </Grid.Column>

            <Grid.Column>
              <AddToCart/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    );
  }
}

export default ProductPage;
