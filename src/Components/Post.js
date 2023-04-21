import React from 'react'
import { RiMessage3Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'

const Post = () => {
  return (
    <div>
      <div className=''>
        <div className='flex items-center'>
          <div className='flex items-center'>
          <RiMessage3Fill className='text-gray-600'/>
          <p className='font-semibold text-gray-600 pl-3'>Popular Images</p>
          <span className='pl-2'>&#8226;</span>
          <p className='text-blue-500 font-bold text-sm pl-2'>See more</p>
          </div>
          <div className=''>
              <AiOutlineClose/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post