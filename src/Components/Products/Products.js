import React, { Component } from 'react'
import Product from './Product/Product'
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

export default class Products extends Component {
    state = {
        products:[],
        productsId: this.props.productsId
    }

    componentDidMount = () => {
      this.getDataHandler()
    }

    getDataHandler = ()=>{
        axios.get('http://localhost:8000/api/products/'+this.state.productsId)
        .then((res)=>{
            this.setState({products:res.data.vendorProducts})
            //console.log(id);
        });
    }

  render() {
      return (
        <Grid centered>
            {this.state.products.map((n) =>
            <Grid.Column width={3} key={n._id}>
            <Product changeProductHandler={this.props.changeProductHandler} productData={n} name={n.name} description={n.description} imgUrl={n.options.image} price={n.price} color={n.options.color} rate={n.rate}/>                
            </Grid.Column>
            )}
        </Grid>
    )
  }
}
