import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import lightTheme from "./styles/lightTheme";
import { getMovies } from "./api/tmdb";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    
    const loadData = async () => {
      const data = await getMovies();

      console.log(data)

    }
    
    loadData();

  }, [])

  return (
    <>
    <ThemeProvider theme={lightTheme}>
    <GlobalStyle theme={lightTheme}/>
    <Outlet />
      
    </ThemeProvider>
   
    </>
  )
}

export default App
