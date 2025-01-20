import NavBar from "./Navbar";
import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; 
import { Bounce, toast, ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom"; // Use from react-router-dom

export const MyContext = createContext();

const MainLayOut = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
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

  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    const isProductInCart = cart.some((item) => item.id === book.id);
    if (isProductInCart) {
      toast.warning("Product already exists in the cart!");
    } else {
      const filteredProduct = data.find((item) => item.id === book.id);
      toast.success("Product added to the cart successfully!");
      if (filteredProduct) {
        setCart((prevCart) => [...prevCart, filteredProduct]);
      }
    }
  };

  const handleRemoveFromCart = (book) => {
    const updatedCart = cart.filter((item) => item.id !== book.id);
    if (updatedCart.length !== cart.length) {
      setCart(updatedCart);
      toast.success("Product removed from the cart successfully!");
    }
  };

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
      <MyContext.Provider value={{ data, loading, error, handleAddToCart, cart, setCart, handleRemoveFromCart }}>
      <NavBar />
      <Outlet />
      </MyContext.Provider>
       
    </div>
  );
};

export default MainLayOut;
