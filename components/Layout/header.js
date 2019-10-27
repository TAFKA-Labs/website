import styled from 'styled-components'

const Header = styled.div`
  text-align: right;
  display: flex;
  align-items: center;
  margin: 1em 0;

  a {
    flex: 1;
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (min-width: 740px) {
    margin: 1em;
  }
`

export default Header
