import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Make sure to use `react-router-dom`
import { DataContext } from '../MainLayOut';

const Details = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const [productDetail, setProductDetail] = useState(null); // Set the initial state to `null`

  useEffect(() => {
    if (data) {
      const detailProduct = data.find(book => book.id === Number(id)); // Fix: Match the id exactly
      setProductDetail(detailProduct || null); // Handle cases where no product is found
      console.log('Product details:', detailProduct);
    }
  }, [id, data]); // Add `data` as a dependency

  // Handle cases where productDetail is not found
  if (!productDetail) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-red-500">Product not found!</h2>
        <Link to="/" className="text-blue-500 underline">Go Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-20 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-2xl">
        <nav className="flex items-center justify-between p-4 border-b border-gray-200 text-gray-700 uppercase text-xs">
          <Link to="/" className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256" stroke="#727272" />
            </svg>
            Back to all Products
          </Link>
        </nav>
        <div className="flex p-6">
          <div className="w-1/2 text-center">
            <img
              className="max-h-60 mx-auto"
              src={productDetail.image}
              alt={productDetail.name}
            />
          </div>
          <div className="w-1/2 pl-6">
            <h2 className="text-gray-700 uppercase font-medium">{productDetail.name}</h2>
            <h4 className="text-gray-500 uppercase text-xs">{productDetail.bookCategory}</h4>
            <h1 className="text-gray-900 text-3xl mt-4">${productDetail.price}</h1>
            <p className="text-gray-600 mt-4 leading-relaxed">{productDetail.description}</p>
            <div className="mt-6">
              <button className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 uppercase hover:bg-yellow-500 hover:text-green-400 hover:cursor-pointer transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
