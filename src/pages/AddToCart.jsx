import React, { useContext } from 'react'
import {  MyContext } from '../MainLayOut'
import AddToCartCard from '../components/AddToCartCard/AddToCartCard'


const AddToCart = () => {
 const {cart} = useContext(MyContext);

  return (
    <div>
      <h2 className='py-4 text-center text-[30px] uppercase'>Add To Cart Items</h2>
        <div className='mt-4'>
         {
         cart.map(book => <AddToCartCard key={book.id} book={book}></AddToCartCard>)
         }
        </div>
    </div>
  )
}

export default AddToCart