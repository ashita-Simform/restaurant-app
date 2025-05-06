import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    overflow-x: hidden; /* Prevent horizontal scrollbars */
  }

  html, body {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;