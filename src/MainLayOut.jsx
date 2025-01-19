import { Outlet } from "react-router";
import NavBar from "./Navbar";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();
export const AddToCartContext = createContext(); // Fixed naming

const MainLayOut = () => {
  // Data fetching
  const [data, setData] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch data on component mount
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json"); // Replace with your API URL
        if (!res.ok) throw new Error("Network response was not ok");
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
  console.log(data);

  // Add to cart context here
  const [cart, setCart] = useState([]);
  const handleAddToCart = (book) => {
    console.log('get the add to cart item on there', book);

    // Find the product by its ID
    const filteredProduct = data.find(item => item.id === book.id);

    if (filteredProduct) {
      // Add the filtered product to the cart
      setCart(prevCart => [...prevCart, filteredProduct]);
    } else {
      console.log('Product not found');
    }
  };

  console.log('filteredProduct from cart', cart);

  return (
    <div>
      <DataContext.Provider value={{ data, loading, error }}>
        <AddToCartContext.Provider value={{ handleAddToCart, cart, setCart }}>
          <NavBar />
          <Outlet />
        </AddToCartContext.Provider>
      </DataContext.Provider>
    </div>
  );
};

export default MainLayOut;
