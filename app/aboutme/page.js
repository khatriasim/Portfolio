"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useState } from "react";
import Link from "next/link";

const AboutMe = () => {
  const [text] = useTypewriter({
    words: ["HTML ", "Frontend Development.........."],
    typeSpeed: 120,
    deleteSpeed: 50,
  });


  const [activesection, setactivesection] = useState('About')

  const sectionContent = {
    About: "I'am a passionate front-end developer with a love for creating innovative web applications. My journey in programming started with curiosity and has grown into a deep passion for advanced technology",
    Skills: "My technical skills include HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. I'm constantly learning new technologies and staying up-to-date with the latest web development trends.",
    Projects: "I've worked on various projects including responsive websites, interactive web applications, and modern UI components. Each project has taught me valuable lessons about problem-solving and user experience.",
    Intrests: "Beyond coding, I'm interested in UI/UX design, emerging web technologies, open source contributions, and continuous learning. I enjoy exploring new frameworks and building creative solutions."
  }
 const download = () => {
    const link = document.createElement('a');
    link.href = '/Asim Cv.pdf'; // Path to your resume file in public folder
    link.download = 'Asim_Khatri_Resume.pdf'; // Name for downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <h1 className="font-bold text-5xl mx-12 mt-9 mb-4">
        Hi, I'm<span className="text-purple-500">Asim</span>{" "}
      </h1>
      <h2 className="text-2xl mx-12">
        Learning{" "}
        <span style={{ fontWeight: "bold", color: "purple" }}>{text}</span>
        <span style={{ color: "red" }}>
          <Cursor cursorStyle="|" />
        </span>
      </h2>
      <div className="flex justify-center items-center mt-6">
        <div className="rounded-full border-4 border-purple-500  shadow-lg shadow-purple-500/50">
          <lord-icon 
            style={{ width: "200px", height: "200px" }}
            src="https://cdn.lordicon.com/aszjakup.json"
            trigger="in"
            delay="1500"
            stroke="light"
            state="in-reveal"
            colors="primary:#1663c7,secondary:#fae6d1,tertiary:#000000"
          >
          </lord-icon>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 ml-14 mr-16 mt-8 md:mx-auto md:justify-center md:gap-20 md:flex">
        <button 
          onClick={() => setactivesection('About')} 
          className="relative inline-flex items-center justify-center w-full md:w-auto p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="w-full text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent md:w-auto">
            About
          </span>
        </button>
        
        <button 
          onClick={() => setactivesection('Skills')}  
          className="relative inline-flex items-center justify-center w-full md:w-auto p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="w-full text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent md:w-auto">
            Skills
          </span>
        </button>
        
        <button 
          onClick={() => setactivesection('Projects')}  
          className="relative inline-flex items-center justify-center w-full md:w-auto p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="w-full text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent md:w-auto">
            Projects
          </span>
        </button>
        
        <button  
          onClick={() => setactivesection('Intrests')}  
          className="relative inline-flex items-center justify-center w-full md:w-auto p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
        >
          <span className="w-full text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent md:w-auto">
            Intrests
          </span>
        </button>
      </div>

      <div className="ml-14 mr-16 md:mx-auto md:w-3/4 p-6 mb-4 mt-6 rounded-2xl bg-blue-300 border-4 border-purple-500 shadow-lg shadow-purple-500/50 flex flex-col">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{activesection}</h2>
        <p className="text-left leading-relaxed text-gray-700">{sectionContent[activesection]}</p>
      </div>

      <div className="mt-14 ">
        <h1 className="text-center font-bold text-2xl">Let's WOrk Together!</h1>
        <h2 className="mt-6 text-center">Intrested in collabrating or have a project in mind ?</h2>
         <div className=" mb-26 flex gap-4 justify-center mt-8 ">
                <Link href={"/contactme"}> <button className="bg-blue-600 flex gap-3 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors">
            Contact me <img className="w-6 h-6" src="/con.svg" alt="" />
          </button>
          </Link> 
  <button onClick={download} className="border flex gap-3 border-blue-600 text-blue-600 px-6 py-4 rounded-lg hover:bg-blue-50 transition-colors">
            My Resume <img className="w-6 h-6" src="/down.webp" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutMe;