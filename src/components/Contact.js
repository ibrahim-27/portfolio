import React from 'react'
import { BiLogoGmail, BiLogoWhatsapp } from "react-icons/bi";

export default function Contact() {
  return (
    <div id='contact' className='my-4'>
        <p className="text-sm text-gray-500 text-center">Get in Touch</p>
        <h1 className="text-xl md:text-2xl text-skyBlue text-center">Contact Me</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-8'>
            <div className='flex flex-col justify-between text-center text-sm items-center gap-2'>
                <div className='bg-navyBlue w-3/4 md:w-[45%] max-w-full rounded-md py-4 text-xs lg:text-md min-w-[250px]'>
                    <BiLogoGmail className='m-auto text-xl'/>
                    <h2>Email</h2>
                    <h3>ibrahimanwarulhaq1994@gmail.com</h3>
                    <h4 className='mt-2 text-skyBlue'>Send a email</h4>
                </div>
                <div className='bg-navyBlue w-3/4 md:w-[45%] max-w-full rounded-md py-4 text-xs lg:text-md min-w-[250px]'>
                    <BiLogoWhatsapp className='m-auto text-2xl'/>
                    <h2>WhatsApp</h2>
                    <h3>+923094242532</h3>
                    <h4 className='mt-2 text-skyBlue'>Send a message</h4>
                </div>
            </div>
            <div>
                <form className='flex flex-col items-center mt-4 md:items-start md:mt-0'>
                    <input className='bg-transparent border rounded-md py-3 px-2 w-[65%] border-skyBlue text-skyBlue placeholder-gray-500' type='text' placeholder='Your Full Name'/>
                    <input className='bg-transparent border rounded-md py-3 px-2 w-[65%] border-skyBlue text-skyBlue placeholder-gray-500 mt-3' type='email' placeholder='Your Email'/>
                    <textarea className='bg-transparent border rounded-md py-6 px-2 w-[65%] border-skyBlue  text-skyBlue placeholder-gray-500 mt-3' placeholder='Your Message'/>
                    <button className="mt-2 w-32 p-2 rounded-md text-xs md:text-sm bg-skyBlue text-black">Send Message</button>
                </form>
            </div>
        </div>
    </div>
  )
}
