import React from 'react'

export default function ProjectCard(props) {
  return (
    <div className='py-4 px-2 bg-navyBlue rounded-2xl w-[80%] flex flex-col items-center gap-4 mx-auto'>
      <div className='flex justify-center'>
        <img className='h-44 w-72 rounded-2xl' src={props.img} alt='project'></img>
      </div>
      <h1 className=''>{props.name}</h1>
      <div className='flex gap-2'>
        <a target="_blank" rel='noreferrer' href={props.github} className='border p-2 rounded-md text-xs md:text-sm text-skyBlue border-skyBlue'>GitHub</a>
        {props.liveDemo && <a target="_blank" rel='noreferrer' href={props.liveDemo} className='p-2 rounded-md text-xs md:text-sm bg-skyBlue text-black'>Live Demo</a>}
      </div>
    </div>
  )
}
