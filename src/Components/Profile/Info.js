import React, { Component } from 'react'
import { List ,Image} from 'semantic-ui-react'

export default class Info extends Component{
    render(){
        return(
    <List relaxed='very'>
    <List.Item>
    <List.Icon  color='teal' name='pencil alternate' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>First Name</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
    <List.Icon  color='teal' name='pencil alternate' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Last Name</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
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
    </List.Item>
    <List.Item>
    <List.Icon  color='purple' name='address card' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Address</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>The Godfather Part 2</b>
          </a>{' '}
          yesterday.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
    <List.Icon  color='orange' name='birthday' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>BirthDate</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
    <List.Icon  color='yellow' name='phone' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Phone</List.Header>
        <List.Description>
          Last seen watching{' '}
          <a>
            <b>Arrested Development</b>
          </a>{' '}
          just now.
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
        )
    }


}