import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Home from "./pages/Home";
import AddToCart from "./pages/AddToCart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/", // Represents the default child route
        element: <Home />,
      },
      {
        path: "/addToCart", // Represents the default child route
        element: <AddToCart/>,
      },
    ],
  },
]);
