import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


const style={
  h1:{
      color:'#1d064b',
      'font-size':'20px',
  }
}
export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu text>
          <Menu.Item header style={style.h1}>LMD/DADA</Menu.Item>
          <Menu.Menu position="right">
            {/* <Menu.Item 
              name='HOME' 
              active={activeItem === 'HOME'} 
              onClick={this.handleItemClick} /> */}
            {/* <Menu.Item
              name='SHOP'
              active={activeItem === 'SHOP'}
              onClick={this.handleItemClick}
            /> */}
            <NavLink to='/' className='item'>HOME</NavLink>
            <NavLink to='/shop' className='item'>SHOP</NavLink>
            <NavLink to='/contact' className='item'>CONTACT</NavLink>
            {/* <Menu.Item
              name='CONTACT'
              active={activeItem === 'CONTACT'}
              onClick={this.handleItemClick}
            /> */}
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <NavLink to='/logout' className='item'>LOGOUT</NavLink>
            {/* <Menu.Item
              name='LOGOUT'
              active={activeItem === 'LOGOUT'}
              onClick={this.handleItemClick}
            /> */}
          </Menu.Menu>
          </Menu>
      )
    }
  
}
