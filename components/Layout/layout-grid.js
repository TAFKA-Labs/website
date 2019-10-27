import styled from 'styled-components'

const LayoutGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: auto 2.5em;
  grid-gap: 1em;

  @media screen and (min-width: 380px) {
    grid-template-columns: auto 3.5em;
  }

  @media screen and (min-width: 740px) {
    grid-template-columns: auto 20%;
    grid-gap: 1.33em;
  }

  @media screen and (min-width: 1020px) {
    grid-template-columns: auto 33%;
    grid-gap: 2em;
  }
`

export default LayoutGrid
