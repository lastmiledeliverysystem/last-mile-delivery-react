import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Product extends Component {
  render() {
    return (
    <Card>
        <Image src={this.props.imgUrl} />
        <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>
            <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>{this.props.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
            <a>
            <Icon name='user' />
            22 Friends
            </a>
        </Card.Content>
      </Card>
    )
  }
}
