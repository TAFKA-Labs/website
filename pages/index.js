import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import { formatDistance } from 'date-fns'

import ListPosts from '../graphql/list-posts.gql'
import { StatusMessage, PostPreview } from '../components'

export default class Index extends Component {
  render() {
    return (
      <div
        style={{
          maxWidth: 600,
          margin: '0 auto',
        }}
      >
        <Query query={ListPosts}>
          {({ data, error, loading }) => {
            if (error) {
              return (
                <StatusMessage>Error:{JSON.stringify(error)}</StatusMessage>
              )
            }
            if (loading) {
              return <StatusMessage>Loading...</StatusMessage>
            }
            if (!data || !data.blogPosts) {
              return (
                <StatusMessage>
                  Hmm, something went wrong. Try again?
                </StatusMessage>
              )
            }
            console.log('data: ', data)
            return data.blogPosts.map(item => (
              <PostPreview
                key={item.id}
                date={formatDistance(item.createdAt, new Date(), {
                  addSuffix: true,
                })}
                {...item}
              />
            ))
          }}
        </Query>
      </div>
    )
  }
}
