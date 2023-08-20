import React from 'react'
import { AiOutlineHome, AiOutlineUser, AiOutlineAppstore, AiOutlineMessage } from "react-icons/ai";

export default function Navbar() {
    
  return (
    <div className='flex justify-center'>
        <div className='py-3 px-8 bg-[rgba(0,0,0,0.3)] backdrop-blur-md w-max rounded-2xl fixed bottom-4 mx-auto'>
        <ul className='flex gap-8 text-skyBlue text-xl'>
            <a href='#home'><li><AiOutlineHome/></li></a>
            <a href='#about'><li><AiOutlineUser/></li></a>
            <a href='#projects'><li><AiOutlineAppstore/></li></a>
            <a href='#contact'><li><AiOutlineMessage/></li></a>
        </ul>
        </div>
    </div>
  )
}
