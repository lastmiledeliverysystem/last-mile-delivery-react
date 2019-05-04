import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import Products from './../Products/Products';
import Sidemenu from './../Sidemenu/Sidemenu';
import Vendors from './../Vendors/Vendors';
import {withRouter} from "react-router-dom";

class Shop extends Component {
    state = {
        vendorCategory:this.props.match.params.category,
        searchValue:"food"
    }
    changeVendorCategoryHandler = (vendorCategory) => {
        this.setState({ vendorCategory });
    }
    searchHandler = (search)=>{
        console.log(search);
        this.setState({searchValue:search})
    }

  render() {
    return (
            <Grid relaxed textAlign='center'>
                <Grid.Row centered columns='equal'>
                    <Grid.Column floated='left' width={3}>
                        <Sidemenu changeCategory={this.changeVendorCategoryHandler} searchHandler={this.searchHandler}/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        {(this.props.isVendor)? <Vendors searchValue={this.state.searchValue} category ={this.state.vendorCategory}/> :<Products vendorId={this.props.match.params.vendorId} changeProductHandler={this.props.changeProductHandler} />}
                    </Grid.Column>
                </Grid.Row>
            </Grid>                
    )
  }
}

export default withRouter(Shop);
