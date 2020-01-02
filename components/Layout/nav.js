import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

const APP_NAV = ['about', 'projects', 'contact']

const NavContainer = styled.div`
  @media (min-width: 740px) {
    flex: 1;
  }
`

const NavV = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const NavLink = styled.a`
  display: block;
  padding: 0.5em;
  margin-bottom: 0.5em;
  text-transform: capitalize;
  text-align: right;
  letter-spacing: 1px;
  border-radius: 4px;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: background-color 300ms ease-in;

  &:hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    display: block;
    cursor: pointer;
  }

  span {
    display: none;
  }

  @media screen and (min-width: 740px) {
    padding: 1em;
    margin: 0.25em 1.5em;

    span {
      display: block;
    }

    svg {
      display: none;
    }
  }
`

const NavItem = ({ isActive, item, onClick }) => (
  <Link href={`/${item}`} prefetch={false}>
    <NavLink tabIndex="0" active={isActive} onKeyPress={onClick}>
      <span>
        {isActive && '\u2794' + '  '}
        {item}
      </span>
      <ReactSVG src={`/svg/${item}.svg`} />
    </NavLink>
  </Link>
)

function Nav() {
  const { pathname, push } = useRouter()

  function handleKeyboard(e) {
    e.preventDefault()
    push(`/${e.target.text}`)
  }

  return (
    <NavContainer>
      <NavV>
        {APP_NAV.map(i => (
          <NavItem
            key={i}
            item={i}
            isActive={pathname.includes(i)}
            onClick={handleKeyboard}
          />
        ))}
      </NavV>
    </NavContainer>
  )
}

export default Nav
