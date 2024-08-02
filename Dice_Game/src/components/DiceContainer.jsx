import React, { useState } from 'react';

function DiceContainer({ numGenerator, numberGenerator, setScore }) {
  const [isRules, setIsRules] = useState(false);

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <button onClick={numberGenerator} className='flex justify-center items-end h-[30vh]'>
        <img className='w-32' src={`./images/dice_${numGenerator}.png`} alt={`dice_${numGenerator}`} />
      </button>
      <div>Click on Dice to roll</div>
      <div className='px-12 py-2 border-solid border-2 border-black rounded-md text-xs font-semibold'>
        <button onClick={resetScore}>Reset Score</button>
      </div>
      <div className='px-12 py-2 border-solid border-2 rounded-md bg-black text-white text-xs'>
        <button onClick={() => setIsRules(!isRules)}>Show Rules</button>
      </div>
      {isRules && (
        <div className='bg-red-100 rounded-md p-4'>
          <h2 className='font-bold text-2xl'>How to play dice game</h2>
          <ul className='list-decimal m-6'>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>After clicking on dice, if selected number is equal to dice number you will get same point as dice</li>
            <li>If you get wrong guess then 2 points will be deducted</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DiceContainer;
