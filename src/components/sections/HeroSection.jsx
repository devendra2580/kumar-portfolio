import React from 'react';
import profileImg from '../../assets/profile.png';
import resume from '../../assets/DARAPUREDDY_DEVENDRA_KUMAR.pdf';

const HeroSection = () => {
  return (
    <section id="home" className="py-8 space-y-12 relative overflow-hidden">
      {/* Background Soft Glow Spotlights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Main Section: Headline, Profile & Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline, Bio & Action Buttons */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Greeting Pill Badge with Pulsing Green Dot */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-blue-200/80 dark:border-slate-700/80 shadow-xs text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide transform hover:scale-105 transition-transform cursor-pointer">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span>👋 Welcome to my portfolio</span>
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1]">
              Darapureddy <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Devendra Kumar
              </span>
            </h1>
            <p className="text-blue-600 dark:text-blue-400 font-bold text-base sm:text-lg tracking-wide pt-1">
              AI Developer | Python Developer | Automation Enthusiast
            </p>
          </div>

          {/* Intro Description */}
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm sm:text-base max-w-xl font-medium">
            I build intelligent automation and AI-driven solutions using Python, FastAPI, NLP, LLMs, and modern cloud technologies. Passionate about solving real-world problems and creating high-impact products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="relative group overflow-hidden inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-sm rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out"></div>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Work
            </a>

            <a
              href={resume}
              download
              className="inline-flex items-center px-6 py-3 bg-white/90 dark:bg-slate-800/90 text-blue-600 dark:text-blue-400 border-2 border-blue-600/30 dark:border-blue-400/40 font-bold text-sm rounded-2xl hover:bg-blue-50 dark:hover:bg-slate-700/80 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <svg className="w-4 h-4 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 pt-4 w-full max-w-2xl">
            
            {/* Metric 1 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-gray-900 dark:text-white leading-none">1.5+</h3>
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1">Years Exp</p>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-indigo-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-gray-900 dark:text-white leading-none">10+</h3>
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1">Projects</p>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-cyan-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 01-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-gray-900 dark:text-white leading-none">8+</h3>
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1">Tech Stack</p>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-amber-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group justify-center sm:justify-start">
              <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs flex-shrink-0 group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-gray-900 dark:text-white leading-none">100%</h3>
                <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1">Dedication</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Profile Visual & Clean Contact List */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center mt-8 lg:mt-0">
          
          {/* Animated Float Container */}
          <div className="relative group my-4 flex items-center justify-center cursor-pointer animate-float-hero">
            
            {/* Outer Orbit Rings */}
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-dashed border-blue-400/60 dark:border-blue-500/50 animate-spin-cw"></div>
            <div className="absolute w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-dotted border-cyan-400/70 dark:border-cyan-400/60 animate-spin-ccw"></div>

            {/* Rotating Tech Particles */}
            <div className="absolute w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full animate-spin-cw pointer-events-none">
              <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.9)] absolute top-0 left-1/2 -translate-x-1/2"></div>
            </div>
            <div className="absolute w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full animate-spin-ccw pointer-events-none">
              <div className="w-3.5 h-3.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)] absolute bottom-0 left-1/2 -translate-x-1/2"></div>
            </div>

            {/* Breathing Multi-Color Gradient Halo */}
            <div className="absolute w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 animate-aura-glow group-hover:scale-110 transition-transform duration-500"></div>

            {/* Main Avatar Container */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-white dark:bg-slate-800 p-1.5 overflow-hidden shadow-2xl z-10 border-4 border-white dark:border-slate-800 group-hover:ring-4 group-hover:ring-blue-400/60 transition-all duration-500">
              <img
                src={profileImg}
                alt="Darapureddy Devendra Kumar"
                className="w-full h-full object-cover rounded-full group-hover:scale-108 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Floating Top Left Badge */}
            <div className="absolute -top-2 -left-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 shadow-lg flex items-center space-x-2 z-20 animate-badge-float-1 group-hover:-translate-y-1 transition-transform">
              <span className="text-sm">🤖</span>
              <span className="text-xs font-extrabold text-gray-800 dark:text-gray-200">AI / Python</span>
            </div>

            {/* Floating Bottom Right Badge */}
            <div className="absolute -bottom-2 -right-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 shadow-lg flex items-center space-x-2 z-20 animate-badge-float-2 group-hover:translate-y-1 transition-transform">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-extrabold text-gray-800 dark:text-gray-200">Available to work</span>
            </div>

          </div>

          {/* Clean Contact Info List */}
          <div className="w-full max-w-xs space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-8 font-medium">
            <div className="flex items-center justify-center lg:justify-start space-x-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/item">
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-2xs group-hover/item:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>+91 8341695598</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/item">
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-2xs group-hover/item:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="truncate">darapureddydevendra13579@gmail.com</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/item">
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-2xs group-hover/item:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span>Hyderabad, India</span>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-3 group/item">
              <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-2xs group-hover/item:scale-110 transition-transform">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <a 
                href="www.linkedin.com/in/darapureddy-devendra-kumar-a81a18206" 
                target="_blank" 
                rel="noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:underline font-bold"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Navigation Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12 relative z-10">
        
        {/* About Card */}
        <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5">About Me</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
            AI Developer with 1.5+ year of experience in automation, NLP, and LLM integration.
          </p>
          <a href="#about" className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center group-hover:translate-x-1.5 transition-transform">
            Read More <span className="ml-1">→</span>
          </a>
        </div>

        {/* Skills Card */}
        <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-400/50 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5">Skills</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
            Python, FastAPI, NLP, LLMs, AWS, PostgreSQL, Git, and more.
          </p>
          <a href="#skills" className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center group-hover:translate-x-1.5 transition-transform">
            Explore Skills <span className="ml-1">→</span>
          </a>
        </div>

        {/* Projects Card */}
        <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5">Projects</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
            Real-world AI & automation projects built with modern technologies.
          </p>
          <a href="#projects" className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center group-hover:translate-x-1.5 transition-transform">
            View Projects <span className="ml-1">→</span>
          </a>
        </div>

        {/* Experience Card */}
        <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-400/50 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5">Experience</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
            Associate Python Developer at Infologitech and Business Analyst Intern at Outlook.
          </p>
          <a href="#experience" className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center group-hover:translate-x-1.5 transition-transform">
            View Experience <span className="ml-1">→</span>
          </a>
        </div>

        {/* Certifications Card */}
        <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-amber-400/50 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5">Certifications</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
            IEEE SSL/TLS, Tech Triumph 1.0 Hackathon, and more.
          </p>
          <a href="#certificates" className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center group-hover:translate-x-1.5 transition-transform">
            View Certificates <span className="ml-1">→</span>
          </a>
        </div>

        {/* Resume Card */}
        <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-rose-400/50 transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5">Resume</h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed font-medium">
            Download my resume and explore my professional journey.
          </p>
          <a href={resume} download className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center group-hover:translate-x-1.5 transition-transform">
            Download Resume <span className="ml-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;