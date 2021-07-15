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

  a {
    text-decoration: none;
  }

  .button-link {
    padding: 5px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 5px;
    cursor: pointer;
    transition-property: opacity, transform;
    transition-duration: 0.1s;
    transition-timing-function: ease;
    :hover,
    :active {
      transform: scale(1.1);
        > * {
          transform: translateY(0);
        }
      }
    }
`;

export default DarkTheme;
