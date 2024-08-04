import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";

function AppBar({opening, searchContact}) {
  return (
    <div className='max-w-[27rem] mx-auto'>
        <div className='flex items-center justify-center gap-2 text-black bg-white rounded-md p-5 m-4 '>
            <img className='h-10' src="./logo.png" alt="" />
            <h2 className='text-3xl font-semibold'>Firebase Contact App</h2>
        </div>
        <div className='flex relative items-center m-4 mt-6 gap-4'>
            <FiSearch className='absolute text-3xl ml-2' />
            <input onChange={searchContact} className='flex-grow bg-transparent pl-10 text-2xl border-2 h-12 border-blue-600 rounded-md' type="text" placeholder='Search Content' />
            <FaCirclePlus onClick={opening} className='text-5xl hover:text-green-500 ' />
        </div>
    </div>
  )
}

export default AppBar