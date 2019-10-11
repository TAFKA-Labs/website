import styled from 'styled-components'

import {
  centeredBoxStyle,
  borderStyle,
  fieldContent,
} from 'components/style-segments'

const Button = styled.button`
  ${borderStyle}
  ${centeredBoxStyle}
  ${fieldContent}
  flex: 1;
  color: white;
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${({ theme }) => theme.typography.default}, sans-serif;
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
