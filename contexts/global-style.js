import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Abel;
    src: url('/fonts/Abel-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: SourceCodePro;
    src: url('/fonts/SourceCodePro-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: SourceCodePro;
    src: url('/fonts/SourceCodePro-Black.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  body {
    margin: 0;
    ${({ theme }) => `
      color: ${theme.global.colors.brand};
      background-image: linear-gradient(to left, ${theme.global.colors.brand} 12px, ${theme.global.colors.white} 12px);
      margin-right: 12px;

      @media screen and (min-width: 375px) {
        background-image: linear-gradient(to left, ${theme.global.colors.brand} 16px, ${theme.global.colors.white} 16px);
        margin-right: 16px;
      }
    `}
  }

  ul,
  p:not(:first-of-type) {
    margin-top: 0;
  }
`

export default GlobalStyle
