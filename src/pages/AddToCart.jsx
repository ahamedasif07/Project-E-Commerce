import React, { useContext } from 'react'
import { DataContext } from '../MainLayOut'

const AddToCart = () => {
    const {data}=useContext(DataContext)
    console.log(data)
  return (
    <div>AddToCart</div>
  )
}

export default AddToCart