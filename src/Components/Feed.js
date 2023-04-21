import React from 'react';
import Input from './Input';
import Post from './Post';
import Navbar from './Navbar';

const Feed = () => {
  return (
    <div className='w-screen h-screen mb-12'>
    {/*Navbar*/}
    <Navbar/>
    {/*Input*/}
    <div className='mt-14'>
    <Input/>
    </div>
    {/*Posts*/}
    <Post/>
    </div>
    
  )
}

export default Feed