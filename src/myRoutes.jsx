import { createBrowserRouter } from "react-router-dom";
import { About, Contact, Home, LayOut, Portfolio } from "./pages";

export const myRoutes = createBrowserRouter([
  {
    path: "",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
