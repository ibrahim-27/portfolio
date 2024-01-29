import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSquareGit, FaNode } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoFirebase, BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

export default function Skills() {
  return (
    <div id='skills' className='flex flex-col gap-4 items-center my-4 px-4'>
        <div>
            <p className="text-sm text-gray-500">What I know</p>
            <h1 className='text-skyBlue text-center text-xl md:text-2xl'>Skills</h1>
        </div>
      <ul className='flex justify-center flex-wrap text-5xl gap-3 md:gap-6'>
        <li className='text-orange-500'><FaHtml5/></li>
        <li className='text-blue-500'><FaCss3Alt/></li>
        <li className='text-yellow-300'><FaJs/></li>
        <li className='text-skyBlue'><FaReact/></li>
        <li className='text-red-500'><FaSquareGit/></li>
        <li className='text-skyBlue'><BiLogoTailwindCss/></li>
        <li className='text-green-500'><FaNode /></li>
        <li className='text-yellow-500'><BiLogoFirebase/></li>
        <li className='text-green-500'><BiLogoMongodb /></li>
      </ul>
    </div>
  )
}
