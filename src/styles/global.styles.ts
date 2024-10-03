import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.text}; 
    background-color: ${({ theme }) => theme.colors.background}; 
    font-family: Arial, sans-serif;   
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  * {
    padding: 0;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;
