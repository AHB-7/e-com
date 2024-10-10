import { createGlobalStyle } from "styled-components";

export const baseTheme = {
    colors: {
        error: "#f44336",
        success: "#4caf50",
        warning: "#ff9800",
        background: "#FAF7F0",
        text: "#1E201E",
        scrollbarThumb: "#1E201E",
        scrollbarThumbHover: "#313331",
        scrollbarTrack: "#E0E0E0",
    },
    fontSizes: {
        small: "0.7rem",
        medium: "1rem",
        large: "1.5rem",
        extraLarge: "2rem",
    },
    breakpoints: {
        small: "38rem",
        medium: "50rem",
        large: "63rem",
        xlarge: "70rem",
    },
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${({ theme }) => theme.colors.text}; 
    background-color: ${({ theme }) => theme.colors.background}; 
    font-family: Arial, sans-serif;   
    width: 100%;
    max-width: 63rem;
    margin: 0 auto;
    height: 100vh;
  }

  * {
    padding: 0;
    margin: 0;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }


  ::-webkit-scrollbar {
    width: 0.6rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbarTrack}; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbarThumb}; 
    border-radius: 0.6rem; 
    border: 0.2rem solid transparent; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.scrollbarThumbHover};
  }

  scrollbar-color: ${({ theme }) => theme.colors.scrollbarThumb} ${({
    theme,
}) => theme.colors.scrollbarTrack}; 
  scrollbar-width: thin;
`;
