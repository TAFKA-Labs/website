import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Header from './header'
import Nav from './nav'
import Logo from './logo'
import Back from './back'

import { Box, Text } from 'grommet'

const Container = styled.div`
  overflow-y: scroll;
  display: flex;
  height: 100%;
  flex-direction: row-reverse;
`

const TestBox = styled(Box)`
  > div {
    margin-top: 1em;
    margin-right: 48px;
  }

  &::before {
    content: '';
    background:
      linear-gradient(
        #fff,
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0)
      );
    position: fixed;
    height: 36px;
    left: 0;
    right: 50px;
  }

  &::after {
    content: '';
    background: linear-gradient(rgba(255, 255, 255, 0), #fff);
    height: 16px;
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 16px;
  }
`

function Layout({ children }) {
  const { pathname, back } = useRouter()
  const [pageHeight, setPageHeight] = useState(500)
  const [isMobile, setIsMobile] = useState(false)
  const [section, setSection] = useState()

  useEffect(() => {
    const chunkedPath = pathname.split('/')
    if (chunkedPath.length !== 2) {
      setSection()
    } else {
      setSection(chunkedPath[1])
    }
  }, [pathname])

  useEffect(() => {
    const handleResize = () => {
      if (isMobile && window.innerWidth > 740) {
        setPageHeight(window.innerHeight)
        setIsMobile(false)
      } else if (!isMobile && window.innerWidth < 740) {
        setPageHeight(window.innerHeight)
        setIsMobile(true)
      }
    }
    setPageHeight(window.innerHeight)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  return (
    <Box height={`${pageHeight}px`}>
      <Head>
        <title>TAFKA Labs {section && `— ${section}`}</title>
        <link
          rel="preload"
          as="font"
          href="/fonts/Abel-Regular.ttf"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/fonts/SourceCodePro-Black.ttf"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        {!section && pathname !== '/' && (
          <Back onClick={() => back()}>&#10094; Back</Back>
        )}
        <Link href="/">
          <Logo>TAFKA Labs</Logo>
        </Link>
      </Header>
      <Container fill="vertical">
        <Nav />
        <TestBox basis={isMobile ? '100%' : '3/4'}>
          {children}
          <Text flex={1} textAlign="end" size="small">
            &copy; TAFKA Labs 2018-2020
          </Text>
        </TestBox>
      </Container>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
