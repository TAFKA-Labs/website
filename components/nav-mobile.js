import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import ReactSVG from 'react-svg'

const APP_NAV = ['about', 'contact']

const NavContainer = styled.nav`
  position: fixed;
  top: 5em;
  right: 12px;
  margin: 1em 0;

  @media screen and (min-width: 450px) {
    right: 20px;
  }
`

const NavLink = styled.a`
  display: block;
  padding: 1em 0.5em;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: background-color 300ms ease-in;

  svg {
    display: block;
    cursor: pointer;
  }

  &:hover {
    opacity: 1;
    background-color: #d5dce1;
  }

  @media screen and (min-width: 380px) {
    padding: 1em;
  }
`

function NavMobile() {
  const { pathname, push } = useRouter()

  function handleKeyboard(e) {
    e.preventDefault()
    push(`/${e.target.text}`)
  }

  const NavItem = ({ item }) => {
    const isActive = pathname.includes(item)
    return (
      <Link href={`/${item}`} prefetch={false}>
        <NavLink tabIndex="0" active={isActive} onKeyPress={handleKeyboard}>
          <ReactSVG src={`/static/svg/${item}.svg`} />
        </NavLink>
      </Link>
    )
  }

  return (
    <NavContainer>
      {APP_NAV.map(i => (
        <NavItem key={i} item={i} />
      ))}
    </NavContainer>
  )
}

export default NavMobile
