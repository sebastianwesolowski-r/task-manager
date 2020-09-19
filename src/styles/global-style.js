import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Asap', sans-serif;
    color: ${props => props.theme.customBlack};
    user-select: none;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.customWhite};
  }
`;

export default GlobalStyle;