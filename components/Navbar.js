"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between h-16 px-4 relative items-center">
      <div className="flex items-center gap-2 font-bold text-lg">
        <Link href={'/'} className="flex items-center">
        <lord-icon 
          src="https://cdn.lordicon.com/vrexohmd.json"
          trigger="loop"
          state="in-reveal"
          style={{ width: '60px', height: '60px' }}
        />
        <h1 className="text-3xl text-violet-600">Asim...</h1>
        </Link>
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

        <button  onClick={() => setIsOpen(!isOpen)}>
          <img src="/ham.webp" alt="menu" className="w-6 h-6" />
        </button>
      </div>

<ul
  className={`
    ${isOpen ? 'flex' : 'hidden'} 
    md:flex 
    flex-col md:flex-row 
    absolute md:static 
    top-16 md:top-auto 
    right-4 md:right-auto 
    w-48 md:w-auto 
    bg-white md:bg-transparent 
    shadow-lg md:shadow-none 
    items-start md:items-center 
    gap-2 md:gap-14 
    text-base 
    font-medium 
    p-3 md:p-0 
    rounded-4xl border md:border-none 
    z-50
  `}
>

        <li>
          <Link href={"/"} onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors md:text-2xl  font-ovo">Home</Link>
        </li>
        <li>
          <Link href={"/aboutme"} onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors md:text-2xl  font-ovo">About me</Link>
        </li>
        <li>
          <Link href={"/contact"} onClick={() => setIsOpen(false)} className="hover:text-blue-600 transition-colors md:text-2xl  font-ovo">Contact me</Link>
        </li>
      </ul>

      <div className="hidden   md:flex bg-green-500 px-4 py-2 rounded-full ring-amber-50">
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
