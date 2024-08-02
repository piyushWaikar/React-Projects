import React, { useState } from 'react';
import AppBar from './AppBar';
import DiceContainer from './DiceContainer';

function GamePlay() {
  const [numGenerator, setNumGenerator] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);
  const [selectNumWarning, setSelectNumWarning] = useState(null);
  const [isWinning,setIsWinning]=useState(false);

  const numberGenerator = () => {
    if (selectedNumber === null) {
      setSelectNumWarning("Please Select a Number");
      return;
    }

    setSelectNumWarning(null); // Clear warning if a number is selected
    const number = Math.floor(Math.random() * 6) + 1;
    setNumGenerator(number);

    if (number === selectedNumber) {
      setScore(prevScore => prevScore + 2);
      setIsWinning(true);
    } else {
      setScore(prevScore => prevScore - 1);
    }

    setSelectedNumber(null);

    // Reset selected number
   
  };

  

  console.log("NumGenerator: " + numGenerator);

  return (
    <div className='min-h-screen w-full'>
      <AppBar selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} score={score} selectNumWarning={selectNumWarning} setSelectNumWarning={setSelectNumWarning} setNumGenerator={setNumGenerator} setIsWinning={setIsWinning} />
      {isWinning && <div className='text-center text-xl text-green-600'>Congratulations, you win! +2</div>}
      <DiceContainer numGenerator={numGenerator} numberGenerator={numberGenerator} setScore={setScore} />
    </div>
  );
}

export default GamePlay;
