import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import { formatDistance } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import emoji from 'emoji-dictionary'

import GetPost from '../graphql/get-post.gql'
import { List, StatusMessage, PostTitle, Pill } from '../components'

const emojiSupport = text =>
  text.value.replace(/:\w+:/gi, name => emoji.getUnicode(name))

class Post extends Component {
  render() {
    const { query } = this.props.router
    if (!query || !query.slug) {
      return (
        <List>
          <StatusMessage>No post indentifier!</StatusMessage>
        </List>
      )
    }
    return (
      <List>
        <Query query={GetPost} variables={{ slug: query.slug }}>
          {({ data, error, loading }) => {
            if (error) {
              return (
                <StatusMessage>Error:{JSON.stringify(error)}</StatusMessage>
              )
            }
            if (loading) {
              return <StatusMessage>Loading...</StatusMessage>
            }
            if (!data || !data.blogPost) {
              return <StatusMessage>Oops! Not a valid post url!</StatusMessage>
            }
            return (
              <article>
                <PostTitle>{data.blogPost.title}</PostTitle>
                <ReactMarkdown
                  source={data.blogPost.content}
                  renderers={{ text: emojiSupport }}
                />
              </article>
            )
          }}
        </Query>
      </List>
    )
  }
}

export default withRouter(Post)
