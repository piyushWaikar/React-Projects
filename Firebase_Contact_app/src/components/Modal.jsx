import React from 'react'
import { RxCross2 } from "react-icons/rx";
import {createPortal} from "react-dom"

function Modal({isOpen,closening , children}) {
return createPortal(
<>
  {isOpen && (
  <>
    <div
      className="bg-slate mx-auto z-50 absolute top-[22vh] left-1/2 transform -translate-x-1/2 max-w-[80%] lg:max-w-[30%] gap-2">
      <div className=' flex justify-end '>
        <RxCross2 className='flex justify-end text-red-600 text-5xl' onClick={closening} />
      </div>
      {children}
    </div>
    <div onClick={closening} className='backdrop-blur absolute top-0 z-40 h-screen w-screen' />
  </>
  )}
</>
// we exported this whole component directly into index.html using id-modal-root to avoid css property conflict .
, document.getElementById("modal-root"))
}

export default Modal