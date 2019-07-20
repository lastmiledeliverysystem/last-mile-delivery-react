import React, { Component } from 'react'
import { Input, Menu, Icon, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


const style={
  h1:{
      color:'#1d064b',
      'fontSize':'20px',
  }
}
export default class Navbar extends Component {
    // state = { activeItem: 'home' }

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      // const { activeItem } = this.state
  
      return (
        <Menu text>
          <Menu.Item header style={style.h1}>Srebro-DADA</Menu.Item>
          <Menu.Menu position="right">
            <NavLink to='/' className='item'>HOME</NavLink>
            <NavLink to='/AddProduct' className='item'>{this.props.isVendor && this.props.isLogged? "Add Product" : "" }</NavLink>
            <NavLink to='/Profile' className='item'>{this.props.isLogged? "Profile" : "" }</NavLink>
            <NavLink to='/shop/all' className='item'>SHOP</NavLink>
            <NavLink to='/cart' className='item'><Icon name="shopping cart"/>CART</NavLink>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <NavLink to='/login' className='item'>{this.props.isLogged? "LOGOUT": "LOGIN"}</NavLink>
            {/* {console.log(this.props.isVendor)} */}
          </Menu.Menu>
          </Menu>
      )
    }
  
}
