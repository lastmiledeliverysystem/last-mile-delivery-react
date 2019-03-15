import React, { Component } from 'react';
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
      position: 'absolute',
      top: '20%',
      left: '20%'
    }
  };
  state = {
    name: '',
    email: '',
    submittedName: '',
    submittedEmail: ''
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { name, email } = this.state;

    this.setState({ submittedName: name, submittedEmail: email });
  };
  render() {
    return (
      <Container style={this.styles.boxStyle}>
        <Grid centered columns={2}>
          <GridColumn textAlign="center">
            <Header as="h2" textAlign="center">
              <Icon name="sign in alternate" />
              Login
            </Header>
            <Segment placeholder raised textAlign="left">
              <Form size="large">
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  label="Username"
                  placeholder="Username"
                  error={false}
                  onChange={this.handleChange}
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                  error={false}
                  onChange={this.handleChange}
                />
                <Button content="Login" size="large" primary />
              </Form>
            </Segment>
            <Message floating>
              Not registered yet? <a href="#">Sign Up</a>
            </Message>
          </GridColumn>
        </Grid>
      </Container>
    );
  }
}
