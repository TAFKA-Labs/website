import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Abel;
    src: url('/fonts/Abel-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: SourceCP;
    src: url('/fonts/SourceCodePro-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: SourceCP;
    src: url('/fonts/SourceCodePro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  body {
    margin: 0;
    ${({ theme }) => `
      font-family: ${theme.typography.default};
      color: ${theme.colors.primary};
      background-image: linear-gradient(to left, ${theme.colors.primary} 12px, ${theme.colors.white} 12px);
      margin-right: 12px;

      @media screen and (min-width: 375px) {
        background-image: linear-gradient(to left, ${theme.colors.primary} 16px, ${theme.colors.white} 16px);
        margin-right: 16px;
      }
    `}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.typography.accent}, sans-serif;
  }

  a {
    text-decoration: none;
    color: currentColor;

    &:hover {
      cursor: pointer;
    }
  }
`

export default GlobalStyle
