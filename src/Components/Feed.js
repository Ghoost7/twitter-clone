import React from 'react';
import Input from './Input';
import Post from './Post';
import Navbar from './Navbar';

const Feed = () => {
  return (
    <div className='w-screen mb-12 max-w-[40rem] lg:border-r ml-20 md:ml-32 lg:ml-[25rem] overflow-hidden'>
    {/*Navbar*/}
    <Navbar/>
    {/*Input*/}
    <div className='mt-14'>
    <Input/>
    </div>
    {/*Post*/}
    <Post/>
    {/*Posts*/}
    </div>
    
  )
}

export default Feed