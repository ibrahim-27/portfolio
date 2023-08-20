import React from "react";

export default function AboutMe() {
  return (
    <div id="about" className="flex justify-center text-center my-12">
      <div className="w-3/4 md:w-1/2">
        <p className="text-sm text-gray-500">Get to know</p>
        <h1 className="text-xl md:text-2xl text-skyBlue">About Me</h1>
        <p>
          Hi! I'm Muhammad Ibrahim, a passionate and creative front-end web
          developer with a love for crafting seamless digital experiences. With
          a blend of technical prowess and artistic flair, I thrive on bringing
          designs to life and making websites not only functional but also
          visually captivating.
        </p>
        <button className="mt-2 p-2 rounded-md text-xs md:text-sm bg-skyBlue text-black">
          Let's Talk
        </button>
      </div>
    </div>
  );
}
