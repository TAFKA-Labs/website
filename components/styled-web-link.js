import React from 'react'
import styled from 'styled-components'

const StyledWebLinkItem = styled.li`
  padding: 0.25em 0;
`

const StyledLink = styled.a`
  color: currentColor;

  &:hover {
    text-decoration: underline;
  }
`

const StyledWebLink = ({ href, text }) => (
  <StyledWebLinkItem>
    <StyledLink href={href}>{text}</StyledLink>
  </StyledWebLinkItem>
)

export default StyledWebLink
