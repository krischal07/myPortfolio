"use client"

import { Earth } from 'lucide-react'
import React, { useState } from 'react'
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400"],
  });
  
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${montserrat.className} fixed top-4 left-0 right-0 z-50 dark-bg grey-shadow rounded-full p-2 md:w-[500px] mx-auto`}>
      <div className="nav-container md:centered-container">
        <div className="flex justify-between items-center  h-12">
          <div className="flex items-center ">
            <div className="circular-logo mr-2">
              <div className="text-xl font-bold text-gray-800">
                <Earth className="w-6 h-6" />
              </div>
            </div>
            {/* <span className="text-white font-bold text-lg md:text-xl">Kris</span> */}
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-primary transition-colors duration-300 p-2"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            
            <div className={`md:flex space-x-4 ${isOpen ? 'mobile-nav' : 'hidden'} md:space-x-4 items-center` }>
              <a 
                href="#about" 
                className="nav-link text-white hover:text-primary transition-colors duration-300 font-bold"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="nav-link text-white hover:text-primary transition-colors duration-300 font-bold"
              >
                Projects
              </a> 
              <a 
                href="#projects" 
                className="nav-link text-white hover:text-primary transition-colors duration-300 font-bold"
              >
                <button className='btn btn-primary'>

                You are?
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar