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
    box-shadow: 1px 1px 2px 2px ${({ theme }) => theme.colors.secondary};
  }
`

export const cardStyle = css`
  border-radius: 2px;
  background-color: white;
  box-shadow: 1px 1px 2px 2px ${({ theme }) => theme.colors.secondary};
`

export const centeredBoxStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const fieldContent = css`
  font-size: 100%;
  padding: 0.6em 0.5em 0.4em;
`

export const fieldStyle = css`
  ${borderStyle}
  -webkit-appearance: none;
  font-family: Helvetica, sans-serif;
  margin: 0.25em 0 1em;

  ::placeholder {
    opacity: 0.6;
  }

  &:disabled {
    opacity: 0.6;
  }

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    border-color: currentcolor;
  }

  ${({ error, theme }) => error && `border-color: ${theme.colors.error}`}
`
