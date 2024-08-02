import React from 'react'

function AppBar({filtering,buttonFiltering}) {
  return (
    <div className='grid grid-col-1 lg:grid-cols-3 auto-rows-fr bg-bggray items-center h-40 place-items-center object-scale-down'>
        <div className=''>
            <img src="./images/FoodyZone.png" alt="" />
        </div>
        <div className=' h-full place-content-center mt-4 lg:mt-0 lg:place-content-end pb-6'>
            <ul className='flex gap-4 text-white'>
                <button className='bg-red-500 rounded-md px-4 py-1 hover:bg-red-600' onClick={()=>buttonFiltering('all')}>All</button>
                <button className='bg-red-500 rounded-md px-4 py-1 hover:bg-red-600' onClick={()=>buttonFiltering('breakfast')}>Breakfast</button>
                <button className='bg-red-500 rounded-md px-4 py-1 hover:bg-red-600' onClick={()=>buttonFiltering('lunch')}>Lunch</button>
                <button className='bg-red-500 rounded-md px-4 py-1 hover:bg-red-600' onClick={()=>buttonFiltering('dinner')}>Dinner</button>
            </ul>
        </div>
        <div className='bg-transparent '>
            <input onChange={filtering} className='bg-transparent  border-solid border-2 border-red-500 rounded-md py-1 px-3 text-red-600' type="text" placeholder='search food' />
        </div>
    </div>
  )
}

export default AppBar