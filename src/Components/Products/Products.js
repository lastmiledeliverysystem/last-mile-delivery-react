import React, { Component } from 'react'
import Product from './Product/Product'
import { Grid, GridColumn } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react'
import axios from 'axios';

const style={
    pagination:{
      'float': 'right'
    }
  
  }

export default class Products extends Component {
    state = {
        products:[],
        vendorId: this.props.vendorId,
        activePage: 1
    }

    componentDidMount = () => {
      this.getDataHandler()
    }
    //handlePaginationChange = (e, { activePage }) => this.setState({ activePage })
    handlePaginationChange = (e, { activePage }) => {
        this.setState({ activePage });
        axios.get('http://localhost:8000/api/products/test?pageSize=1&pageNumber='+this.state.activePage)
        .then((res)=>{
            this.setState({products:res.data.vendorProducts})
            //console.log(id);
        }); 
    }
    getDataHandler = ()=>{
        axios.get('http://localhost:8000/api/products/'+this.state.vendorId)
        .then((res)=>{
            this.setState({products:res.data})
            //console.log(id);
        });
    }

  render() {
    const { activePage } = this.state
      return (
        <Grid centered>
            {this.state.products.map((n) =>
            <Grid.Column width={3} key={n._id}>
            <Product changeProductHandler={this.props.changeProductHandler} productData={n} name={n.name} description={n.description} imgUrl={n.options.image} price={n.price} color={n.options.color} rate={n.rate}/>                
            </Grid.Column>
            )}
            <Grid.Row>
            <Pagination
                activePage={activePage}
                onPageChange={this.handlePaginationChange}
                totalPages={5}
                style={style}
                />
            </Grid.Row>
        </Grid>
    )
  }
}
