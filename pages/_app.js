import React from 'react'
import App from 'next/app'
import { Grommet } from 'grommet'
import NextNprogress from 'nextjs-progressbar'
import 'normalize.css'

import { Layout } from 'components'
import { GlobalStyle, tafkaTheme } from 'contexts'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Grommet theme={tafkaTheme}>
        <GlobalStyle />
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
      </Grommet>
    )
  }
}
