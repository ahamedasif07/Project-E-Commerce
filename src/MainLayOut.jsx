import { Outlet } from "react-router";
import NavBar from "./Navbar";
import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; 
import { Bounce, toast, ToastContainer } from "react-toastify";




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

    // Check if the product is already in the cart
    const isProductInCart = cart.some(item => item.id === book.id);

    if (isProductInCart) {
      // If the product is already in the cart, show an alert
      console.log('Product is already in the cart');
      toast.warning("Product already exists in the cart!");
    } else {
      // If the product is not in the cart, find the product and add it to the cart
      const filteredProduct = data.find(item => item.id === book.id);
      toast.success("Product added to the cart successfully!");
    
      

      if (filteredProduct) {
        // Add the filtered product to the cart
        setCart(prevCart => [...prevCart, filteredProduct]);
      } else {
        console.log('Product not found');
      }
    }
};


  console.log('filteredProduct from cart', cart);

  return (
    <div>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
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
