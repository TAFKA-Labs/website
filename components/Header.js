import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5em auto;
  padding: 0 1em;
  max-width: 900px;
`

const NavContainer = styled.nav`
  display: flex;
`

const Title = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  cursor: pointer;

  @media screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
`

const NavLink = styled.a`
  padding: 0.4em 0.8em;
  cursor: pointer;
  color: #ca6c67;
  font-weight: bolder;
  font-size: 90%;

  &:hover {
    color: #4d0629;
    text-decoration: none;
  }

  @media screen and (min-width: 350px) {
    font-size: 100%;
    padding: 0.8em 1.6em;
  }
`

export default () => (
  <HeaderContainer>
    <Link href="/">
      <Title>TAFKA Labs</Title>
    </Link>
    <NavContainer>
      <Link href="/about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="/projects">
        <NavLink>Projects</NavLink>
      </Link>
    </NavContainer>
  </HeaderContainer>
)
