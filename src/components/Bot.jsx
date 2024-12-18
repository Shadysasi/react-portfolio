import React from 'react'
import { IoIosChatbubbles } from "react-icons/io";

const Bot = () => {
  return (
    <a href='#contact' className='fixed bottom-5 sm:right-8 right-4 z-[999] text-white text-4xl h-16 w-16 bg-transparent cursor-pointer flex items-center justify-center rounded-full animate-bounce'>
      <IoIosChatbubbles size={50} color='#1D78D3'/>
    </a>
  )
}

export default Bot