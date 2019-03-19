import React, { Component } from 'react';
// import './App.css';
import Navbar from './Navbar/Navbar';
import Image from './Image/Image'
import Rating from './Rating/Rating'
import Size from './Size/Size'
import ProductColor from './ProductColor/ProductColor'
import Description from './Description/Description'
import AddToCart from './AddToCart/AddToChar'
import { Grid, Divider } from 'semantic-ui-react';

// import Navbar from './Navbar/Navbar'


class ProductPage extends Component {
  render() {
    return (
        <Grid centered columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Image imgurl={this.props.url}/>
            </Grid.Column>

            <Grid.Column>
          <Rating/>     
          <Size/>   
          <ProductColor/>
          <Description/>
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
