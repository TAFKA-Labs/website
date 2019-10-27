import styled from 'styled-components'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  border-right: 12px solid currentcolor;

  @media screen and (min-width: 450px) {
    border-right: 20px solid currentcolor;
  }
`

export default LayoutContainer
