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
    categories: [{label:"All", value:""}, {label:"Pet", value:"Pet"},{label:"Kitchen", value:"Kitchen"},
                {label:"Footwear", value:"Footwear"},{label:"Beauty", value:"Beauty"},{label:"Bags", value:"Bags"},
                {label:"Baby", value:"Baby"},{label:"Mobile", value:"Mobile"},{label:"Health", value:"Health"},
                {label:"Food", value:"Food"}, {label:"Computer", value:"Computer"}],
    rating: [{label: "1", value: "1"},{label: "2", value: "2"},{label: "3", value: "3"},
            {label: "4", value: "4"},{label: "5", value: "5"},],
    searchValue:"",
    searchText: "",
    filterBy: "",
    rateValue: "",
  };

  handleChange = (e, { value }) =>{
    this.setState({ value })
    // this.props.changeCategory(value);
    // this.props.searchHandler(value, 'rate');
    if (this.props.isVendor === true){
      this.props.searchHandler(value, 'category');
    }
    else if (this.props.isVendor === false){
      console.log("value of rate", value)

      this.props.searchHandler(value, 'rate');
    }
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
          {(this.props.isVendor) && 
          <Menu.Item>
            <Menu.Header>Category</Menu.Header>
            <Menu.Menu>
              {this.state.categories.map((n,i)=> 
                <Menu.Item key={i}>
                  <Checkbox  label={n.label} value={n.value} checked={this.state.value === n.value} onChange={this.handleChange}/>
                </Menu.Item>)}
            </Menu.Menu>
              </Menu.Item> }
         {(! this.props.isVendor) && <Menu.Item>
      <Menu.Header>Rating</Menu.Header>
      <Menu.Menu>
        {this.state.rating.map((n,i)=> 
          <Menu.Item key={i}>
            <Checkbox label={n.label + " Stars"} value={n.value} checked={this.state.value === n.value} onChange={this.handleChange}/>
          </Menu.Item>)}
      </Menu.Menu>
    </Menu.Item>}

        </Menu>
      )
    }
  
}
