import styled from 'styled-components'

const Logo = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.typography.accent}, sans-serif;
  font-weight: bolder;
  letter-spacing: 1.4px;
  color: currentcolor;
  padding: 1em;
`

export default Logo
