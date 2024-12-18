import React from 'react'
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  
  return (
    <section id='contact' className='py-10 px-3 text-white'>
      <div className='text-center mt-8'>
          <h3 className='text-4xl font-semibold'>
            Contact <span className='text-cyan-600'>Me</span>
          </h3>
          <p className='text-gray-400 mt-3 text-lg'>Get in Touch</p>
          <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
            <form 
              action='https://getform.io/f/alllxxxa'
              method='POST'
              className='flex flex-col gap-5 flex-1'>
              <input name='name' type='text' placeholder='Your Name' className='p-2 rounded-lg bg-gray-600 text-xl'/>
              <input name='email' type='Email' placeholder='Your Email Address' className='p-2 rounded-lg bg-gray-600 text-xl'/>
              <textarea name='message' placeholder='Your Message' rows={10} className='p-2 rounded-lg bg-gray-600 text-xl'></textarea>
              <button type="submit" className='font-bold bg-cyan-600 rounded-3xl px-6 py-3 mt-8 w-fit'>Send Message</button>
            </form>
            <div className='flex flex-col gap-7'>
              <a href='mailto:sasieng5851@gmailcom'
                 target='_blank'
                 rel='noreferrer'
                 className='flex items-center gap-4'>
                <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center bg-cyan-600 rounded-full'>
                  <MdEmail/>
                </div>
                <p className='md:text-base text-sm '>sasieng5851@gmail.com</p>
              </a>
              <div className='flex items-center gap-4'>
                <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center bg-cyan-600 rounded-full'>
                  <IoLogoWhatsapp/>
                </div>
                <p className='md:text-base text-sm '>+91 7904283123</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center bg-cyan-600 rounded-full'>
                  <FaLocationDot/>
                </div>
                <p className='md:text-base text-sm '>Chennai</p>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Contact