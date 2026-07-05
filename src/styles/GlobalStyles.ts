import { createGlobalStyle } from "styled-components";
import type { Theme } from "./themeTypes";

export const GlobalStyle = createGlobalStyle<{theme: Theme}>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    background: ${({theme}) => theme.colors.background};
    font-family: 'Montserrat', sans-serif;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100dvh;
  }
`;