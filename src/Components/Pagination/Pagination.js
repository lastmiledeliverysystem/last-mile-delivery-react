import React, { Component } from 'react'
import { Pagination } from 'semantic-ui-react'

const style={
  pagination:{
    'float': 'right'
  }

}
export default class PaginationExampleCompact extends Component {
  state = { activePage: 1 }

  render() {
    const { activePage } = this.state

    return (
          <Pagination
            activePage={activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={5}
            style={style}
          />
    )
  }
}

