import { Outlet } from "react-router"
import NavBar from "./Navbar"


const MainLayOut = () => {
  return (
    <div>
        <NavBar/>
       <Outlet/>
    </div>
  )
}

export default MainLayOut