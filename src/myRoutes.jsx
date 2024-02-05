import { createBrowserRouter } from "react-router-dom";
import { About, Contact, Home, LayOut, Portfolio } from "./pages";

export const myRoutes = createBrowserRouter([
  {
    path: "",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "",
        element: <Home title="Home"></Home>,
      },
      {
        path: "portfolio",
        element: <Portfolio title="Portfolio"></Portfolio>,
      },
      {
        path: "about",
        element: <About title="About"></About>,
      },
      {
        path: "contact",
        element: <Contact title="Contact"></Contact>,
      },
    ],
  },
]);
