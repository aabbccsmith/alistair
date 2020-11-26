import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Inter', sans-serif;
  }

  @supports (font-variation-settings: normal) {
    html {
      font-family: 'Inter var', sans-serif;
    }
  }

  body {
    margin: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: #121212;
    color: #ededed;
    display: flex;
    overflow: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  * {
    margin: 0;
    padding: 0;
  }

  a {
    color: white;
    cursor: pointer;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
