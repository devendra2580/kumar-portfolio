import React from 'react';
import profileImg from '../../assets/profile.png';

const AboutSection = ({ setActiveTab }) => {
  // Official Brand Logos Array with Dark Mode Visibility Adjustments
  const techStack = [
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      glowColor: 'hover:border-blue-400 hover:shadow-blue-500/20',
      badgeBg: 'bg-blue-500/5 group-hover:bg-blue-500/10',
    },
    {
      name: 'FastAPI',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      glowColor: 'hover:border-emerald-400 hover:shadow-emerald-500/20',
      badgeBg: 'bg-emerald-500/5 group-hover:bg-emerald-500/10',
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      glowColor: 'hover:border-blue-500 hover:shadow-blue-600/20',
      badgeBg: 'bg-blue-600/5 group-hover:bg-blue-600/10',
    },
    {
      name: 'AWS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      glowColor: 'hover:border-amber-400 hover:shadow-amber-500/20',
      badgeBg: 'bg-amber-500/5 group-hover:bg-amber-500/10',
      darkModeStyle: 'dark:brightness-200 dark:contrast-200', // Ensures black AWS text turns white/bright in dark mode
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      glowColor: 'hover:border-sky-400 hover:shadow-sky-500/20',
      badgeBg: 'bg-sky-500/5 group-hover:bg-sky-500/10',
    },
    {
      name: 'Git',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      glowColor: 'hover:border-orange-500 hover:shadow-orange-500/20',
      badgeBg: 'bg-orange-500/5 group-hover:bg-orange-500/10',
    },
    {
      name: 'Pandas',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      glowColor: 'hover:border-indigo-500 hover:shadow-indigo-500/20',
      badgeBg: 'bg-indigo-500/5 group-hover:bg-indigo-500/10',
      darkModeStyle: 'dark:brightness-200 dark:contrast-150', // Brightens dark Pandas bars
    },
    {
      name: 'LLMs / AI',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
      glowColor: 'hover:border-purple-500 hover:shadow-purple-500/20',
      badgeBg: 'bg-purple-500/5 group-hover:bg-purple-500/10',
    },
    {
      name: 'Power BI',
      logo: 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg',
      glowColor: 'hover:border-yellow-400 hover:shadow-yellow-500/20',
      badgeBg: 'bg-yellow-500/5 group-hover:bg-yellow-500/10',
    },
    {
      name: 'Tableau',
      isCustomSvg: true,
      glowColor: 'hover:border-cyan-400 hover:shadow-cyan-500/20',
      badgeBg: 'bg-cyan-500/5 group-hover:bg-cyan-500/10',
    },
  ];

  return (
    <section id="about" className="py-6 space-y-8 relative overflow-visible px-2 sm:px-4">
      {/* Background Soft Glow Spotlights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 relative z-10">
        <button 
          onClick={() => setActiveTab && setActiveTab('home')} 
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>›</span>
        <span className="text-blue-600 dark:text-blue-400 font-medium">About Me</span>
      </div>

      {/* Main Section Header */}
      <div className="space-y-2 relative z-10 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
          About Me
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto lg:mx-0"></div>
      </div>

      {/* Main Content Layout */}
      <div className="space-y-10 relative z-10">
        
        {/* Top Bio Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          
          {/* Left Side: Bio Paragraphs */}
          <div className="lg:col-span-7 space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg tracking-wide">
              AI Developer | Python Developer | Automation Enthusiast
            </p>

            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm sm:text-base font-normal">
              I am an AI Developer with 1.5+ year of experience building intelligent automation solutions and NLP-driven applications using Python, FastAPI, and modern AI frameworks. I enjoy turning complex problems into simple, efficient, and scalable solutions.
            </p>

            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm sm:text-base font-normal">
              My passion lies in AI automation, backend development, and creating real-world products that make a difference.
            </p>
          </div>

          {/* Right Side: Shifted Upward Orbit Profile Photo Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-start mt-8 lg:mt-0 lg:-mt-24">
            
            <div className="relative group flex items-center justify-center cursor-pointer animate-float-hero">
              
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

              {/* Breathing Halo Aura */}
              <div className="absolute w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 animate-aura-glow group-hover:scale-110 transition-transform duration-500"></div>

              {/* Avatar Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-white dark:bg-slate-800 p-1.5 overflow-hidden shadow-2xl z-10 border-4 border-white dark:border-slate-800 group-hover:ring-4 group-hover:ring-blue-400/60 transition-all duration-500">
                <img
                  src={profileImg}
                  alt="Darapureddy Devendra Kumar"
                  className="w-full h-full object-cover rounded-full group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-2 -left-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 shadow-lg flex items-center space-x-2 z-20 animate-badge-float-1 group-hover:-translate-y-1 transition-transform">
                <span className="text-sm">🤖</span>
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">AI / Python</span>
              </div>

              <div className="absolute -bottom-2 -right-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 shadow-lg flex items-center space-x-2 z-20 animate-badge-float-2 group-hover:translate-y-1 transition-transform">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">Available to work</span>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Info Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full">
          
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-blue-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group justify-center sm:justify-start">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-none">1.5+</h3>
              <p className="text-[10px] font-normal text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1">Years Experience</p>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-indigo-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group justify-center sm:justify-start">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.052 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-none">B.Tech</h3>
              <p className="text-[10px] font-normal text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1">CSE (2020-2024)</p>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-cyan-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group justify-center sm:justify-start">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-none">Hyderabad</h3>
              <p className="text-[10px] font-normal text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1">India</p>
            </div>
          </div>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:border-amber-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 group justify-center sm:justify-start">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-none">English</h3>
              <p className="text-[10px] font-normal text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1">Professional</p>
            </div>
          </div>

        </div>

        {/* What I Do Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center lg:text-left">What I Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">AI & Automation</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                Building intelligent automation workflows and AI-powered applications using LLMs, NLP, and embeddings.
              </p>
            </div>

            <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Backend Development</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                Developing scalable APIs and backend systems using Python, FastAPI, and modern best practices.
              </p>
            </div>

            <div className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-400/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-500 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 00-2-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">Data & Insights</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                Analyzing data and creating meaningful insights using Power BI, Tableau, and analytical tools.
              </p>
            </div>

          </div>
        </div>

        {/* High-Contrast Single-Line Tech Stack Row */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center lg:text-left">Tech Stack I Work With</h2>

          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-5 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-xs grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`relative overflow-hidden flex flex-col items-center justify-center p-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-700/80 ${tech.glowColor} ${tech.badgeBg} hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer`}
              >
                {/* Bounded Shimmer Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></div>

                {/* High-Contrast Icon Wrapper with subtle dark-mode backdrop boost */}
                <div className="w-7 h-7 mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ease-out p-0.5 rounded-lg bg-transparent dark:bg-slate-800/50">
                  {tech.isCustomSvg ? (
                    <svg className="w-6 h-6 filter drop-shadow-xs" viewBox="0 0 24 24">
                      <path fill="#EB5424" d="M11.23 1.05h1.54v2.75h-1.54zM11.23 20.2h1.54v2.75h-1.54z" />
                      <path fill="#2D6095" d="M1.05 11.23h2.75v1.54H1.05zM20.2 11.23h2.75v1.54H20.2z" />
                      <path fill="#EB5424" d="M11.23 7.88h1.54v8.24h-1.54z" />
                      <path fill="#2D6095" d="M7.88 11.23h8.24v1.54H7.88z" />
                      <path fill="#E8762D" d="M5.52 5.52h1.54v3.12H5.52zM16.94 5.52h1.54v3.12h-1.54zM5.52 15.36h1.54v3.12H5.52zM16.94 15.36h1.54v3.12h-1.54z" />
                      <path fill="#3979AA" d="M5.52 5.52h3.12v1.54H5.52zM5.52 16.94h3.12v1.54H5.52zM15.36 5.52h3.12v1.54h-3.12zM15.36 16.94h3.12v1.54h-3.12z" />
                    </svg>
                  ) : (
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className={`w-full h-full object-contain filter drop-shadow-xs ${tech.darkModeStyle || ''}`}
                      loading="lazy"
                    />
                  )}
                </div>

                {/* Tech Label */}
                <span className="text-[11px] font-medium text-gray-800 dark:text-gray-200 text-center leading-tight tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;