import React, { Component } from 'react';
import axios from 'axios';

import {
  Button,
  Segment,
  Grid,
  Form,
  GridColumn,
  Message,
  Header,
  Container,
  Icon
} from 'semantic-ui-react';


export default class LogIn extends Component {
  styles = {
    boxStyle: {
      // position: 'absolute',
      // top: '20%',
      // left: '20%'
    }
  };
  state = {
    email: '',
    password: '',
    submittedEmail: '',
    submittedPassword: '',
    isErr:false,
    isVendor: this.props.isVendor,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  loginHandler = ()=>{
    axios.post('http://localhost:8000/api/auth',{email:this.state.email, password:this.state.password})
    .then(res => {
      console.log("plapla", res.data);
      this.props.toggleLogHandler();
      this.props.history.push({
        pathname:'/',
      })
      console.log('history Pushed')
      localStorage.setItem('token', res.data);
      this.props.toggleAddProductHandler();
      this.setState({isErr:false})
    })
    .catch(err => {
      this.setState({isErr:true});
      console.log('errrrrrr')
    })
  }


  handleSubmit = () => {
    const { email, password} = this.state;
      this.setState({
        submittedEmail: email,
        submittedPassword: password
      });
      // alert(this.state.password)
      this.loginHandler()
  };

  render() {
    return (
      // <Container style={this.styles.boxStyle}>
        // <Grid centered>
        //   <Grid.Row textAlign="center" >
            <div style={{display:'flex',flexDirection:'column', margin:'0 auto',marginTop:'20px', marginBottom:'20px'}}>
              <Header as="h2" textAlign="center">
                <Icon name="sign in alternate" />
                Login
              </Header>

              <Segment placeholder raised textAlign="left">
                <Form size="large">
                <Form.Input
                    name="email"
                    type="email"
                    value={this.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                    label="Email"
                    icon="mail"
                    iconPosition="left"
                    error={false}
                  />
                  <Form.Input
                    name="password"
                    type="password"
                    value={this.password}
                    onChange={this.handleChange}
                    label="Password"
                    icon="lock"
                    iconPosition="left"
                    error={false}
                  />
                  <Button content="Login" size="large" primary onClick={this.handleSubmit} />
                </Form>
                <Message
                  error
                  header='Access Denied'
                  content= 'Incorrect Email or Password.'
                  hidden = {!this.state.isErr}
                />
              </Segment>

              <Message floating>
                Not registered yet? <a href="/">Sign Up</a>
              </Message>
            </div>

        //   </Grid.Row>
        // </Grid>
      // </Container>
    );
  }
}
