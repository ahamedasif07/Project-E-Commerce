import React from 'react'
import Slider from '../components/Sliders/Slider'
import MainCategorys from '../components/MainCategorys/MainCategorys'
import ChildrenBooks from '../components/AllBooks/ChildrenBooks'
import Discount from '../components/Discount/Discount'

const Home = () => {
  return (
    <div>
        <Slider/>
        <MainCategorys/>
        <ChildrenBooks/>
        <Discount/>
    </div>
  )
}

export default Home