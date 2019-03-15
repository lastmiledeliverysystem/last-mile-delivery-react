import React, { Component } from 'react';
import {
  Button,
  Segment,
  Grid,
  Form,
  GridColumn,
  Header,
  Container,
  Icon
} from 'semantic-ui-react';
export default class SignUp extends Component {
  styles = {
    boxStyle: {
      position: 'absolute',
      top: '20%',
      left: '20%'
    }
  };
  state = {
    userName: '',
    email: '',
    password: '',
    confirmedPassword: '',
    submittedName: '',
    submittedEmail: '',
    submittedPassword: ''
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { userName, email, password, confirmedPassword } = this.state;
    if (password === confirmedPassword)
      this.setState({
        submittedName: userName,
        submittedEmail: email,
        submittedPassword: password
      });
  };
  render() {
    return (
      <Container style={this.styles.boxStyle}>
        <Grid centered columns={2}>
          <GridColumn textAlign="left" width={9}>
            <Header as="h2" textAlign="center">
              <Icon name="signup" />
              Sign Up
            </Header>
            <Segment placeholder raised>
              <Form size="small">
                <Form.Input
                  name="userName"
                  value={this.userName}
                  onChange={this.handleChange}
                  placeholder="User Name"
                  label="User Name"
                  icon="user"
                  iconPosition="left"
                  error={false}
                />
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
                <Form.Input
                  name="confirmedPassword"
                  type="password"
                  value={this.confirmedPassword}
                  onChange={this.handleChange}
                  label="Confirm Password"
                  icon="lock"
                  iconPosition="left"
                  error={false}
                />
                <Button
                  content="CREATE ACCOUNT"
                  size="small"
                  primary
                  onClick={this.handleSubmit}
                />
              </Form>
            </Segment>
          </GridColumn>
        </Grid>
      </Container>
    );
  }
}
