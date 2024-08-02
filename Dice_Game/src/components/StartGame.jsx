import React from 'react'

function StartGame({toggleGamePlay}) {
  return (
    <div className='flex justify-center items-center min-h-screen min-w-full'>
    <div className='h-full mr-n-8'>
        <img className='w-4/5' src="./images/Dices.png" alt="DiceImage" />
    </div>

    <div className='flex flex-col gap-3'>
        <div className='text-7xl font-bold whitespace-nowrap'>
            DICE GAME
        </div>
        <div className='flex justify-start'>
            <button onClick={toggleGamePlay} className="bg-black hover:bg-slate-700 text-white font-bold py-1 px-8 rounded ml-2">
                Play Now
            </button>
        </div>
    </div>
</div>
  )
}

export default StartGame