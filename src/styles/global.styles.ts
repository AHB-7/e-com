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
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.scrollbarTrack}; 
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.scrollbarThumb}; 
    border-radius: 10px; 
    border: 2px solid transparent; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.scrollbarThumbHover};
  }

  scrollbar-color: ${({ theme }) => theme.colors.scrollbarThumb} ${({
    theme,
}) => theme.colors.scrollbarTrack}; 
  scrollbar-width: thin;
`;
