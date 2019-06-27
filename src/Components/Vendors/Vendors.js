import React, { Component } from 'react'
import Vendor from './Vendor/Vendor'
import { Grid } from 'semantic-ui-react';
import { Pagination, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';
import {withRouter} from "react-router-dom";

const style={
    pagination:{
      'float': 'right'
    }
  }

class Vendors extends Component {
    state = {
        vendors:[],
        activePage: 1,
        pageCount: 2,
        dim:true,
        filterBy: this.props.filterBy,
        searchValue: this.props.searchValue
        }
    
    componentDidMount = () => {
      this.getDataHandler()
      console.log("vendors did mount");
      
    }
    componentDidUpdate = (prevProps)=>{
      if (this.props.searchValue !== prevProps.searchValue) {
        this.getDataHandler();
      }
      console.log("vendors did update");
    }
    handlePaginationChange =  async (e, {activePage}) => {
            await this.setState({ activePage, dim:true });
                console.log(this.state.activePage);
                this.getDataHandler();
        
    }
    getDataHandler = async ()=>{
       // await console.log("hereee", this.props.category);
        // await console.log("filterby", this.state.filterBy, "value", this.state.searchValue);
        const link = this.props.filterBy==="all" || this.props.searchValue=== ""?
         'http://localhost:8000/api/vendors/search?pageSize=2&pageNumber='+this.state.activePage 
         : 'http://localhost:8000/api/vendors/search?pageSize=2&pageNumber='+this.state.activePage+"&filterBy="+this.props.filterBy+ "&value="+this.props.searchValue
        //  "&filterBy=category&value="+this.props.category
        axios.get(link)
        .then((res)=>{
            this.setState({vendors:res.data.vendor, pageCount: res.data.pageCount, dim:false})
            console.log(res.data.pageCount); 
            if (res.data ==='No Vendors' )  {
                this.props.history.push("/not-found")
            }         
        }).catch(err=>{
          console.log(err);
        })
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
                        <Vendor searchHandler={this.props.searchHandler} name={n.name} category={n.category} imageURL={n.imageURL} phone={n.phone} address={n.address} vendorId={n._id}/>
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
export default withRouter(Vendors);