"use client"

import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(20)

  useEffect(() => {
    // Simulate loading time with progress
    const duration = 1500; // 1.5 seconds
    const interval = 30; // Update every 30ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsLoading(false);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">

      
        <div className="text-4xl font-bold relative">
          <span className="text-black">Krischal</span>
          <span className="text-blue-600">.dev</span>
          <div className="mt-2 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
              style={{width: `${progress}%`}}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return(
    <>
    <Navbar />
    <Hero />
    </>

  ) 
}

export default HomePage