import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import StarRating from '../StarRatings/StarRatings';

export default class Sidemenu extends Component {
    handleItemClick = name => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state || {}
  
      return (
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Category</Menu.Header>
  
            <Menu.Menu>
              <Menu.Item
                name='enterprise'
                active={activeItem === 'enterprise'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='consumer'
                active={activeItem === 'consumer'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>
  
          <Menu.Item>
            <Menu.Header>Color</Menu.Header>
  
            <Menu.Menu>
              <Menu.Item
                name='rails'
                active={activeItem === 'rails'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='python'
                active={activeItem === 'python'}
                onClick={this.handleItemClick}
              />
              <Menu.Item name='php' active={activeItem === 'php'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu.Item>
  
          <Menu.Item>
            <Menu.Header>Price</Menu.Header>
  
            <Menu.Menu>
              <Menu.Item
                name='shared'
                active={activeItem === 'shared'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='dedicated'
                active={activeItem === 'dedicated'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>
  
          <Menu.Item>
            <Menu.Header>Rating</Menu.Header>
  
            <Menu.Menu>
            <StarRating/>
            <StarRating/>
            <StarRating/>
            <StarRating/>
            <StarRating/>
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      )
    }
  
}
