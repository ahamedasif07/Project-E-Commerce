
import MainLayOut from "./MainLayOut";
import Home from "./pages/Home";

import { createBrowserRouter } from "react-router";


import About from "./pages/About";
import Services from "./pages/Services";
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
        path: "/about", // Represents the default child route
        element: <About></About>
      },
     
      {
        path: "/services", // Represents the default child route
        element: <Services/>
      },
     
      {
        path: "/addToCart", // Represents the default child route
        element: <AddToCart/>,
      },
      // {
      //   path: "/details/:id",  // This should correspond to the dynamic route where the id will be captured
      //   element: <Details />
      // }

    ],
  },
])

