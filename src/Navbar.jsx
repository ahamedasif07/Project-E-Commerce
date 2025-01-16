import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  return (
   <div>
    {/* mini device starts */}
     <div className='max-w-[1100px] mx-auto py-[20px] px-4 '>
    <div className='flex justify-between '> 
       <div>
      <h2 className='font-bold text-lg'>ASIF</h2>
      </div>
      {/* main nabbar menu start */}
      <div className='md:block hidden'>
        <ul className='flex items-center gap-5'>
          <li className='text-[18px]'> Home</li>
          <li className='text-[18px]'> Home</li>
          <li className='text-[18px]'> Home</li>
          <li className='text-[18px]'> Home</li>
          <li className='text-[18px]'> Home</li>
        </ul>
      </div>
      {/* main nabbar menu end */}

      {/* mini navbar start */}
      
       
      <div className='flex items-center gap-4'>
        <p className='text-[18px]'><FaSearch /></p>
        <p className='text-[18px] md:block hidden'><FaShoppingCart /></p>
        <p className='text-[18px] md:block hidden'><FaUser /></p>
        <p onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-[18px] md:hidden block'><RiMenu3Line /></p>
      </div>
      </div>
    </div>
    {/* mini device ends */}
    <hr />
    {/* mini device starts */}
   
    
  <div
    className="absolute bg-gray-500 right-[20px] py-2 top-[100px] transition-transform duration-500 ease-in-out transform translate-y-[-50px] opacity-0"
    style={{ transform: isMenuOpen ? "translateY(0)" : "translateY(-50px)", opacity: isMenuOpen ? 1 : 0 }}
  >
    <div className="md:hidden block">
      <ul className="px-6">
        <li className="text-[18px]">Home</li>
        <li className="text-[18px]">Home</li>
        <li className="text-[18px]">Home</li>
        <li className="text-[18px]">Home</li>
        <li className="text-[18px]">Home</li>
      </ul>
    </div>
  </div>


   
       {/* mini navbar end  */}
    
   </div>
    
  )
}

export default Navbar