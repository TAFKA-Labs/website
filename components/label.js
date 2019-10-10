import styled from 'styled-components'

const Label = styled.label`
  display: block;
  font-family: SourceCP;
  color: gray;

  ${({ error }) => error && 'color: red'};
`

export default Label
