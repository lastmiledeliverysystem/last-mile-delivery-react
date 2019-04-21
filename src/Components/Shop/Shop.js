import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import Products from './../Products/Products';
import Sidemenu from './../Sidemenu/Sidemenu';
import PaginationExampleCompact from './../Pagination/Pagination';
import Vendors from './../Vendors/Vendors';

export default class Shop extends Component {

  render() {
    return (
            <Grid relaxed textAlign='center'>
                <Grid.Row centered columns='equal'>
                    <Grid.Column floated='left' width={3}>
                        <Sidemenu/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        {(this.props.isVendor)? <Vendors/> :<Products productsId={this.props.match.params.productsId} changeProductHandler={this.props.changeProductHandler} />}
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
