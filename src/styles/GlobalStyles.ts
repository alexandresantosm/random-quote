import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-column: 1fr;

    font-family: 'Special Elite', cursive, sans-serif;
  }

  button {
    border: 0;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }
`;
