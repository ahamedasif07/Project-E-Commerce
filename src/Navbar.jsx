
import React, { useContext, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import logo from '../src/assets/logo.png';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
  // const {cart} = useContext(MyContex)
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  
  return (
   <div className='bg-[#FFE330]'>
    {/* mini device starts */}
     <div className='max-w-screen-2xl md:px-[50px]  mx-auto py-[20px] px-4 '>
    <div className='flex justify-between '> 
       <div>
      {/* <h2 className='font-bold text-lg'>ASIF</h2> */}
      <img className='h-[30px] w-[40px]' src={logo}></img>
      </div>
      {/* main nabbar menu start */}
      <div className='md:block hidden'>
      <ul className="flex items-center gap-5">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[18px] text-gray-800 font-[500] ${isActive ? 'border-b-2 border-red-500' : ''}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-[18px] text-gray-800 font-[500] ${isActive ? 'border-b-2 border-red-500' : ''}`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `text-[18px] text-gray-800 font-[500] ${isActive ? 'border-b-2 border-red-500' : ''}`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-[18px] text-gray-800 font-[500] ${isActive ? 'border-b-2 border-red-500' : ''}`
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
      </div>
      {/* main nabbar menu end */}

      {/* mini navbar start */}
      
       
      <div className='flex items-center gap-4'>
        <p className='text-[18px]'><FaSearch /></p>
        <Link to='/AddToCart' className='text-[18px] relative md:block hidden'><h2 className='flex items-center'><FaShoppingCart />
        <p className='bg-red-500 text-[10px] absolute bottom-[12px] left-[14px] px-[4px] rounded-md text-center text-white '>0</p></h2>
        </Link>
        <p className='text-[18px] md:block hidden'><FaUser /></p>
        <p onClick={()=>setIsMenuOpen(!isMenuOpen)} className='text-[18px] md:hidden block'><RiMenu3Line /></p>
      </div>
      </div>
    </div>
    {/* mini device ends */}
    <hr />

    {/* mini device starts */}
   
    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:opacity-0 opacity-100`}>
    <ul
  className={`absolute left-0 w-full bg-[#FFE330] text-center py-2 text-black z-10 
              transform transition-all duration-500 ease-in-out opacity-0 
              ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-20px]'}`}
>
  <li className="my-2 px-4">
    <NavLink
      to="/home"
      className={({ isActive }) =>
        `block text-[17px] font-[500] text-gray-800 hover:bg-gray-100 cursor-pointer ${
          isActive ? 'bg-gray-200 border-b-2 border-red-500' : ''
        }`
      }
    >
      Home
    </NavLink>
  </li>
  <li className="my-2 px-4">
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `block text-[17px] font-[500] text-gray-800 hover:bg-gray-100 cursor-pointer ${
          isActive ? 'bg-gray-200 border-b-2 border-red-500' : ''
        }`
      }
    >
      About
    </NavLink>
  </li>
  <li className="my-2 px-4">
    <NavLink
      to="/services"
      className={({ isActive }) =>
        `block text-[17px] font-[500] text-gray-800 hover:bg-gray-100 cursor-pointer ${
          isActive ? 'bg-gray-200 border-b-2 border-red-500' : ''
        }`
      }
    >
      Services
    </NavLink>
  </li>
  <li className="my-2 px-4">
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `block text-[17px] font-[500] text-gray-800 hover:bg-gray-100 cursor-pointer ${
          isActive ? 'bg-gray-200 border-b-2 border-red-500' : ''
        }`
      }
    >
      Contact
    </NavLink>
  </li>
</ul>

    </div>
   
       {/* mini navbar end  */}
    
   </div>
    
  )
}

export default Navbar
