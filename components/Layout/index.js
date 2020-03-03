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

import { Box, Footer, Text } from 'grommet'

const TestBox = styled(Box)`
  &::before {
    content: '';
    background: linear-gradient(#fff, transparent);
    height: 12px;
    right: 16px;
    width: 100%;
    position: fixed;
  }

  &::after {
    content: '';
    background: linear-gradient(transparent, #fff);
    height: 12px;
    right: 16px;
    width: 100%;
    position: absolute;
    bottom: 20px;
  }
`

function Layout({ children }) {
  const { pathname, back } = useRouter()
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
        setIsMobile(false)
      } else if (!isMobile && window.innerWidth < 740) {
        setIsMobile(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMobile])

  return (
    <Box direction="column" height="100vh">
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

      <Box fill direction="row-reverse" position="relative">
        <Box basis={isMobile ? '54px' : '1/4'}>
          <Nav />
        </Box>
        <TestBox basis={isMobile ? '100%' : '3/4'} overflow="scroll">
          {children}
        </TestBox>
      </Box>

      <Footer justify="end" pad={{ horizontal: 'small' }}>
        <Text size="small">&copy; TAFKA Labs 2018-2020</Text>
      </Footer>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
