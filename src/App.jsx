import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./myRoutes";

const App = () => {
  return <RouterProvider router={myRoutes}></RouterProvider>;
};

export default App;
