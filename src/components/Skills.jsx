import React from 'react'
import { FaHtml5,FaNodeJs,FaReact,FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";


const Skills = () => {
  return (
    <section id='skills' className='py-10 bg-gray-800 relative'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          My <span className='text-cyan-600'>Skills</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My Knowledge</p>
      </div>
      <ul className='flex items-center justify-center mt-12 gap-10 flex-wrap'>
        <li className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
          <div 
            style={{
            background: `conic-gradient(rgb(8,145,170) 80%,#ddd 80%)`
             }}
            className='w-32 h-32 flex items-center justify-center rounded-full'>
            <div className='text-6xl h-28 w-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
              <FaHtml5/>
            </div>
          </div>
          <p className='text-xl text-center mt-3'>Advance</p>
        </li>
        <li className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
          <div 
            style={{
            background: `conic-gradient(rgb(8,145,170) 80%,#ddd 80%)`
             }}
            className='w-32 h-32 flex items-center justify-center rounded-full'>
            <div className='text-6xl h-28 w-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
              <RiTailwindCssFill/>
            </div>
          </div>
          <p className='text-xl text-center mt-3'>Advance</p>
        </li>
        <li className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
          <div 
            style={{
            background: `conic-gradient(rgb(8,145,170) 65%,#ddd 65%)`
             }}
            className='w-32 h-32 flex items-center justify-center rounded-full'>
            <div className='text-6xl h-28 w-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
              <DiJavascript/>
            </div>
          </div>
          <p className='text-xl text-center mt-3'>Intermediate</p>
        </li>
        <li className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
          <div 
            style={{
            background: `conic-gradient(rgb(8,145,170) 65%,#ddd 65%)`
             }}
            className='w-32 h-32 flex items-center justify-center rounded-full'>
            <div className='text-6xl h-28 w-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
              <FaReact/>
            </div>
          </div>
          <p className='text-xl text-center mt-3'>Intermediate</p>
        </li>
        <li className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
          <div 
            style={{
            background: `conic-gradient(rgb(8,145,170) 50%,#ddd 50%)`
             }}
            className='w-32 h-32 flex items-center justify-center rounded-full'>
            <div className='text-6xl h-28 w-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
              <FaNodeJs/>
            </div>
          </div>
          <p className='text-xl text-center mt-3'>Beginner</p>
        </li>
        <li className='border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
          <div 
            style={{
            background: `conic-gradient(rgb(8,145,170) 70%,#ddd 70%)`
             }}
            className='w-32 h-32 flex items-center justify-center rounded-full'>
            <div className='text-6xl h-28 w-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600'>
              <FaPython/>
            </div>
          </div>
          <p className='text-xl text-center mt-3'>Intermediate</p>
        </li>
      </ul>
    </section>
  )
}

export default Skills