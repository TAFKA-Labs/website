import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/react-hooks'
import NextNprogress from 'nextjs-progressbar'
import 'normalize.css'

import { Layout } from 'components'
import { client, tafkaTheme } from 'contexts'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={tafkaTheme}>
          <NextNprogress
            color="aqua"
            startPosition={0.2}
            stopDelayMs={200}
            height="4"
            options={{ easing: 'ease-in', speed: 300, showSpinner: false }}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ApolloProvider>
    )
  }
}
