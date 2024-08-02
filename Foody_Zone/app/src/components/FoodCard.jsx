import React from 'react';
import './FoodCard.css'; // Import the CSS file

function FoodCard({ obj }) {
  return (
    <div className='food-card m-3 lg:m-0 flex p-4 text-white rounded-3xl'>
      <div className='mr-2 w-96'>
        <img src={`http://localhost:9000${obj.image}`} alt="Image" />
      </div>
      <div>
        <div className='text-2xl mb-2 text-white font-semibold'>{obj.name}</div>
        <div className='text-gray-50'>{obj.text}</div>
        <div className='justify-end items-end flex mt-2'><div className=' px-4 py-1 rounded-2xl bg-red-500'>${obj.price.toFixed(2)}</div></div>
      </div>
    </div>
  );
}

export default FoodCard;
