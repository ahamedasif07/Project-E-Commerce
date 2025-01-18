import { Outlet } from "react-router"
import NavBar from "./Navbar"
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
const MainLayOut = () => {
  
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling


  useEffect(() => {
   
    // Fetch data on component mount
    const fetchData = async () => {
      try {
        const res = await fetch('/data.json'); // Replace with your API URL
        if (!res.ok) throw new Error('Network response was not ok');
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(data)
  return (
    <div>
        <DataContext.Provider value={{ data, loading, error }}>
        <NavBar/>
        <Outlet/>
    </DataContext.Provider>
        
    </div>
  )
}

export default MainLayOut