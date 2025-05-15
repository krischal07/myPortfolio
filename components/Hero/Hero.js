import React from 'react'

const Hero = () => {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 
            className="text-5xl md:text-8xl font-bold text-white mb-4 relative"
            style={{
              background: 'linear-gradient(45deg, #4F46E5, #6366F1, #818CF8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <span className="block">Krischal Shrestha</span>
            <span className="block">Ideas into</span>
            <span className="block">Reality</span>
          </h1>
          <p className="text-xl text-gray-300">
            Full Stack Developer | Problem Solver | Creator
          </p>
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
    </section>
  )
}

export default Hero
