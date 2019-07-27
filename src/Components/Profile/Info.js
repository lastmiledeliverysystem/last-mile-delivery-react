import React, { Component } from 'react'
import { List ,Image} from 'semantic-ui-react'

export default class Info extends Component{
  
    render(){
        return(
    <List relaxed='very'>
    <List.Item>
    <List.Icon  color='teal' name='pencil alternate' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Name</List.Header>
        {console.log("data", this.props.data)}
        <List.Description>
          {(this.props.isVendor)? this.props.data.name : this.props.data.fName + " " + this.props.data.lName}
          {/* <a>
            <b>{this.props.users}</b>
          </a>{' '}
          just now. */}
        </List.Description>
      </List.Content>
    </List.Item>
    {/* <List.Item> */}
    {/* <List.Icon  color='teal' name='pencil alternate' size='large' verticalAlign='middle' /> */}
      {/* <List.Content>
        <List.Header as='a'>{this.props.data.name}</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content> */}
    {/* </List.Item> */}
    {/* <List.Item>
    <List.Icon  color='blue' name='at' size='large' verticalAlign='middle' />
        <List.Content>
        <List.Header as='a'>Email Address</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Bob's Burgers</b>
          </a>{' '}
          10 hours ago.
        </List.Description>
      </List.Content>
    </List.Item> */}
    <List.Item>
    <List.Icon  color='purple' name='address card' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Address</List.Header>
        <List.Description>
          Tanta, Egypt
        </List.Description>
      </List.Content>
    </List.Item>
    {/* <List.Item> */}
    {/* <List.Icon  color='orange' name='birthday' size='large' verticalAlign='middle' /> */}
      {/* <List.Content>
        <List.Header as='a'>BirthDate</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content> */}
    {/* </List.Item> */}
    <List.Item>
    <List.Icon  color='yellow' name='phone' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Phone</List.Header>
        <List.Description>
          {this.props.data.phone}
          {/* <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now. */}
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
        )
    }


}