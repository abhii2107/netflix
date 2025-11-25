import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css"
import { ErrorPages } from "./pages/ErrorPages";
import { getMoviesData } from "./API/GetApiData";
import { MovieDetails } from "./components/UI/MovieDetails";
import { getMovieDetails } from "./API/GetMovieDetails";
const App = () => {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPages />,
      children: [
        {

          path: "/",

          element: <Home />
        },

        {
          path: "/about",
          element: <About />
        },

        {
          path: "/movie",
          element: <Movie />,
          // the unction that you have created to fetch api data you have to pass that value in loader
          loader: getMoviesData,
        },

        {
          path: "/movie/:movieID",
          element: <MovieDetails/>,
          loader: getMovieDetails ,
          
        },

        {
          path: "/contact",
          element: <Contact />
        }
      ]
    },



  ])

  return <RouterProvider router={router} />
}

export default App;