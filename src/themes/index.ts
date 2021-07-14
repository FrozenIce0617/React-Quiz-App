import { createGlobalStyle } from "styled-components";

const DarkTheme = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    color: #FFFFFF;
    background-color: #222222;
  }
`;

export default DarkTheme;
