import React, { Component } from 'react'
import { Input, Menu, Grid } from 'semantic-ui-react'

export default class Navbar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Grid>
          <Grid.Row centered>
          <Grid.Column width={16}>
              <Menu secondary>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item
                  name='messages'
                  active={activeItem === 'messages'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='friends'
                  active={activeItem === 'friends'}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                  </Menu.Item>
                  <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.handleItemClick}
                  />
                </Menu.Menu>
                </Menu>
              </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
  
}
