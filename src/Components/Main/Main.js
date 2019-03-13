import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import Products from '../Products/Products'
import Navbar from '../Navbar/Navbar'
import Sidemenu from '../Sidemenu/Sidemenu'
import PaginationExampleCompact from '../Pagination/Pagination';


export default class Main extends Component {

  render() {
    return (
        <React.Fragment>
            <Grid  padded>
                <Grid.Row>
                    <Grid.Column>
                        <Navbar/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                    <Grid.Column width={3}>
                        <Sidemenu/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Products/>
                    </Grid.Column>
                </Grid.Row>
                <PaginationExampleCompact/>
            </Grid>
        </React.Fragment>
    )
  }
}
