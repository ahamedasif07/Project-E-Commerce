import React, { useEffect } from 'react'
import comixBook from '../../assets/comixBook.jpg';
import ArtBook from '../../assets/Art.jpg';
import ChildrenBook from '../../assets/Children.jpg';
import bussnessBook from '../../assets/bussnessBook.jpg';
import TravelsBooks from '../../assets/TravelBook.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MainCategorys = () => {
    
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true,     // Whether animation should happen only once
        });
      }, []);
  return (
    <div>
        <div className='max-w-screen-xl mx-auto px-4  mt-5 overflow-hidden'>
            <div className='flex lg:flex-row flex-col gap-4 justify-around '>
                <img data-aos="fade-up" className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300' src={comixBook} alt='img'></img>
             <div className='flex flex-col justify-between'>


             <div className='flex lg:flex-row flex-col gap-5'>
                    <img  data-aos="fade-left" className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300' src={ArtBook} alt='img'></img>
                    <img  data-aos="fade-right"  className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300' src={bussnessBook} alt='img'></img>
             </div>


             <div className='flex gap-5 lg:flex-row flex-col mt-5'>
                    <img data-aos="fade-left"  className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300'  src={ChildrenBook} alt='img'></img>
                    <img data-aos="fade-right" className='hover:opacity-80 opacity-100 transition-all ease-in-out duration-300' src={TravelsBooks} alt='img'></img>
             </div>
             </div>
            </div>
            
        </div>


    </div>
  )
}

export default MainCategorys