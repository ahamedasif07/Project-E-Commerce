import { Outlet } from "react-router";
import NavBar from "./Navbar";
import { createContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css"; 
import { Bounce, toast, ToastContainer } from "react-toastify";

export const DataContext = createContext();
export const AddToCartContext = createContext(); 

const MainLayOut = () => {
  // Data fetching
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

  console.log(data);

  // Add to cart context here
  const [cart, setCart] = useState([]);
  
  const handleAddToCart = (book) => {
    console.log('get the add to cart item on there', book);

    const isProductInCart = cart.some(item => item.id === book.id);

    if (isProductInCart) {
      console.log('Product is already in the cart');
      toast.warning("Product already exists in the cart!");
    } else {
      const filteredProduct = data.find(item => item.id === book.id);
      toast.success("Product added to the cart successfully!");
      
      if (filteredProduct) {
        setCart(prevCart => [...prevCart, filteredProduct]);
      } else {
        console.log('Product not found');
      }
    }
  };

  const handleRemoveFromCart = (book) => {
    console.log('remove book', book);

    const updatedCart = cart.filter(item => item.id !== book.id);
    
    if (updatedCart.length !== cart.length) {
      setCart(updatedCart);
      toast.success("Product removed from the cart successfully!");
    } else {
      console.log('Product not found in the cart');
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
  <AddToCartContext.Provider value={{ handleAddToCart, cart, setCart, handleRemoveFromCart }}>
  <NavBar />
  <Outlet /> {/* Replace this with NavBar, Outlet, or any child components */}
  </AddToCartContext.Provider>
</DataContext.Provider>
    </div>
  );
};

export default MainLayOut;
