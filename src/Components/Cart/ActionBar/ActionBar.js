import React, { Component } from 'react';
import { Step } from 'semantic-ui-react';
import ActionTab from './ActionTab/ActionTab';

export default class ActionBar extends Component {
  // state = {
  //   isActive: false,
  //   iconName: 'cart',
  //   title: 'Shopping Cart',
  //   Description: 'Choose your Products to proceed '
  // };
  render() {
    return (
      <Step.Group>
        <ActionTab
          isActive={true}
          iconName="cart"
          title="Shopping Cart"
          Description="Choose your Products to proceed"
        />
        <ActionTab
          isActive={false}
          iconName="truck"
          title="Shipping"
          Description="Choose your shipping options"
        />
        <ActionTab
          isActive={false}
          iconName="payment"
          title="Billing"
          Description="Enter billing information"
        />
        <ActionTab
          isDisabled={true}
          isActive={false}
          iconName="info"
          title="Confirm Order"
        />
      </Step.Group>
    );
  }
}
