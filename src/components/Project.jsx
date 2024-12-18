import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import project5 from "../assets/project5.png"
import project4 from "../assets/project4.png"
import project3 from "../assets/project3.png"
import project2 from "../assets/project2.png"
import project1 from "../assets/project1.png"
import person from "../assets/project_person.png"
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Project = () => {
  const projects = [
    {
      img: project1,
      name: "Youtube clone App",
      github_link: "https://github.com/Shadysasi/next-watch-app.git",
      live_link: "nextwatchvid.ccbp.tech/",
    },
    {
      img: project2,
      name: "Job Search App",
      github_link: "https://github.com/Shadysasi/jobbywebsite.git",
      live_link: "jobbyweb.ccbp.tech",
    },
    {
      img: project3,
      name: "Shopping App",
      github_link: "https://github.com/Shadysasi/REACTJS-CP-35-NXT-TRENDZ-SPECIFIC-PRODUCT-DETAILS.git",
      live_link: "sasinxttrends.ccbp.tech",
    },
    {
      img: project4,
      name: "prime video App",
      github_link: "https://github.com/Shadysasi/REACTJS-CP-40-PRIMEVIDEO.git",
      live_link: "",
    },
    {
      img: project5,
      name: "Quiz App",
      github_link: "https://github.com/Shadysasi/quiz-app.git",
      live_link: "https://plattrquizyapp.netlify.app",
    },
  ]
  return (
    <section id='projects' className='py-10 text-white'>
       <div className='text-center'>
          <h3 className='text-4xl font-semibold'>
            My <span className='text-cyan-600'>Projects</span>
          </h3>
          <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
      </div>
      <br/>
      <div className='flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative'>
        <div className='lg:w-2/3 w-full'>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView:2,
              },
            }}
            loop={true}
            autoplay = {{
              delay: 3000
            }}
            pagination={{ clickable: true }}
            modules={[Pagination,Autoplay]}
          >
            {projects.map((project,i)=>(
              <SwiperSlide key={i}>
                <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                  <img src={project.img} alt='' className='rounded-lg'/>
                  <h3 className='text-xl my-4'>{project.name}</h3>
                  <div className='flex gap-3'>
                    <a href={project.github_link} 
                       target='_blank'
                       rel="noreferrer"
                       className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'
                       >
                      Github
                    </a>
                    <a href={project.live_link} 
                       target='_blank'
                       rel="noreferrer"
                       className='text-cyan-600 bg-gray-800 px-2 py-1 inline-block'
                       >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='lg:block hidden'>
          <img src={person} alt=''/>
        </div>
      </div>
    </section>
  )
}

export default Project