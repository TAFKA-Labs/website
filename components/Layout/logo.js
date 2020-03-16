import styled from 'styled-components'

const Logo = styled.a`
  flex: 1;
  display: inline-block;
  text-align: ${({ align }) => align || 'left'};
  font-weight: bolder;
  letter-spacing: 1.4px;
  color: currentColor;
  padding: 1rem;
  cursor: pointer;
`

export default Logo
