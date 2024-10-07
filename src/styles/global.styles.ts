import { createGlobalStyle } from "styled-components";

export const baseTheme = {
    colors: {
        error: "#f44336",
        success: "#4caf50",
        warning: "#ff9800",
        background: "#FAF7F0",
        text: "#1E201E",
    },
    fontSizes: {
        small: "0.7em",
        medium: "1em",
        large: "1.5em",
        extraLarge: "2em",
    },
    breakpoints: {
        small: "676px",
        medium: "868px",
        large: "992px",
        xlarge: "1200px",
    },
    shadows: {
        default: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    },
};

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
