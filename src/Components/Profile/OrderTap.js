import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'

export default class OrderTap extends Component{
  render(){
    return(
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Order</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Payment Status</Table.HeaderCell>
          <Table.HeaderCell>total</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell color={'blue'}>
          <a href='#'>#300</a>

            </Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
          <Table.Cell>On Hold</Table.Cell>
          <Table.Cell>$ 7000</Table.Cell>
        </Table.Row>
        <Table.Row warning>
          <Table.Cell><a href='#'>#32400</a></Table.Cell>
          <Table.Cell>December 14, 2014</Table.Cell>
          <Table.Cell>
            <Icon name='attention' />
            Requires Action
            </Table.Cell>
          <Table.Cell>$ 7000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a href='#'>#342700</a></Table.Cell>
          <Table.Cell>October 14, 2015</Table.Cell>
          <Table.Cell warning>
            <Icon name='attention' />
            Hostile
          </Table.Cell>
          <Table.Cell>$ 7000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a href='#'>#30045</a></Table.Cell>
          <Table.Cell>October 14, 2015</Table.Cell>
          <Table.Cell>On Hold</Table.Cell>
          <Table.Cell>$ 7000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a href='#'>#30045</a></Table.Cell>
          <Table.Cell>October 14, 2015</Table.Cell>
          <Table.Cell>On Hold</Table.Cell>
          <Table.Cell>$ 7000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a href='#'>#30045</a></Table.Cell>
          <Table.Cell>October 14, 2015</Table.Cell>
          <Table.Cell>On Hold</Table.Cell>
          <Table.Cell>$ 7000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a href='#'>#30045</a></Table.Cell>
          <Table.Cell>October 14, 2015</Table.Cell>
          <Table.Cell>On Hold</Table.Cell>
          <Table.Cell>$ 7000</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell><a href='#'>#30045</a></Table.Cell>
          <Table.Cell>October 14, 2015</Table.Cell>
          <Table.Cell>On Hold</Table.Cell>
          <Table.Cell>$ 7000</Table.Cell>
        </Table.Row>
      </Table.Body>
      </Table>
    )
  }


}