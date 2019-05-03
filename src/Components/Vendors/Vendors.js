import React, { Component } from 'react'
import Vendor from './Vendor/Vendor'
import { Grid } from 'semantic-ui-react';
import { Pagination } from 'semantic-ui-react'
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
        }

    componentDidMount = () => {
      this.getDataHandler()
      //this.handlePaginationChange(false,{activePage:this.state.activePage});
    }

    categoryHandler = () => {
        console.log("hereee", this.props );
        axios.get('http://localhost:8000/api/vendors/test?pageSize=1&pageNumber=1&filterBy=category&value='+this.props.category)
        .then((res)=>{
            this.setState({vendors:res.data.vendor})
        });
      }
    handlePaginationChange =  async (e, {activePage}) => {
            await this.setState({ activePage });

                console.log(this.state.activePage);
                this.getDataHandler();
        
    }
    getDataHandler = ()=>{
        console.log("hereee", this.props.category);
        
        axios.get('http://localhost:8000/api/vendors/search?pageSize=1&pageNumber='+this.state.activePage+"&filterBy=category&value="+this.props.category)
        .then((res)=>{
            this.setState({vendors:res.data.vendor, pageCount: res.data.pageCount})
            console.log(res.data.pageCount);
            
            //this.setState({ activePage });
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
                        <Vendor name={n.name} category={n.category} phone={n.phone} address={n.address} vendorId={n._id}/>
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