import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { baseTheme, GlobalStyle } from "./styles/global.styles.ts";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
        <StrictMode>
            <ThemeProvider theme={baseTheme}>
                <BrowserRouter>
                    <GlobalStyle />
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </StrictMode>
    </HelmetProvider>
);
