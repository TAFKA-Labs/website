import React from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_BOOKS = gql`
  {
    books {
      title
      author
    }
  }
`

import { Button } from 'components'

export default function SimpleExample() {
  const [loadBooks, { loading, error, data }] = useLazyQuery(GET_BOOKS)

  function onClick(e) {
    e.preventDefault()
    loadBooks()
  }

  return (
    <div style={{ height: '25rem', border: '1px solid #e0e0e0', }}>
      <Button onClick={onClick}>Foobar</Button>
      <p>loading: {loading}</p>
      <p>error: {JSON.stringify(error)}</p>
      <p>data: {JSON.stringify(data)}</p>
    </div>
  )
}
