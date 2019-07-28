import React, { Component } from 'react'
import { Input, Menu, Icon, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import {withRouter} from "react-router-dom";


const style={
  h1:{
      color:'#1d064b',
      'fontSize':'20px',
  }
}
class Navbar extends Component {
  // state = { activeItem: 'home' }
    linkClickHandler = (link)=>{
      this.props.history.push(link)
    }

    logOutHandler = ()=>{
      localStorage.removeItem('token');
      this.props.history.push('/login');
      window.location.reload();
    }
    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      // const { activeItem } = this.state
  
      return (
        <Menu text>
          <Menu.Item header style={style.h1}>Srebro-DADA</Menu.Item>
          <Menu.Menu position="right">
            <Button onClick={()=>this.linkClickHandler('/' )}className='item'>HOME</Button>
            <Button onClick={()=>this.linkClickHandler('/AddProduct')} className='item'>{this.props.isVendor && this.props.isLogged? "Add Product" : "" }</Button>
            <Button onClick={()=>this.linkClickHandler('/Profile')} className='item'>{this.props.isLogged? "Profile" : "" }</Button>
            <Button onClick={()=>this.linkClickHandler('/shop/all')} className='item'>SHOP</Button>
            <Button onClick={()=>this.linkClickHandler('/cart')} className='item'><Icon name="shopping cart"/>CART</Button>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Button onClick={this.logOutHandler} className='item'>{this.props.isLogged? "LOGOUT": "LOGIN"}</Button>
            {/* {console.log(this.props.isVendor)} */}
          </Menu.Menu>
          </Menu>
      )
    }
  
}
export default withRouter(Navbar);