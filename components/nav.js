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

  @media screen and (min-width: 740px) {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    max-height: 80vh;
  }
`

const NavLink = styled.a`
  display: block;
  padding: 1em 0.5em;
  text-transform: capitalize;
  letter-spacing: 1px;
  border-radius: 4px;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: background-color 300ms ease-in;

  svg {
    display: block;
    cursor: pointer;
  }

  span {
    display: none;
  }

  &:hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  @media screen and (min-width: 380px) {
    padding: 1em;
  }

  @media screen and (min-width: 740px) {
    padding: 0.75em;
    margin: 0.25em 1em;

    span {
      display: block;
    }

    svg {
      display: none;
    }
  }
`

function Nav() {
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
          <span>
            {isActive && '\u2794' + '  '}
            {item}
          </span>
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

export default Nav
