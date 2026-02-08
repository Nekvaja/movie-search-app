import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import lightTheme from "./styles/lightTheme";
import { SearchProvider } from "./context/SearchProvider";


function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle theme={lightTheme} />

        <SearchProvider>
          <Outlet />
        </SearchProvider>
      </ThemeProvider>
    </>
  );
}

export default App
