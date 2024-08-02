import React from 'react';

function AppBar({ selectedNumber, setSelectedNumber, score, selectNumWarning,setIsWinning }) {
  const numbers = [1, 2, 3, 4, 5, 6];

  function buttonClick (num) {
    setSelectedNumber(num)
    setIsWinning(false)
  }

  return (
    <div className='flex justify-between p-6'>
      <div className='flex flex-col items-center'>
        <div className='text-4xl'>{score}</div>
        <div className='font-semibold'>Total Score</div>
      </div>
      <div className='flex flex-col items-end gap-2'>
        <div className='flex gap-2'>
          {numbers.map(num => (
            <button
              key={num}
              className={`flex items-center justify-center h-14 w-14 border-solid border-2 border-gray-400 ${selectedNumber === num ? 'bg-gray-300' : ''}`}
              onClick={() => buttonClick(num) }
            >
              {num}
            </button>
          ))}
        </div>
        <div className='font-bold'>Select Number</div>
        {selectNumWarning && <div className='text-red-500'>{selectNumWarning}</div>}
      </div>
    </div>
  );
}

export default AppBar;
