import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif; /* Corrigido: removida a vírgula extra */
  }
  
  body {
    background-color: #1e192c;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif; /* Corrigido: removida a vírgula extra */
  }
`;
