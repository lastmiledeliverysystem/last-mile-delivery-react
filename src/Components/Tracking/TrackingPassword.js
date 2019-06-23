import React, { Component } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const generator = require('generate-password');

export default class TrackingPassword extends Component {
    state = {
        trackingPassword: '',
        open: false,
      };

    show = () =>{
        this.passwordHandler();
        this.setState({open: true })
    }
    handleConfirm = () =>
    { 

        this.setState({ open: false })
    }
    handleCancel = () => this.setState({ open: false })
    passwordHandler = () => {
        const password = generator.generate({
          length: 8,
          numbers: true,
          uppercase: false
        });
        this.setState({ trackingPassword: password});
      }
  render() {
    return (
        <Modal
            trigger={<Button onClick={this.passwordHandler}>Show Modal</Button> } closeIcon
            header='Tracking Password!'
            content={this.state.trackingPassword}
            actions={[{ key: 'done', content: 'Track', positive: true }]}
            onActionClick= {()=> { this.props.history.push("/TrackingPage") }}
  />
    );
  }
}