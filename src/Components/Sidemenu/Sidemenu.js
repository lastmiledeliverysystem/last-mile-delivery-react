import React, { Component } from 'react'
import { Menu, Input, Button, Dropdown } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'

const style = {
  menu:{
    width:'100%'
  }
}
const options = [
  { key: 1, text: 'category', value: 'category' },
  { key: 2, text: 'name', value: 'name' },
]
export default class Sidemenu extends Component {
  state={
    categories: [{label:"All", value:""},{label:"Food", value:"food"}, {label:"Clothes",value:"clothing"}],
    color: ["red", "black", "white"],
    price: ["100 and above", "200 and above", "300 and above" ],
    rating: ["1","2","3","4","5"],
    searchValue:"",
    searchText: "",
    filterBy: "",
  };

  handleChange = (e, { value }) =>{
    this.setState({ value })
    this.props.changeCategory(value);
    this.props.searchHandler(value, 'category');
  }
  searchTextHandler = async (searchText) => {
    await this.setState({ searchText });
    
  }
  
    render() {
      // const { activeItem } = this.state || {}
      return (
        <Menu vertical style={style.menu}>
          <Menu.Item>
            <Menu.Menu>
              <Menu.Item>
              <Dropdown clearable options={options} selection onChange={(event, {value})=>{this.setState({ filterBy: value});
              }}/>
                <Input icon='search' placeholder='Search...' value={this.state.searchText} onChange={(event)=>{this.searchTextHandler(event.target.value)}}/>
                <Button name="searchButton" onClick={this.props.searchHandler.bind(this, this.state.searchText, this.state.filterBy)}>
                  Search
                  </Button>
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
