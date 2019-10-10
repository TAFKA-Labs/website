import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Abel;
    src: url('/static/fonts/Abel-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: SourceCP;
    src: url('/static/fonts/SourceCodePro-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: SourceCP;
    src: url('/static/fonts/SourceCodePro-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  body {
    margin: 0;
    font-family: Abel, sans-serif;
    background-color: #F3F6F9;
    color: #3b5266;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: SourceCP, sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`

export default GlobalStyle
