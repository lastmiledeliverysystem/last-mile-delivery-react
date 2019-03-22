import React, { Component } from 'react'
import Vendor from './Vendor/Vendor'
import { Grid, GridColumn } from 'semantic-ui-react';
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
            console.log(res.data)
            this.setState({vendors:res.data})
        });
    }

  render() {
      return (
        <React.Fragment>
            <Grid centered>
                {this.state.vendors.map((n) =>
                    <Grid.Column width={4}>
                        <Vendor name={n.name} category={n.category} phone={n.phone} address={n.address} id={n._id}/>
                    </Grid.Column>
                    )}
            </Grid>
        </React.Fragment>
    )
  }
}