import React from 'react'
import '../App.css'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import pf from '../assets/pf2.png'

export default function Picture() {
  return (
    <div className='grid grid-cols-5 text-center px-4 mx-8 md:mx-24 lg:mx-32'>
        <ul className='hidden md:flex flex-col gap-3 text-skyBlue justify-center md:text-lg'>
            <a href='https://github.com/ibrahim-27' target='_blank' rel="noreferrer"><li><FaGithub className='hover:cursor-pointer'/></li></a>
            <a href='https://www.linkedin.com/in/muhammad-ibrahim-127b93224/' target='_blank' rel="noreferrer"><li><FaLinkedin className='hover:cursor-pointer'/></li></a>
            <a href='https://www.instagram.com/_ibrahim27_/' target='_blank' rel="noreferrer"><li><FaInstagram className='hover:cursor-pointer'/></li></a>
        </ul>
      <div className='flex justify-self-center justify-center col-span-5 md:col-span-3 h-64 bg-skyBlue w-[100%] md:w-[60%] lg:w-[40%] rounded-t-[50%]'>
        <img className='' src={pf} alt='profile'/>
      </div>
      <div className='hidden md:block text-vertical text-sm text-skyBlue'>
        <button onClick={()=>{
          const footer = document.getElementById('footer')
          footer.scrollIntoView();
        }}>scroll down &rarr;</button>
      </div>
    </div>
  )
}
