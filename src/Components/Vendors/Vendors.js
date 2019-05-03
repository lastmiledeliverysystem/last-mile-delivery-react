import React, { Component } from 'react'
import Vendor from './Vendor/Vendor'
import { Grid } from 'semantic-ui-react';
import { Pagination, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';

const style={
    pagination:{
      'float': 'right'
    }
  
  }

export default class Vendors extends Component {
    state = {
        vendors:[],
        activePage: 1,
        pageCount: 1,
        dim:true
        }

    componentDidMount = () => {
      this.getDataHandler()
    }

    handlePaginationChange =  async (e, {activePage}) => {
            await this.setState({ activePage, dim:true });
                console.log(this.state.activePage);
                this.getDataHandler();
        
    }
    getDataHandler = ()=>{
        console.log("hereee", this.props.category);
        const link = this.props.category==="all"?
         'http://localhost:8000/api/vendors/search?pageSize=1&pageNumber='+this.state.activePage 
         : 'http://localhost:8000/api/vendors/search?pageSize=1&pageNumber='+this.state.activePage+"&filterBy=category&value="+this.props.category
        axios.get(link)
        .then((res)=>{
            this.setState({vendors:res.data.vendor, pageCount: res.data.pageCount, dim:false})
            console.log(res.data.pageCount);            
        });
    }

  render() {
    const { activePage } = this.state
      return (
        <React.Fragment>
            <Grid>
                <Dimmer active={this.state.dim} size='huge'>
                    <Loader />
                </Dimmer>
                {this.state.vendors.map((n) =>
                    <Grid.Column width={3} key={n._id}>
                        <Vendor name={n.name} category={n.category} imageURL={n.imageURL} phone={n.phone} address={n.address} vendorId={n._id}/>
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