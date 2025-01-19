import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';
import { DataContext } from '../MainLayOut';

const Details = () => {
    const { id } = useParams();
    const {data}= useContext(DataContext)
    const [productDetail,setProductDetail]=useState([])
    useEffect(()=>{
        if(data){
            const detailProduct=data.find(book => book.id !== Number(id))
            setProductDetail(detailProduct)
            console.log('produc details filtared ',detailProduct)

        }
    },[id])

  return (
    <div>
      <div className="w-full max-w-md mx-auto mt-20 bg-white rounded-lg shadow-lg transform transition-all hover:shadow-2xl">
      <nav className="flex items-center justify-between p-4 border-b border-gray-200 text-gray-700 uppercase text-xs">
        <Link to='/' className="flex items-center">
       
          <svg className="w-4 h-4 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256" stroke="#727272" />
          </svg>
         
          Back to all Plants
        </Link>
        <svg className="w-6 h-6 text-gray-700 hover:text-red-500 transition" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z" stroke="#727272" />
        </svg>
      </nav>
      <div className="flex p-6">
        <div className="w-1/2 text-center">
          <img className="max-h-60 mx-auto" src={productDetail.image} alt="Classic Peace Lily" />
        </div>
        <div className="w-1/2 pl-6">
          <h2 className="text-gray-700 uppercase font-medium">{productDetail.name}</h2>
          <h4 className="text-gray-500 uppercase text-xs">{productDetail.bookCategory}</h4>
          <h1 className="text-gray-900 text-3xl mt-4">${productDetail.price}</h1>
          <p className="text-gray-600 mt-4 leading-relaxed">Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbon and butterfly pick.</p>
          <div className="mt-6">
            <button className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 uppercase hover:border-green-400 hover:text-green-400 hover:cursor-pointer transition">Add to Cart</button>
            <button className="border border-gray-300 px-4 py-2 ml-2 rounded-md text-gray-700 uppercase hover:border-green-400 hover:text-green-400 hover:cursor-pointer transition">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Details