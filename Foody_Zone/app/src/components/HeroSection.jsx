import React from 'react';
import FoodCard from './FoodCard';

function HeroSection({ ResponseData }) {
  return (
    <div className='bg-hero-image bg-no-repeat bg-cover min-h-screen lg:h-[78.5vh] '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:pl-24 lg:pr-24 lg:gap-12 lg:pt-16 place-content-center '>
        {ResponseData.map((obj, i) => <FoodCard key={i} obj={obj} />)}
      </div>
    </div>
  );
}

export default HeroSection;
