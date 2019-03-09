import React, { Component } from 'react';
import { Step, Icon } from 'semantic-ui-react';

export default class ActionTab extends Component {
  render() {
    return (
      <Step active={this.props.isActive} disabled={this.props.isDisabled}>
        <Icon name={this.props.iconName} />
        <Step.Content>
          <Step.Title>{this.props.title}</Step.Title>
          <Step.Description>{this.props.Description}</Step.Description>
        </Step.Content>
      </Step>
    );
  }
}
