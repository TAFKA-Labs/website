import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import GlobalStyle from './global-style'
import Footer from './footer'
import Nav from './nav'
import { responsiveSpacing } from './style-segments'

const Title = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.typography.accent}, sans-serif;
  font-weight: bolder;
  letter-spacing: 1.4px;
  color: currentcolor;
  padding: 1em;
`

const Header = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  margin: 1em 0;

  a {
    flex: 1;
  }

  @media screen and (min-width: 740px) {
    margin: 1em;
  }
`

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border-right: 12px solid currentcolor;

  @media screen and (min-width: 450px) {
    border-right: 20px solid currentcolor;
  }
`

const LayoutGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: auto 2.5em;

  @media screen and (min-width: 380px) {
    grid-template-columns: auto 3.5em;
  }

  @media screen and (min-width: 740px) {
    grid-template-columns: auto 20%;
  }

  @media screen and (min-width: 1020px) {
    grid-template-columns: auto 33%;
  }
`

const PageContainer = styled.div`
  ${responsiveSpacing}
  order: -1;
  background-image: url('/svg/background.svg');
`

function Layout({ children }) {
  const { pathname } = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [section, setSection] = useState('')

  useEffect(() => {
    const path = pathname.split('/')[1]
    if (!path) {
      setSection('')
    } else {
      setSection(`${path.charAt(0).toUpperCase()}${path.slice(1)}`)
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
        />
        <link rel="shortcut icon" href="/tafkalabs.ico" />
      </Head>

      <Header>
        <Link href="/">
          <Title>TAFKA Labs</Title>
        </Link>
      </Header>

      <LayoutGrid>
        <Nav />
        <PageContainer>
          <h2>{section}</h2>
          {children}
        </PageContainer>
      </LayoutGrid>

      <Footer />
    </LayoutContainer>
  )
}

export default Layout
