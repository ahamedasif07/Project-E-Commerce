import React, { useContext } from 'react'
import { AddToCartContext } from '../MainLayOut'
import AddToCartCard from '../components/AddToCartCard/AddToCartCard'


const AddToCart = () => {
 const {cart} = useContext(AddToCartContext)

  return (
    <div>
        <div className='mt-4'>
         {
         cart.map(book => <AddToCartCard key={book.id} book={book}></AddToCartCard>)
         }
        </div>
    </div>
  )
}

export default AddToCart