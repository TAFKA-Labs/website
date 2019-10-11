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
  transition: all 250ms ease-in;

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    border-color: currentcolor;
    box-shadow: 1px 1px 2px 2px ${({ theme }) => theme.colors.secondary};
  }

  ${({ error, theme }) => error && `border-color: ${theme.colors.error}`}
`

export const centeredBoxStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const fieldStyle = css`
  ${borderStyle}
  -webkit-appearance: none;
  font-family: Helvetica, sans-serif;
  font-size: 100%;
  padding: 0.5em;
  margin: 0.25em 0 1em;

  ::placeholder {
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.6;
  }
`
