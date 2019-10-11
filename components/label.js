import styled from 'styled-components'

const Label = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.typography.accent}, sans-serif;
  color: gray;

  ${({ error }) => error && 'color: red'}
`

export default Label
