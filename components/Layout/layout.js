import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Footer from './footer'
import GlobalStyle from './global-style'
import Header from './header'
import LayoutContainer from './layout-container'
import LayoutGrid from './layout-grid'
import Nav from './nav'
import PageContainer from './page-container'
import Logo from './logo'
import Back from './back'
import Section from './section'

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
    <LayoutContainer>
      <GlobalStyle />
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

      <LayoutGrid>
        <Nav />
        <PageContainer>
          {section && <Section>{section}</Section>}
          {children}
        </PageContainer>
      </LayoutGrid>

      <Footer />
    </LayoutContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
