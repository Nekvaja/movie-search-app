import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Homepage } from "./components/pages/Homepage";
import { MovieDetail } from "./components/pages/MovieDetail";


export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage/>,
      },
      {
        path: '/movie/:id',
        element: <MovieDetail/>
      }
    ]
  }
]);