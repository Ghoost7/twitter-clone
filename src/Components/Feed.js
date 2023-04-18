import React from 'react';
import Input from './Input';
import Post from './Post';
import Navbar from './Navbar';

const Feed = () => {
  return (
    <div>
    {/*Navbar*/}
    <Navbar/>
    {/*Input*/}
    <Input/>
    {/*Posts*/}
    <Post/>
    </div>
    
  )
}

export default Feed