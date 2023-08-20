import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSquareGit } from "react-icons/fa6";
import { BiLogoTailwindCss, BiLogoFirebase } from "react-icons/bi";

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
        <li className='text-yellow-500'><BiLogoFirebase/></li>
      </ul>
    </div>
  )
}
