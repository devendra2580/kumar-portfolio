import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import resumeFile from '../../assets/DARAPUREDDY_DEVENDRA_KUMAR.pdf';

const Navbar = ({ activeTab, setActiveTab }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track window scroll percentage for the progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { id: 'about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { id: 'experience', label: 'Experience', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { id: 'projects', label: 'Projects', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { id: 'skills', label: 'Skills', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { id: 'certificates', label: 'Certificates', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { id: 'contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
  ];

  // Helper to handle closing the menu when clicking a link on mobile
  const handleTabClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300 relative">
      
      {/* Outer wrapper keeping equal left/right padding */}
      <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Logo Section */}
        <div 
          onClick={() => handleTabClick('home')} 
          className="flex items-center space-x-3 cursor-pointer z-50"
        >
          <span className="text-blue-600 dark:text-blue-400 font-bold text-2xl sm:text-3xl tracking-tight">DK</span>
          <span className="text-gray-900 dark:text-white font-bold text-lg sm:text-xl">Devendra Kumar</span>
        </div>

        {/* Dynamic View Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8 text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-1.5 pb-1 border-b-2 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 font-semibold'
                    : 'border-transparent hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <svg className="w-4 h-4 min-w-[16px] min-h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Actions Container */}
        <div className="flex items-center space-x-3 sm:space-x-4 z-50">
          
          {/* Download Resume Button with Bouncing Icon (Desktop) */}
          <a
            href={resumeFile}
            download="Devendra_Kumar_Resume.pdf"
            className="group hidden lg:inline-flex items-center space-x-2 px-6 py-2.5 rounded-2xl border-2 border-blue-300 dark:border-blue-500/60 bg-blue-50/40 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100/60 dark:hover:bg-blue-900/40 text-sm font-bold transition-all duration-300 cursor-pointer shadow-xs hover:scale-105 active:scale-95"
          >
            <svg 
              className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Resume</span>
          </a>

          {/* High-Contrast, Vivid Animated Dark/Light Toggle */}
          <button 
            onClick={toggleDarkMode} 
            className="relative p-0.5 focus:outline-none cursor-pointer group"
            aria-label="Toggle dark mode"
          >
            {/* Subtle Soft Glow */}
            <div className={`absolute -inset-1 rounded-full blur-sm transition-opacity duration-300 ${
              darkMode 
                ? 'bg-blue-500/30 opacity-70 group-hover:opacity-100' 
                : 'bg-amber-400/30 opacity-70 group-hover:opacity-100'
            }`}></div>

            {/* Main Pill Track Background */}
            <div className={`relative w-14 sm:w-16 h-7 sm:h-8 rounded-full p-1 border transition-colors duration-300 flex items-center justify-between shadow-inner ${
              darkMode 
                ? 'bg-slate-900 border-slate-700' 
                : 'bg-slate-800 border-slate-700'
            }`}>
              
              {/* Sun Icon (Left Side) */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-amber-400 z-0">
                <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${darkMode ? 'scale-75 opacity-50' : 'scale-100 opacity-100 animate-spin-cw'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Moon Icon (Right Side) */}
              <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-cyan-300 z-0">
                <svg className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ${darkMode ? 'scale-100 opacity-100' : 'scale-75 opacity-50'}`} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              </div>

              {/* Sliding Circular Thumb */}
              <div className={`absolute left-0.5 top-0.5 sm:left-1 sm:top-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-lg transform transition-transform duration-300 ease-in-out flex items-center justify-center z-10 ${
                darkMode 
                  ? 'translate-x-7 sm:translate-x-8 bg-blue-600 text-white' 
                  : 'translate-x-0 bg-white text-amber-500'
              }`}>
                {darkMode ? (
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-white" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                ) : (
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-amber-500" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>

            </div>
          </button>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 shadow-xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
      >
        <div className="flex flex-col space-y-2 px-4 sm:px-6">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors w-full text-left ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400 font-medium'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span>{item.label}</span>
              </button>
            );
          })}
          
          {/* Mobile Download Resume Button */}
          <a
            href={resumeFile}
            download="Devendra_Kumar_Resume.pdf"
            className="flex items-center justify-center space-x-2 px-4 py-3 mt-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors w-full shadow-md active:scale-95"
          >
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Download Resume</span>
          </a>
        </div>
      </div>

      {/* Scroll Progress Bar at the Bottom Edge of Navbar */}
      <div 
        className="absolute bottom-0 left-0 h-1 bg-blue-600 dark:bg-blue-400 transition-all duration-150 ease-out z-50"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
};

export default Navbar;