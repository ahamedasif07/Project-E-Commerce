
import MainLayOut from "./MainLayOut";
import Home from "./pages/Home";
import Details from "./pages/Details";
import AddToCart from "./pages/AddToCart";
import { createBrowserRouter } from "react-router";


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
      {
        path: "/details/:id",  // This should correspond to the dynamic route where the id will be captured
        element: <Details />
      }

    ],
  },
])

