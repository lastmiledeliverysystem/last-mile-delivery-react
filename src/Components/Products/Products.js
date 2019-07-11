import React, { Component } from 'react'
import Product from './Product/Product'
import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const style={
    pagination:{
      'float': 'right'
    }
  
  }

class Products extends Component {
    state = {
        products:[],
        vendorId: this.props.vendorId,
        activePage: 1,
        pageCount: 1,
        dim:true,
        filterBy: this.props.filterBy,
        searchValue: this.props.searchValue,
        rate: 1
    }

    componentDidMount = () => {
      this.getDataHandler()
    }
    componentDidUpdate = (prevProps)=>{
      if (this.props.searchValue !== prevProps.searchValue) {
        this.getDataHandler();
      }
      console.log("products did update");
    }
    //handlePaginationChange = (e, { activePage }) => this.setState({ activePage })
    handlePaginationChange =  async (e, {activePage}) => {
        await this.setState({ activePage, dim:true });
            this.getDataHandler();
    
    }

    getDataHandler = ()=>{

      const link = this.props.filterBy==="all"?
      'http://localhost:8000/api/products/search?pageSize=6&pageNumber='+this.state.activePage + '&filterBy=vendorId&value='+this.props.vendorId :
      'http://localhost:8000/api/products/search?pageSize=6&pageNumber='+this.state.activePage + '&filterBy=vendorId&value='+this.props.vendorId+ '&filterBy='+ this.props.filterBy + '&value=' + this.props.searchValue;
        axios.get(link)
        .then((res)=>{
            if (res.data==='No products')
              this.setState({products:[]})
            else {
            this.setState({products:res.data.product, pageCount: res.data.pageCount, dim:false, rate: res.data.rate })
            console.log("product", res.data.product, "rate", res.data.rate) }
        })
        .catch((err)=> {
            console.log("Error", err);
        });
    }

  render() {
    const { activePage } = this.state
    console.log("products", this.state.products)
      return (
        <React.Fragment>
          <Grid centered>
            <Dimmer active={this.state.dim} size='huge'>
              <Loader />
            </Dimmer>
            {this.state.products.map((n) =>
            <Grid.Column width={5} key={n._id}>
              <Product changeProductHandler={this.props.changeProductHandler} productId={n._id} productData={n} name={n.name} imgUrl={n.image} price={n.price} rate={n.rate}/>                
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

export default withRouter(Products);
