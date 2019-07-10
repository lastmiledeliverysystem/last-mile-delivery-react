import React, { Component } from 'react'
import {Menu,Label,Tab, Card,Icon, Feed, Image ,Grid} from 'semantic-ui-react'
import Message from './Message'
import Info from './Info'
import OrderTap from './OrderTap'


 
const panes = [
  { menuItem: 'Information', render: () => <Tab.Pane><Info/></Tab.Pane> },
  { menuItem: 'Orders', render: () => <Tab.Pane><OrderTap/></Tab.Pane> },
  { menuItem: <Menu.Item key='messages'>Messages<Label>7</Label></Menu.Item>,
    render: () => <Tab.Pane><Message/></Tab.Pane>,
  },
]
export default class Profile extends Component{
    state = { 
        name:'',
        image:'',
        panes : [
          { menuItem: 'Information', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
          { menuItem: 'Orders', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
          { menuItem: <Menu.Item key='messages'>Messages<Label>15</Label></Menu.Item>,
            render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>,
          },
        ]
        
       }

render(){
  return(
    <Grid>
      <Grid.Row verticalAlign='top' centered columns='equal' >
        <Grid.Column width={4}>
          <Card> 
            <Image src={'https://lakeshorecontracting.ca/wp-content/uploads/2017/12/Female-Avatar.png'} wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
              <Icon size= {'large'} name='envelope' /> 
                Maha@mail.comss
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        

        <Grid.Column >
          <Tab  panes={panes} />
          </Grid.Column>
        
          
        </Grid.Row>

          <Grid.Row verticalAlign='top'  >
          <Grid.Column width={4} textAlign='left'>
          <Card>
          <Card.Content>
            <Card.Header>Recent Activity</Card.Header>
          </Card.Content>
          <Card.Content>
            <Feed>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/daniel.jpg' />
                <Feed.Content>
                  <Feed.Date content='1 day ago' />
                  <Feed.Summary>
                    You added <a>Jenny Hess</a> to your <a>coworker</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>

              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Feed.Content>
                  <Feed.Date content='3 days ago' />
                  <Feed.Summary>
                    You added <a>Molly Malone</a> as a friend.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
                <Feed.Content>
                  <Feed.Date content='4 days ago' />
                  <Feed.Summary>
                    You added <a>Elliot Baker</a> to your <a>musicians</a> group.
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
                </Card.Content>
                </Card>
                </Grid.Column>
              </Grid.Row>
              </Grid>
         
    )}


}