import React, { Component } from 'react'
import { List} from 'semantic-ui-react'

export default class Message extends Component{

    render(){
    return(    
        <List divided relaxed>
        <List.Item>
          <List.Icon name='envelope' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Message from Maha</List.Header>
            <List.Description as='a'>send 10 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='envelope' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Message from Zahraa </List.Header>
            <List.Description as='a'>sent 22 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='envelope' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Message from Wageh</List.Header>
            <List.Description as='a'>sent 34 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='envelope' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Message from Bahrawy</List.Header>
            <List.Description as='a'>sent 34 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='envelope' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Message from Kassem</List.Header>
            <List.Description as='a'>sent 34 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='envelope' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Message from Rawan</List.Header>
            <List.Description as='a'>sent 34 mins ago</List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='envelope' size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a'>Message from Alaa</List.Header>
            <List.Description as='a'>sent 34 mins ago</List.Description>
          </List.Content>
        </List.Item>
      </List>
    )
    }

}