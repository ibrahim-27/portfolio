import React from 'react';
import ProjectCard from './ProjectCard';
import dataSmart from '../assets/datasmart.png';
import tictactoe from '../assets/tictactoe.png';
import pokedex from '../assets/pokedex.png';
import newsapp from '../assets/newsapp.png';
import ridesharing from '../assets/ridesharing.png';
import jobfinder from '../assets/jobfinder.png';

export default function Projects() {
  return (
    <div id='projects' className='my-8 md:mx-8'>
       <div>
            <p className="text-sm text-center text-gray-500">My Recent Work</p>
            <h1 className='text-skyBlue text-center text-xl md:text-2xl'>Projects</h1>
        </div>
        <div className='mx-4 my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <ProjectCard img={dataSmart} name="Data Smart" github="https://github.com/ibrahim-27/DataSmart" liveDemo="https://ibrahim-27.github.io/DataSmart/"/>
            <ProjectCard img={tictactoe} name="AI Tic Tac Toe" github="https://github.com/ibrahim-27/AI-tic-tac-toe" liveDemo="https://ibrahim-27.github.io/AI-tic-tac-toe/"/>
            <ProjectCard img={pokedex} name="Pokedex" github="https://github.com/ibrahim-27/Pokedex" liveDemo="https://ibrahim-27.github.io/Pokedex/"/>
            <ProjectCard img={newsapp} name="NewsMonkey App" github="https://github.com/ibrahim-27/React-News-App"/>
            <ProjectCard img={ridesharing} name="Ride Sharing App" github="https://github.com/ibrahim-27/Ride-Sharing"/>
            <ProjectCard img={jobfinder} name="Job Finder App" github="https://github.com/ibrahim-27/Job-Finder-Website-Landing-Page"/>
        </div>
    </div>
  )
}
