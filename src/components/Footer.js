import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div id="footer" className="mt-8 bg-skyBlue text-black flex flex-col items-center py-6 gap-6">
      <h1 className="text-2xl font-bold">Muhammad Ibrahim</h1>
      <ul className="flex gap-3 flex-wrap justify-center">
        <a href="#home"><li className="hover:underline">Home</li></a>
        <a href="#about"><li className="hover:underline">About</li></a>
        <a href="#skills"><li className="hover:underline">Skills</li></a>
        <a href="#projects"><li className="hover:underline">Projects</li></a>
        <a href="#contact"><li className="hover:underline">Contact</li></a>
      </ul>
      <ul className="flex gap-3">
        <a
          href="https://www.facebook.com/ibrahim.anwar.35380?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaFacebook className="text-xl hover:cursor-pointer" />
          </li>
        </a>
        <a
          href="https://www.instagram.com/_ibrahim27_/"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaInstagram className="text-xl hover:cursor-pointer" />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-ibrahim-127b93224/"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaLinkedin className="text-xl hover:cursor-pointer" />
          </li>
        </a>
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2FSKIPPER_27"
          target="_blank"
          rel="noreferrer"
        >
          <li>
            <FaTwitter className="text-xl hover:cursor-pointer" />
          </li>
        </a>
      </ul>
      <p>&copy; All rights reserved</p>
    </div>
  );
}
