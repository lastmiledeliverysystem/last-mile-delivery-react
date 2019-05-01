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
        activePage: 1,
        pageCount: 1,
    }

    componentDidMount = () => {
      this.getDataHandler()
    }
    //handlePaginationChange = (e, { activePage }) => this.setState({ activePage })
    handlePaginationChange =  async (e, {activePage}) => {
        await this.setState({ activePage });
            this.getDataHandler();
    
    }

    getDataHandler = ()=>{
        axios.get('http://localhost:8000/api/products/search?pageSize=2&pageNumber='+this.state.activePage + '&filterBy=vendorId&value=5cb0a3dd6178cf340c43017b')
        .then((res)=>{
            this.setState({products:res.data.product, pageCount: res.data.pageCount })
        })
        .catch((err)=> {
            console.log("Error", err);
        });
    }

  render() {
    const { activePage } = this.state
      return (
          <React.Fragment>
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
                totalPages={this.state.pageCount}
                style={style}
                />
            </Grid.Row>
        </Grid>
        </React.Fragment>
    )
  }
}
