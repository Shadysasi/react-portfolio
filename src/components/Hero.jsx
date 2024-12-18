import React from 'react'
import profile from "../assets/hero.png"
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Hero = () => {
  
  return (
    <section id='home' className='min-h-screen py-10 flex md:flex-row flex-col items-center'>
      <div className='flex-1 flex items-center justify-center h-full'>
        <img src={profile} alt='profile' className='md:w-11/12 h-full object-cover'/>
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center'>
          <h1 className='md:text-5xl text-2xl text-white font-bold leading-10 md:leading-normal'>
            <span className='text-cyan-600 md:text-6xl text-5xl'>Hello! <br/></span>
            <span>My Name is Sasikumar</span>
          </h1>
          <h4 className='md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'>Fullstack Developer</h4>
          <a href='#contact' >
          <button className='font-bold bg-cyan-600 rounded-3xl px-6 py-3 mt-8' >Contact Me</button>
          </a>
          <ul className='mt-8 text-3xl flex md:justify-start justify-center items-center gap-5'>
            <li className='text-gray-600 hover:text-white cursor-pointer'>
              <a href="mailto:sasieng5851@gmail.com"
                 target="_blank"
                 rel="noreferrer">
                <MdEmail/>
              </a>
            </li>
            <li className='text-gray-600 hover:text-white cursor-pointer'>
              <a  href="https://www.linkedin.com/in/sasi5851/"
                  target="_blank"
                  rel="noreferrer">
                <FaLinkedin/>
              </a>
            </li>
            <li className='text-gray-600 hover:text-white cursor-pointer'>
              <a href='https://github.com/Shadysasi'
                 target="_blank"
                 rel="noreferrer">
                <FaGithub/>
              </a>
            </li>
            <li className='text-gray-600 hover:text-white cursor-pointer'><RiInstagramFill/></li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Hero