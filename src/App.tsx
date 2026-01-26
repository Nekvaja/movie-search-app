import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import lightTheme from "./styles/lightTheme";

function App() {

  return (
    <>
    <ThemeProvider theme={lightTheme}>
    <GlobalStyle theme={lightTheme}/>

      <div>
        movie app
      </div>
    </ThemeProvider>
   
    </>
  )
}

export default App
