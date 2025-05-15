import React from 'react'
import { Monoton } from 'next/font/google'
import { Code, Brain, Sparkles, MapPinPlusIcon } from 'lucide-react'
import Lanyard from '@/Lanyard/Lanyard';
const monoton = Monoton({
    subsets: ["latin"],
    weight: ["400"],
  });
const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
        
      <div className="max-w-4xl w-full right-90 ">
        <div className="text-center mb-12">
          <h1 
            className={`${monoton.className} text-5xl md:text-7xl lg:text-9xl font-bold text-white relative mb-4`}
            style={{
              background: 'linear-gradient(45deg, #4F46E5, #6366F1, #818CF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <span className="block">Krischal </span>
            <span className="block">Shrestha </span>
          </h1>
          {/* <div className="absolute top-60 left-1/2 -translate-x-1/2 -mt-24 z-10">
            <img 
              src="/krischal.jpg" 
              alt="Krischal Shrestha" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover"
            />
          </div> */}
          <div className="flex justify-center gap-4 text-xl text-gray-300">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              <span>Software Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPinPlusIcon className="w-5 h-5" />
              <span>Kathmandu</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>Creator</span>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg md:w-[450px] md:mx-auto" style={{
              opacity: 0.1,
              filter: 'blur(20px)'
            }} />
            <div className="relative p-6 bg-black/80 border border-blue-500/20 rounded-lg backdrop-blur-sm md:backdrop-blur-md lg:backdrop-blur-lg shadow-md">
              <p className="font-mono text-lg text-blue-300 mb-2">
                <span className="text-blue-400">function</span> <span className="text-indigo-400">introduce</span>() {"{"}
              </p>
              <p className="font-mono text-lg ml-4 text-gray-400">
                return <span className="text-green-400">"Turning ideas into reality 🚀"</span>;
              </p>
              <p className="font-mono text-lg text-blue-300">
                {"}"}
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 font-semibold"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-300 font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      {/* <div className='hidden md:block relative z-1 border-2 border-red-500 w-full'> */}
        {/* </div> */}

    </section>
  )
}

export default Hero
