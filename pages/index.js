import React, { Fragment } from 'react'
import styled from 'styled-components'

const Jumbo = styled.h1`
  font-size: 10vw;

  @media screen and (min-width: 740px) {
    font-size: 9vw;
  }

  @media screen and (min-width: 1020px) {
    font-size: 7.5vw;
  }
`

const Tagline = styled.div`
  font-size: 5vw;

  @media screen and (min-width: 740px) {
    font-size: 4vw;
  }

  @media screen and (min-width: 1080px) {
    font-size: 3vw;
  }
`

function Home() {
  return (
    <Fragment>
      <Jumbo>Hello, world</Jumbo>
      <Tagline>It&apos;s nice to meet you</Tagline>
    </Fragment>
  )
}

export default Home
