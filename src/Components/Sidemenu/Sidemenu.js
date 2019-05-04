import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'

const style = {
  menu:{
    width:'100%'
  }
}

export default class Sidemenu extends Component {
  state={
    categories: [{label:"All", value:"all"},{label:"Food", value:"food"}, {label:"Clothes",value:"clothing"}],
    color: ["red", "black", "white"],
    price: ["100 and above", "200 and above", "300 and above" ],
    rating: ["1","2","3","4","5"],
    searchValue:""
  };

  handleChange = (e, { value }) =>{
    this.setState({ value })
    this.props.changeCategory(value);
  }

    render() {
      // const { activeItem } = this.state || {}
      
      return (
        <Menu vertical style={style.menu}>


          <Menu.Item>
            <Menu.Menu>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' onChange={(event)=>this.props.searchHandler(event.target.value)}/>
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Category</Menu.Header>
            <Menu.Menu>
              {this.state.categories.map((n,i)=> 
                <Menu.Item key={i}>
                  <Checkbox  label={n.label} value={n.value} checked={this.state.value === n.value} onChange={this.handleChange}/>
                </Menu.Item>)}
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Color</Menu.Header>
            <Menu.Menu>
              {this.state.color.map((n,i)=> 
                <Menu.Item key={i}>
                  <Checkbox label={n}/>
                </Menu.Item>)}
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item>
            <Menu.Header>Price</Menu.Header>
            <Menu.Menu>
              {this.state.price.map((n,i)=> 
                <Menu.Item key={i}>
                  <Checkbox label={n}/>
                </Menu.Item>)}
            </Menu.Menu>
          </Menu.Item>
          
          <Menu.Item>
            <Menu.Header>Rating</Menu.Header>
            <Menu.Menu>
              {this.state.rating.map((n,i)=> 
                <Menu.Item key={i}>
                  <Checkbox label={n + " Stars"}/>
                </Menu.Item>)}
            </Menu.Menu>
          </Menu.Item>
        </Menu>
      )
    }
  
}
