import { css } from 'styled-components'

export const responsiveSpacing = css`
  padding: 2em 0.66em;

  @media screen and (min-width: 380px) {
    padding: 2.5em 1em;
  }

  @media screen and (min-width: 740px) {
    padding: 3em 2em;
  }

  @media screen and (min-width: 1020px) {
    padding: 4em 3em;
  }
`

export const borderStyle = css`
  border-radius: 2px;
  border-style: solid;
  border-width: 0.5px;
  border-color: lightgrey;
`

export const centeredBoxStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const fieldStyle = css`
  ${borderStyle};
  font-family: Helvetica, sans-serif;
  font-size: 100%;
  padding: 0.5em;
  margin: 0.25em 0 1em;

  ::placeholder {
    opacity: 0.6;
  }

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    border-color: #3b5266;
  }

  &:disabled {
    opacity: 0.6;
  }

  ${({ error }) => error && 'border-color: red'};
`
