import { useState } from "react";
const useDisclouse = () =>{
    const [isOpen,setOpen] = useState(false);

    const opening = ()=>{
      setOpen(true);
    }
  
    const closening = ()=>{
      setOpen(false);
    }

    return {
        isOpen, opening, closening
    };
};

export default useDisclouse;