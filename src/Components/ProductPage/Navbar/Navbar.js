import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import './Navbar.css'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu ClassName='navbar' size='small' color='violet' fluid>
        <Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item name='Profile' active={activeItem === 'Profile'} onClick={this.handleItemClick}>
          Profile
        </Menu.Item>

        <Menu.Item
          name='LogOut'
          active={activeItem === 'LogOut'}
          onClick={this.handleItemClick}
        >
          LogOut
        </Menu.Item>
      </Menu>
    )
  }
}