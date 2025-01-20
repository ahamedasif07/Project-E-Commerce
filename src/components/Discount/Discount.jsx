import React from 'react'
import discountImage1 from '../../assets/discountImg (1).jpg'
import discountImage2 from '../../assets/discountImg (2).jpg'
import { FaTruckFast } from "react-icons/fa6";

const Discount = () => {
  return (
    <div className='max-w-screen-2xl mx-auto md:px-[50px] px-4 '>
       <div className='flex flex-col items-center justify-center'>
        <div className='flex gap-8 py-10'>
            <div className='flex gap-3 items-center border-gray-400 border-[2px] px-2 py-1'>
             <p className='text-[#FFE330] text-[36px]'><FaTruckFast/></p>
             <div>
                <h3 className='text-[18px]'>Free Shipping Item</h3>
                <h3>Orders over $500</h3>
             </div>
            </div>
            <div className='flex gap-3 items-center border-gray-400 border-[2px] px-2 py-1'>
             <p className='text-[#FFE330] text-[36px]'><FaTruckFast/></p>
             <div>
                <h3 className='text-[18px]'>Free Shipping Item</h3>
                <h3>Orders over $500</h3>
             </div>
            </div>
            <div className='flex gap-3 items-center border-gray-400 border-[2px] px-2 py-1'>
             <p className='text-[#FFE330] text-[36px]'><FaTruckFast/></p>
             <div>
                <h3 className='text-[18px]'>Free Shipping Item</h3>
                <h3>Orders over $500</h3>
             </div>
            </div>
            <div className='flex gap-3 items-center border-gray-400 border-[2px] px-2 py-1'>
             <p className='text-[#FFE330] text-[36px]'><FaTruckFast/></p>
             <div>
                <h3 className='text-[18px]'>Free Shipping Item</h3>
                <h3>Orders over $500</h3>
             </div>
            </div>
        </div>
       <div className='flex gap-12 items-center '>
       <img src={discountImage1}></img>
       <img src={discountImage2} alt="" srcset="" />
       </div>
       </div>
    </div>
  )
}

export default Discount