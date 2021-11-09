import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {    
    --background: #0a1014;
    --white: #eee;
    --container: 100rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: var(--background);
    color: var(--white);
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
`

export default GlobalStyles
