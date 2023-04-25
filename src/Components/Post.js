import React from 'react';
import { RiMessage3Fill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import { RiChat1Line } from 'react-icons/ri';
import { BiRepost } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiUpload } from 'react-icons/fi';
import user from "../public/user.png";
import Image from 'next/image';

import cosplay from "../public/cosplay.jpg";

const Post = () => {
  return (
    <div className='hover:bg-gray-100 ease-out duration-200 pb-4 border-b border-l'>

      {/*topic start*/}

      <div className='flex'>
        <div className='flex justify-between w-full pt-4'>
          <div className='flex items-center pl-14'>
          <RiMessage3Fill className='text-gray-600'/>
          <p className='font-semibold text-gray-600 pl-3'>Popular Images</p>
          <span className='pl-2'>&#8226;</span>
          <p className='text-blue-500 font-bold text-sm pl-2'>See more</p>
          </div>
          <div className='flex items-center mr-4 hover:bg-gray-200 rounded-full p-1 ease-out duration-250'>
              <AiOutlineClose/>
          </div>
        </div>
      </div>

      {/*Post Header*/}

      <div className='flex pl-4 pt-4 w-full justify-between pr-6'>
        <div className='flex'>
          <div className='w-14 h-14 flex'>
            <Image src={user} className='object-cover rounded-full'/>
          </div>
          <div className='pl-3'>
            <div className='flex'>
              <div className='flex'>
                <p className='font-bold '>
                User
                </p>
                <p className='pl-2'>
                @username
                </p>
                <span className='pl-2 pr-2 text-gray-500'>&#8226;</span>
                <p className='text-gray-500'>11h</p>
              </div> 
          </div>
          <div className=''>
                <p>Cosplay</p>
              </div>
            </div>
          </div>  
          <div className=''>
            <BsThreeDots className='w-5 h-5'/>
          </div>              
      </div>
      {/* Image */}
      <div className='pt-4 px-6 pl-[5.7rem]'>
        <div className='px-6'>
          <Image src= {cosplay} className='rounded-[1rem] border'/>
        </div>
      </div>

       {/* Post Buttons */}
       <div className='pl-[5.7rem] pr-6'>
        <ul className='flex space-x-20 pt-4'>
          <li className='flex items-center'>
              <RiChat1Line className='w-6 h-6 shrink-0'/>
              <p className='pl-2'>142k</p>
          </li>
          <li>
            <BiRepost className='w-6 h-6 shrink-0'/>
              <p className='pl-2'>25k</p>
          </li>
          <li>
            <AiOutlineHeart className='w-6 h-6 shrink-0'/>
              <p className='pl-2'>189k</p>
          </li>
          <li>
            <FiUpload className='w-6 h-6 shrink-0'/>
              <p className='pl-2'>40</p>
          </li>
        </ul>
       </div>
    </div>
  )
}

export default Post