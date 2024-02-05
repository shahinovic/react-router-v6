import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./myRoutes";

const App = () => {
  return (
    <div className="app">
      <RouterProvider router={myRoutes}></RouterProvider>
    </div>
  );
};

export default App;
