import React, { useState } from "react";
import StartGame from "../components/StartGame";
import GamePlay from "../components/GamePlay";

function Index() {
const [isGameStarted,setIsGameStarted] = useState(false);

const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=>!prev);
}

return (
    <div>
    {isGameStarted ? <GamePlay/> : <StartGame toggleGamePlay={toggleGamePlay}/>}
    </div>
);
}

export default Index;
