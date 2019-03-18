import React, { Component } from 'react'
import Product from './Product/Product'
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

export default class Products extends Component {
    state = {
        products:[]
    }

    componentDidMount = () => {
      this.getDataHandler()
    }

    getDataHandler = ()=>{
        axios.get('http://localhost:8000/api/products')
        .then((res)=>{
            this.setState({products:res.data[1].vendorProducts})
        });
    }

  render() {
      return (
        <Grid centered>
            <Grid.Row centered>
            {this.state.products.map((n) =>
                <Grid.Column width={4}>
                    <Product name={n.name} description={n.description} imgUrl={n.options.image} price={n.price} color={n.options.color} rate={n.rate}/>
                </Grid.Column>
                )}
            </Grid.Row>
        </Grid>
    )
  }
}
