import React, { Component } from 'react';
import { Grid, GridRow, GridColumn, Button, Header } from 'semantic-ui-react';
import ActionTab from './ActionBar/ActionBar';
import CartItems from './CartItems/CartItems';
import CartInfo from './CartInfo/cartInfo';

export default class Cart extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row centered padded="vertically">
          <ActionTab />
        </Grid.Row>

        <Grid.Row>
          <GridColumn width={2} />
          <Grid.Column width={9}>
            <Header as="h1" padded="vertically">
              Shopping Cart
            </Header>
            <CartItems />
          </Grid.Column>

          <GridColumn width={1} />

          <Grid.Column width={4} textAlign="center" verticalAlign="middle">
            <GridRow />
            <CartInfo />
            <Grid.Row>
              <Button positive>PROCEED TO CHECKOUT</Button>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
