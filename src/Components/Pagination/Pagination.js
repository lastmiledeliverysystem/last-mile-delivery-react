import React from 'react'
import { Pagination } from 'semantic-ui-react'

const style={
  pagination:{
    'float': 'right'
  }

}

const PaginationExampleCompact = () => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={2}
    style={style.pagination}
  />
)

export default PaginationExampleCompact
