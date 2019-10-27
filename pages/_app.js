import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'normalize.css'

import { Layout } from 'components'
import { tafkaTheme } from 'contexts'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={tafkaTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}
