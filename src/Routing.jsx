import { createBrowserRouter } from "react-router";
import MainLayOut from "./MainLayOut";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut/>,
   
  }
]);