import React from 'react'
import comixBook from '../../assets/comixBook.jpg';
import ArtBook from '../../assets/Art.jpg';
import ChildrenBook from '../../assets/Children.jpg';
import bussnessBook from '../../assets/bussnessBook.jpg';
import TravelsBooks from '../../assets/TravelBook.jpg';

const MainCategorys = () => {
  return (
    <div>
        <div className='max-w-screen-xl mx-auto  mt-5 '>
            <div className='flex justify-around '>
                <img className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300' src={comixBook} alt='img'></img>
             <div className=''>
             <div className='flex gap-5'>
                    <img  className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300' src={ArtBook} alt='img'></img>
                    <img  className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300' src={bussnessBook} alt='img'></img>
             </div>
             <div className='flex gap-5 mt-5'>
                    <img  className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300'  src={ChildrenBook} alt='img'></img>
                    <img  className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300' src={TravelsBooks} alt='img'></img>
             </div>
             </div>
            </div>
            
        </div>


    </div>
  )
}

export default MainCategorys