import React, { Component } from 'react'
import Product from './Product/Product'
import { Grid, Loader, Dimmer } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Products extends Component {
    state = {
      products:[],
      productsId: this.props.productsId,
      dim:true
    }

    componentDidMount = () => {
      this.getDataHandler()
    }

    getDataHandler = ()=>{
        axios.get('http://localhost:8000/api/products/'+this.state.productsId)
        .then((res)=>{
            this.setState({products:res.data.vendorProducts,dim:false})
            //console.log(id);
        });
    }

  render() {
      return (
        <Grid>
          <Dimmer active={this.state.dim}>
            <Loader />
          </Dimmer>
          {this.state.products.map((n) =>
          <Grid.Column width={3} key={n._id}>
          <Product changeProductHandler={this.props.changeProductHandler} id={n._id} productData={n} name={n.name} description={n.description} imgUrl={n.options.image} price={n.price} color={n.options.color} rate={n.rate}/>                
          </Grid.Column>
          )}
        </Grid>
    )
  }
}

export default withRouter(Products);
