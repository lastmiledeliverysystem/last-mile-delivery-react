import React, { Component } from 'react'
import {Menu,Label,Tab, Card,Icon, Feed, Image ,Grid} from 'semantic-ui-react'
import Message from './Message'
import Info from './Info'
import OrderTap from './OrderTap'
import axios from 'axios';
import jwt_decode from 'jwt-decode';


 
const panes = [
  { menuItem: 'Information', render: () => <Tab.Pane ><Info /></Tab.Pane> },
  { menuItem: 'Orders', render: () => <Tab.Pane><OrderTap/></Tab.Pane> },
  { menuItem: <Menu.Item key='messages'>Messages<Label>7</Label></Menu.Item>,
    render: () => <Tab.Pane><Message/></Tab.Pane>,
  },
]

var token= localStorage.getItem('token');
var decoded = jwt_decode(token);

export default class Profile extends Component{
    state = { 
        users: [],
        userData:[]
        
       }
       componentDidMount = () => {
        this.getUserDataHandler()
        console.log("users did mount");
        
      }
       getUserDataHandler = async ()=> {
       
        console.log(decoded);  
        // console.log(decoded.id)   
        const link = decoded.isVendor? `http://localhost:8000/api/vendors/`+decoded.id : `http://localhost:8000/api/customers/`+decoded.id
         axios.get(link)
          .then(res=> {
            console.log("done")
            console.log("res", res)
            this.setState({users: res.data})
            console.log("users",this.state.users.imageURL)
          }).catch(err=>{
            
            console.log(err.responce);
          })

          console.log(decoded);  
          // console.log(decoded.id)   
           axios.get('http://localhost:8000/api/users/'+decoded.id2)
            .then(res=> {
              console.log("done")
              console.log("res", res)

              this.setState({userData: res.data})
              console.log("usersdata",this.state.userData)
            }).catch(err=>{
              
              console.log(err.responce);
            })
      }

render(){
  return(
    <Grid>
      <Grid.Row verticalAlign='top' centered columns='equal' >
        <Grid.Column width={4}>
          <Card> 
            <Image src={this.state.users.imageURL} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{decoded.isVendor? this.state.users.name : this.state.users.fName + " " + this.state.users.lName }</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
              <Icon size= {'large'} name='envelope' /> 
                {this.state.userData.email}
              </Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        

        <Grid.Column >
          <Tab data={this.state.users} panes={panes} />
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
         
    )}}


