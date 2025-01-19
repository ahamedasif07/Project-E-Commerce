import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

const BookCard = ({book}) => {
    const {bookCategory,image,bookName,price,discountPrice,discountPercentage}=book;
  return (
    <div>
        <div className="border-2 group relative border-gray-300 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out">
  <p className="text-[12px] pt-1 text-gray-500 text-center">{bookCategory}</p>
  <h2 className="text-[16px] text-center py-2 transition-all ease-in-out duration-300 text-gray-900 hover:text-[#FFE330] font-semibold">
    {bookName}
  </h2>
  <img className="w-full h-full object-fill" src={image} alt="" />




  <div className="flex items-center gap-4 my-2 justify-center">
    <h3 className="text-[20px] font-semibold text-[#EDD00F]">${discountPrice}</h3>
    <h4 className="line-through text-[14px] text-gray-600">${price}</h4>
    <h3 className="bg-red-500 hover:bg-red-600 transition-all duration-300 ease-in-out py-[6px] px-2 text-slate-100 font-semibold rounded-md">
      {discountPercentage}%
    </h3>
  </div>
  <div className="absolute bottom-12 w-full">
  <div className="flex items-center py-2 transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 bg-gray-100 shadow-md gap-2 justify-center transition-all duration-300 ease-in-out">
    <p className="p-1 text-gray-700 hover:text-[#FFE330] transition-all duration-300 ease-in-out">
      <FaShoppingCart />
    </p>
    <p className="p-1 text-gray-700 hover:text-[#FFE330] transition-all duration-300 ease-in-out">
      <FaShoppingCart />
    </p>
    <p className="p-1 text-gray-700 hover:text-[#FFE330] transition-all duration-300 ease-in-out">
      <FaShoppingCart />
    </p>
  </div>
</div>

</div>

    </div>
  )
}

export default BookCard