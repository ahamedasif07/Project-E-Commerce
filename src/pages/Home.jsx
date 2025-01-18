import React from 'react'
import Slider from '../components/Sliders/Slider'
import MainCategorys from '../components/MainCategorys/MainCategorys'
import ChildrenBooks from '../components/AllBooks/ChildrenBooks'

const Home = () => {
  return (
    <div>
        <Slider/>
        <MainCategorys/>
        <ChildrenBooks/>
    </div>
  )
}

export default Home