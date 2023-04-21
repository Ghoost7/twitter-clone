import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='fixed flex items-center justify-between w-[25rem] md:w-[40rem] 
    max-w-[38rem] p-3 bg-white-400/[0.8] h-14'>
       <p className='font-bold text-[20px] opacity-100'>
        Home
        </p>
        <div className='opacity-100'>
        <AiOutlineStar className='w-6 h-6'/>
        </div>
    </div>
  )
}

export default Navbar