import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router';
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
      {productDetail.id}
    </div>
  )
}

export default Details