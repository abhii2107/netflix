import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact } from "./pages/Contact";
import AppLayout from "./components/layout/AppLayout";
import "./App.css"
import { ErrorPages } from "./pages/ErrorPages";
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
          element: <Movie />
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