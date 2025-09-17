// app/components/Navbar.jsx
"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      flex items-center justify-between h-16 px-4 
      transition-all duration-300 ease-in-out
      ${isScrolled 
        ? 'backdrop-blur-md' 
        : 'bg-transparent'
      }
    `}>
      <div className="flex items-center gap-2 font-bold text-lg">
        <button onClick={() => scrollToSection('home')} className="flex items-center">
          <lord-icon
            src="https://cdn.lordicon.com/vrexohmd.json"
            trigger="loop"
            state="in-reveal"
            style={{ width: '60px', height: '60px' }}
          />
          <h1 className="text-3xl text-violet-600">Asim...</h1>
        </button>
      </div>

      <div className="flex items-center gap-3 md:hidden absolute right-4">
        <div className="bg-green-500 px-3 py-1 rounded-full ring-amber-50">
          <Link
            href="https://github.com/khatriasim?tab=repositories"
            className="flex items-center gap-1 text-white text-sm"
          >
            <img src="/git.webp" alt="GitHub" className="w-5 h-5 invert" />
            <span>GitHub</span>
          </Link>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src="/ham.webp" alt="menu" className="w-6 h-6" />
        </button>
      </div>

      <ul className={`
        ${isOpen ? 'flex' : 'hidden'} 
        md:flex 
        flex-col md:flex-row 
        absolute md:static 
        top-16 md:top-auto 
        right-4 md:right-auto 
        w-48 md:w-auto 
        bg-white backdrop-blur-md md:bg-transparent md:backdrop-blur-none
        ${isScrolled 
          ? '' 
          : 'md:bg-transparent'
        }
        shadow-lg md:shadow-none 
        items-start md:items-center 
        gap-2 md:gap-14 
        text-base 
        font-medium 
        p-3 md:p-0 
        rounded-lg border md:border-none 
        z-50
        transition-all duration-300
      `}>
        <li>
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-blue-600 transition-colors md:text-2xl font-ovo"
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-blue-600 transition-colors md:text-2xl font-ovo"
          >
            About
          </button>
        </li>
        <li>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-blue-600 transition-colors md:text-2xl font-ovo"
          >
            Contact
          </button>
        </li>
      </ul>

      <div className="hidden md:flex bg-green-500 px-4 py-2 rounded-full ring-amber-50">
        <Link
          href="https://github.com/khatriasim?tab=repositories"
          className="flex items-center gap-2 text-white"
        >
          <img src="/git.webp" alt="GitHub" className="w-6 h-6 invert" />
          <span>GitHub</span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar