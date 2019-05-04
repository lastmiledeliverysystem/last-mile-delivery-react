import React, { Component } from 'react';
import { Item, Button, Icon,Image } from 'semantic-ui-react';

const style={
  img:{
    objectFit:"cover",
    objectPosition:"center"
  }
}

export default class CartItem extends Component {
  state = {};
  render() {
    // console.log(this.props.name);
    
    return (
      <Item>
        <Image width={150} height={150} src={this.props.img} style={style.img}/>
        <Item.Content>
          <Item.Header as="a">{this.props.name}</Item.Header>
          <Item.Meta>
            <span className="cinema">
              <strong>Price: ${this.props.price}</strong>
            </span>
          </Item.Meta>
          <Item.Extra>
            <Button onClick={this.props.deleteItem.bind(this,this.props.id)} basic icon labelPosition="right" floated="right">
              Remove
              <Icon color="red" name="trash alternate" />
            </Button>
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}
