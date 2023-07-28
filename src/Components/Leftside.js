import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import twitterlogo from "../public/twitterlogo.png";
import Image from 'next/image';
import user from "../public/user.png"
import tweet from "../public/tweet.svg"
import { RiHome7Fill } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BiBookmark } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { FaRegCommentDots } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

const Leftside = () => {

const Nav = [Nav, SetNav] = useState(false);

const handleNav = () => {
    setNav(!Nav);
};

  return (
    <div>
        <div className='fixed flex flex-col justify-between w-20 pt-4 h-screen md:w-32 md:items-end md:pr-4 lg:w-80 lg:pl-12 lg:ml-20'>
            <div className=''>
                <ul className='w-full space-y-6 flex flex-col items-center justify-center lg:items-start lg:justify-start'>
                <li>
                    <div className='h-12 w-12'>
                        <Image 
                        src={twitterlogo}
                        alt='/'/>
                 </div>   
                </li>
                <li>
                    <div className='flex'>
                        <RiHome7Fill className="h-7 w-7 lg:h-8 lg:w-8"/>
                        <div className='hidden lg:flex'>
                    <p className='pl-2 text-[24px]'>Home</p>
                    </div>
                    </div>
                </li>
                <li>
                    <div className='flex'>
                        <BsSearch className="h-7 w-7 lg:h-8 lg:w-8"/>
                        <div className='hidden lg:flex'>
                    <p className='pl-2 text-[24px]'>Search</p>
                    </div>
                    </div>
                </li>
                <li>
                    <div className='flex'>
                        <FaBell className="h-7 w-7 lg:h-8 lg:w-8"/>
                        <div className='hidden lg:flex'>
                    <p className='pl-2 text-[24px]'>Notifications</p>
                    </div>
                    </div>
                </li>
                <li>
                    <div className='flex'>
                        <HiOutlineMail className="h-7 w-7lg:h-8 lg:w-8"/>
                        <div className='hidden lg:flex'>
                    <p className='pl-2 text-[24px]'>Messages</p>
                    </div>
                    </div>
                </li>
                <li>
                    <div className='flex'>
                        <BiBookmark className="h-7 w-7 lg:h-8 lg:w-8"/>
                        <div className='hidden lg:flex'>
                    <p className='pl-2 text-[24px]'>Bookmarks</p>
                    </div>
                    </div>
                </li>
                <li>
                    <div className='flex'>
                        <RiFileList2Line className="h-7 w-7lg:h-8 lg:w-8"/>
                        <div className='hidden lg:flex'>
                    <p className='pl-2 text-[24px]'>Lists</p>
                    </div>
                    </div>
                </li>
                <li>
                    <div className='flex'>
                        <HiOutlineUser className="h-7 w-7lg:h-8 lg:w-8"/>
                        <div className='hidden lg:flex'>
                    <p className='pl-2 text-[24px]'>Profile</p>
                    </div>
                    </div>
                </li>
                <li>
                    <div className='flex'>
                        <FaRegCommentDots className="h-7 w-7lg:h-8 lg:w-8"/>
                        <div className='hidden lg:flex'>
                    <p className='pl-2 text-[24px]'>More</p>
                    </div>
                    </div>
                </li>

                <li>
                    <div className='lg:hidden w-12 h-12 p-3 rounded-full object-cover'>                        
                     <Image src={tweet} 
                     className=''
                     alt='/'/>  
                     </div>

                      <div className='hidden lg:flex w-60 h-14 items-center justify-center'>

                    <p className='font-bold text-white bg-blue-400 p-2 rounded-full text-center w-full h-full flex items-center justify-center text-[19px]'>
                        Tweet
                        </p>
                    
                    </div>
                </li>
            </ul>
            </div>

            <div className='flex justify-center items-center h-14 mb-8'>

                <div className=' rounded-full flex justify-center lg:justify-start shrink-0'>
                    <Image 
                    src={user}
                    alt=''
                    className='rounded-full object-cover w-14 h-14'/>
                </div>

                <div className='hidden lg:flex lg:justify-between  h-full  items-center justify-center pl-4  w-full'>
                    <div className='flex flex-col'>
                        <p className='text-[16px] font-bold'>User</p>
                        <p className='text-[16px]'>@username</p>
                    </div>   
                        <div className='pr-5'>
                            <BsThreeDots className='h-6 w-6'/>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Leftside