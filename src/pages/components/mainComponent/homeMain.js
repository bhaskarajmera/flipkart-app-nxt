import React from 'react'
import Header from '../headerComponent/headerMain'
import CategoryMain from '../feturedComponent/categoryMain'
import FeaturedCarouselMain from '../feturedComponent/featuredCarouselMain'
import FeaturedItemsMain from '../feturedComponent/featuredItemsMain'

const HomeMain = () => {
  return (
    <>
        <Header />
        <CategoryMain />
        <FeaturedCarouselMain />
        <FeaturedItemsMain />
    </>
  )
}

export default HomeMain