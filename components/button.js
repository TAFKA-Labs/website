import styled from 'styled-components'

import { centeredBoxStyle, fieldStyle } from 'components/style-segments'

const Button = styled.button`
  ${fieldStyle};
  ${centeredBoxStyle};
  flex: 1;
  color: white;
  border-color: #3b5266;
  background-color: #3b5266;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: Abel;
  cursor: pointer;

  svg {
    display: block;
    margin-left: 0.5em;
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`

export default Button
