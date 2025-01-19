// /src/components/Toast.js
import React from 'react';
import { toast, ToastContainer, Bounce } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 

const Toast = () => {
  const showToast = () => {
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
};

export default Toast;
