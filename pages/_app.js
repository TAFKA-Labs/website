import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { TypographyStyle, GoogleFont } from 'react-typography'
import { ApolloProvider } from 'react-apollo'

import { client, typography, GlobalStyle } from '../utils'
import { Header, Layout } from '../components'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <GlobalStyle />
        <Head>
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Head>
        <ApolloProvider client={client}>
          <Header />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </Container>
    )
  }
}
