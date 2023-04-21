import Image from 'next/image'
import React from 'react'
import user from "../public/user.png"

const Input = () => {
  return (
    <div>
      <div  className=''>
        <div className='w-14 h-14 flex'>
      <Image src={user} className='object-cover rounded-full'/>
        </div>
      </div>
    </div>
  )
}

export default Input