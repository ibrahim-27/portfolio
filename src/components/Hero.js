import React from "react";
import resume from '../assets/Resume.pdf'

export default function Hero() {
  return (
    <div id="home" className="flex flex-col items-center text-center py-16 gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm">Hello I'm</p>
        <h1 className="text-2xl lg:text-3xl">Muhammad Ibrahim</h1>
        <h3 className="text-sm text-gray-500">Front End Developer</h3>
      </div>
      <div className="flex gap-2">
        <a href={resume} target="_blank" rel="noreferrer">
          <button className="border p-2 rounded-md text-xs md:text-sm text-skyBlue border-skyBlue">
            Download CV
          </button>
        </a>
        <button className="p-2 rounded-md text-xs md:text-sm bg-skyBlue text-black">
          Let's Talk
        </button>
      </div>
    </div>
  );
}
