import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import Products from './../Products/Products';
import Sidemenu from './../Sidemenu/Sidemenu';
import PaginationExampleCompact from './../Pagination/Pagination';
import Vendors from './../Vendors/Vendors';
import {withRouter} from "react-router-dom";

class Shop extends Component {

  render() {
    return (
            <Grid relaxed textAlign='center'>
                <Grid.Row centered columns='equal'>
                    <Grid.Column floated='left' width={3}>
                        <Sidemenu/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        {(this.props.isVendor)? <Vendors category ={this.props.match.params.category}/> :<Products vendorId={this.props.match.params.vendorId} changeProductHandler={this.props.changeProductHandler} />}
                        {/* {console.log("shop cat", this.props.match.params.category)} */}
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns='equal' textAlign='center'>
                    <Grid.Column />
                    <Grid.Column >
                        {/* <PaginationExampleCompact/> */}
                    </Grid.Column>
                    <Grid.Column />
                </Grid.Row>
            </Grid>                
    )
  }
}

export default withRouter(Shop);
