import React, { useContext,  useEffect,  useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Make sure to use `react-router-dom`
import { AddToCartContext, DataContext } from '../MainLayOut';
import ChildrenBooks from '../components/AllBooks/ChildrenBooks';


const Details = () => {
  const { id } = useParams();
  const { data } = useContext(DataContext);
  const {handleAddToCart} = useContext(AddToCartContext)
  const [productDetail, setProductDetail] = useState({}); // Set the initial state to `null`

  useEffect(() => {
    if (data) {
      const detailProduct = data.find(book => book.id === Number(id));
      setProductDetail(detailProduct);
    }
  }, [id, data]);  // Only depend on `id` and `data`
  // Add `data` as a dependency

  if (!productDetail) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-red-500">Product not found!</h2>
        <Link to="/" className="text-blue-500 underline">Go Back to Products</Link>
      </div>
    );
  }

  return (
    <div className='px-4'>
      <div className="w-full max-w-[900px] mx-auto mt-20 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-2xl">
        <nav className="flex items-center justify-between p-4 border-b border-gray-200 text-gray-700 uppercase text-xs">
          <Link to='/' className="flex items-center">
            <svg className="w-4 h-4 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256" stroke="#727272" />
            </svg>
            Back to all Products
          </Link>
        </nav>
        <div className="flex md:flex-row flex-col p-4 md:p-6 justify-between items-center">
          <div className=" text-center">
            <img
              className="md:w-[500px] w-[300px] mx-auto"
              src={productDetail.image}
              alt={productDetail.name}
            />
          </div>
          <div className=" p-4 md:pl-6">
          <h4 className="text-gray-500  uppercase text-xs">{productDetail.bookCategory}</h4>
            <h2 className="text-gray-700 py-2 uppercase font-medium">{productDetail.bookName}</h2>
            <h2 className="text-gray-700 py-2 uppercase font-medium">{productDetail.author}</h2>
            <h2 className="text-gray-700  font-[12px]">{productDetail.shortDescription}</h2>
           
            <h1 className="text-gray-900 text-3xl mt-4">${productDetail.price}</h1>
            <p className="text-gray-600 mt-4 leading-relaxed">{productDetail.description}</p>
            <div className="mt-6">
              <button onClick={()=>handleAddToCart(productDetail)} className="border bg-[#FFE330] px-4 py-2 rounded-md text-white uppercase hover:bg-yellow-500  hover:cursor-pointer transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    <ChildrenBooks/>
    </div>
  );
};

export default Details;
