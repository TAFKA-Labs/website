import React, { Component } from 'react'
import styled from 'styled-components'

import { initGA, logException, logPageView } from '../utils/analytics'

const LayoutContainer = styled.div`
  min-height: 100vh;
  max-width: 900px;
  margin: 0 auto;
  padding: 2em 1em;
`

export default class Layout extends Component {
  async componentDidMount() {
    try {
      if (!window.GA_INITIALIZED) {
        await initGA()
        window.GA_INITIALIZED = true
      }
      await logPageView()
    } catch (err) {
      logException(err.message, false)
    }
  }

  async componentDidUpdate() {
    if (!window) {
      return console.log('hi from the server!')
    }
    try {
      if (!window.GA_INITIALIZED) {
        await initGA()
        window.GA_INITIALIZED = true
      }
      await logPageView()
    } catch (err) {
      logException(err.message, false)
    }
  }

  render() {
    return <LayoutContainer>{this.props.children}</LayoutContainer>
  }
}
