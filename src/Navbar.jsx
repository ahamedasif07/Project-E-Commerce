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
   
    
    <div className={`${isMenuOpen ? 'opacity-100' : 'opacity-0'} md:opacity-0 opacity-100`}>
            <ul 
              className={`absolute left-0 w-full bg-[#E9EFFE] text-center py-2 text-black z-10 
                          transform transition-all duration-500 ease-in-out opacity-0 
                          ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px]'}`}
            >
              <li className="px-4 py-2 text-[17px] font-[400] hover:bg-gray-100 cursor-pointer">Home</li>
              <li className="px-4 py-2 text-[17px] font-[400] hover:bg-gray-100 cursor-pointer">Home</li>
              <li className="px-4 py-2 text-[17px] font-[400] hover:bg-gray-100 cursor-pointer">Home</li>
              <li className="px-4 py-2 text-[17px] font-[400] hover:bg-gray-100 cursor-pointer">Home</li>
              <li className="font-semibold flex justify-center">
                

                
              </li>
            </ul>
          </div>
        
        


   
       {/* mini navbar end  */}
    
   </div>
    
  )
}

export default Navbar