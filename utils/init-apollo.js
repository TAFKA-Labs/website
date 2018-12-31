import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

export default new ApolloClient({
  uri: process.env.GRAPHCMS_ENDPOINT,
})
