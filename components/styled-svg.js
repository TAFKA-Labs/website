import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

const StyledSVG = styled(ReactSVG)`
  svg {
    display: block;
    cursor: pointer;
    padding: 1em 0.5em;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
    }

    @media screen and (min-width: 740px) {
      padding: 1em;
    }
  }
`

export default StyledSVG
