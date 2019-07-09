import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import Products from './../Products/Products';
import Sidemenu from './../Sidemenu/Sidemenu';
import Vendors from './../Vendors/Vendors';
import {withRouter} from "react-router-dom";

class Shop extends Component {
    state = {
        vendorCategory:this.props.match.params.category,
        searchValue: this.props.match.params.category === "all"? "" : this.props.match.params.category,
        filterBy: "all"
        
    }
    changeVendorCategoryHandler = (vendorCategory) => {
        this.setState({ vendorCategory });
    }
    searchHandler = async (search, filterBy)=>{
        console.log("in shop", search, filterBy)
        await this.setState({searchValue:search, filterBy});
    }

  render() {
    return (
            <Grid relaxed textAlign='center'>
                <Grid.Row centered columns='equal'>
                    <Grid.Column floated='left' width={3}> 
                        <Sidemenu isVendor={this.props.isVendor} changeCategory={this.changeVendorCategoryHandler} searchHandler={this.searchHandler}/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        {(this.props.isVendor)? <Vendors searchHandler={this.searchHandler} searchValue={this.state.searchValue} filterBy={this.state.filterBy} category ={this.state.vendorCategory}/> :<Products searchValue={this.state.searchValue} filterBy={this.state.filterBy} vendorId={this.props.match.params.vendorId} changeProductHandler={this.props.changeProductHandler} />}
                    </Grid.Column>
                </Grid.Row>
            </Grid>                
    )
  }
}

export default withRouter(Shop);
