import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import Nav from './nav'
import Logo from './logo'
import Back from './back'

import { Box, Header, Main, Text } from 'grommet'

const TestBox = styled(Box)`
  flex: 1;

  > div {
    flex: 1;
    margin-right: 42px;

    @media (min-width: 420px) {
      margin-right: unset;
      max-width: 75%;
    }

    @media (min-width: 740px) {
      max-width: 600px;
    }
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
    height: 24px;
    left: 0;
    right: 16px;
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
          <Logo align="right">TAFKA Labs</Logo>
        </Link>
      </Header>
      <Nav />
      <Main flex={{ grow: 1, shrink: 1 }} overflow={{ vertical: 'scroll' }}>
        <TestBox>
          {children}
          <Text textAlign="end" size="small" margin={{ horizontal: '16px' }}>
            &copy; TAFKA Labs 2018-2020
          </Text>
        </TestBox>
      </Main>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
