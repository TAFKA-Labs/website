import styled from 'styled-components'

const Label = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.typography.accent}, sans-serif;
  color: gray;

  ${({ error, theme }) => error && `color: ${theme.colors.error}`}
`

export default Label
