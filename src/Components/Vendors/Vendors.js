import React, { Component } from 'react'
import Vendor from './Vendor/Vendor'
import { Grid } from 'semantic-ui-react';
import axios from 'axios';

export default class Vendors extends Component {
    state = {
        vendors:[]
    }

    componentDidMount = () => {
      this.getDataHandler()
    }

    getDataHandler = ()=>{
        axios.get('http://localhost:8000/api/vendors')
        .then((res)=>{
            // console.log(res.data)
            this.setState({vendors:res.data})
        });
    }

  render() {
      return (
        <React.Fragment>
            <Grid centered>
                {this.state.vendors.map((n) =>
                    <Grid.Column width={3} key={n._id}>
                        <Vendor name={n.name} category={n.category} phone={n.phone} address={n.address} productsId={n.vendorProducts}/>
                    </Grid.Column>
                    )}
            </Grid>
        </React.Fragment>
    )
  }
}