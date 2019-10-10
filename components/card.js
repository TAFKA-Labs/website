import styled from 'styled-components'
import { responsiveSpacing } from './style-segments'

const Card = styled.div`
  ${responsiveSpacing}
  border-radius: 2px;
  background-color: white;
  box-shadow: 1px 1px 2px 2px #d5dce1;

  button {
    margin-top: 1.33em;
  }
`

export default Card
