import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Asap', sans-serif;
    color: #14181B;
  }
  html, body {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #F1F1F1;
  }
`;

export default GlobalStyle;