import React, { Component } from 'react'
import { Menu, MenuItem } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'

export default class Sidemenu extends Component {
  state={
    categories: ["T-shirts", "Jackets", "Sweaters"],
    color: ["red", "black", "white"],
    price: ["100 and ubove", "200 and ubove", "300 and ubove" ],
    rating: ["1","2","3","4","5"]

  };
    handleItemClick = name => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state || {}
  
      return (
        <Menu vertical>
          <Menu.Item>
            <Menu.Header>Category</Menu.Header>
            <Menu.Menu>
              {this.state.categories.map((n)=>{return (<Menu.Item><Checkbox label={n}/></Menu.Item>);})}
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Color</Menu.Header>
            <Menu.Menu>
              {this.state.color.map((n)=>{return (<Menu.Item><Checkbox label={n}/></Menu.Item>);})}
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Price</Menu.Header>
            <Menu.Menu>
              {this.state.price.map((n)=>{return (<Menu.Item><Checkbox label={n}/></Menu.Item>);})}
            </Menu.Menu>
          </Menu.Item>
          
          <Menu.Item>
            <Menu.Header>Rating</Menu.Header>
            <Menu.Menu>
              {this.state.rating.map((n)=>{return (<Menu.Item><Checkbox label={n + " Stars"}/></Menu.Item>);})}
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      )
    }
  
}
