import React from 'react'
import resume from "../assets/resume.pdf"
import aboutImg from "../assets/about.png"
const About = () => {
  const info = [
    {text: 'Years Experience', count: '00'},
    {text: 'Completed Projects', count: '24'},
    {text: 'Companies Work', count: '01'}
  ]
  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          About <span className='text-cyan-600'>Me</span>
        </h3>
        <p className='text-gray-400 my-3 text-lg'>My Introduction</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-gray-300 my-3'>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
              Hi! I'm Sasikumar, a Fullstack Developer based in Chennai, India. I have hands-on experience with HTML, CSS, JavaScript, React, Node.js, and python. I'm deeply passionate about coding and love the thrill of solving complex problems. I enjoy exploring new technologies and contributing to open-source projects. Let's connect and create something extraordinary!
              </p> 
              <div className='flex justify-center mt-10 items-center gap-7'>
                {info.map((content)=>(
                  <div key={content.text}>
                    <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                      {content.count}
                      <span className='text-cyan-600'>+</span>{" "}
                    </h3>
                    <span className='md:text-base text-xs'>{content.text}</span>
                  </div>
                ))}
              </div>
              <br/>
              <br/>
              <a href={resume} download>
                <button className='font-bold bg-cyan-600 rounded-3xl px-6 py-3 mt-8'>Download CV</button>
              </a>
            </div> 
          </div>
          <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg '>
              <img src={aboutImg} alt=''
                className='w-full object-cover bg-cyan-600 rounded-xl'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About