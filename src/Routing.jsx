import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/", // Represents the default child route
        element: <Home />,
      },
    ],
  },
]);
