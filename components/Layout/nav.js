import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

const APP_NAV = ['about', 'contact']

const NavV = styled.nav`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 12px;

  @media (min-width: 375px) {
    right: 16px;
  }
`

const NavLink = styled.a`
  display: block;
  padding: 0.5em 12px;
  margin-bottom: 0.5em;
  text-transform: capitalize;
  text-align: right;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: background-color 300ms ease-in;

  &:hover {
    opacity: 1;
  }

  svg {
    display: block;
  }

  span {
    display: none;
  }

  @media screen and (min-width: 740px) {
    padding: 1em;

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

NavItem.propTypes = {
  isActive: PropTypes.bool,
  item: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

NavItem.defaultProps = {
  isActive: false,
}

function Nav() {
  const { pathname, push } = useRouter()

  function handleKeyboard(e) {
    e.preventDefault()
    push(`/${e.target.text}`)
  }

  return (
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
  )
}

export default Nav
