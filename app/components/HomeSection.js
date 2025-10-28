"use client"
import React from 'react'
import Image from "next/image"

const HomeSection = () => {
  const download = () => {
    const link = document.createElement('a');
    link.href = '/Asim Cv.pdf';
    link.download = 'Asim_Khatri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }

  return (
    <section id="home" className="min-h-screen flex justify-center flex-col items-center py-8 max-w-4xl mx-auto px-4">
      {/* Updated circle container with responsive sizing */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-gray-300 overflow-hidden mb-6 cursor-pointer hover:border-blue-500 transition-colors">
        <button 
          onClick={() => scrollToSection('about')}
          className="w-full h-full relative"
        >
          <Image
            src="/asim.jpg"
            alt="Asim Khatri"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            priority
          />
        </button>
      </div>
      
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Hi I&apos;m Asim Khatri</h1>
        <h2 className="text-lg sm:text-xl text-blue-600 font-semibold">Frontend Web Developer</h2>
        
        <p className="text-gray-600 text-base sm:text-lg md:text-xl mx-4 sm:mx-8 md:max-w-2xl leading-relaxed">
          I am a frontend developer currently studying at Janamaitri College (7th Sem).
          I have some experience and basic knowledge in Express.js, Next.js, MongoDB,
          Node.js, and more knowledge with JavaScript, React, and Tailwind CSS.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 px-4">
          <button 
            onClick={() => scrollToSection('contact')} 
            className="bg-blue-600 flex gap-3 items-center justify-center text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact me 
            <Image src="/con.svg" alt="" width={24} height={24} />
          </button>
          
          <button 
            onClick={download} 
            className="border flex gap-3 items-center justify-center border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            My Resume 
            <Image src="/down.webp" alt="" width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeSection