import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 sm:py-5 mt-8 transition-colors duration-300">
      <div className="w-full max-w-[95%] mx-auto px-4 sm:px-6 relative flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-3 text-xs sm:text-base text-gray-600 dark:text-gray-300">
        
        {/* Left: Copyright */}
        <div className="font-semibold text-center sm:text-left order-2 sm:order-1">
          © 2026 Devendra Kumar. All rights reserved.
        </div>

        {/* Center: Let's Connect & Social Icons */}
        <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 flex items-center justify-center space-x-4 order-1 sm:order-2">
          <span className="font-bold text-gray-800 dark:text-white">Let's connect:</span>
          
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/darapureddy-devendra-kumar-a81a18206"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/devendra2580"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-transform hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>

          {/* Mail Icon */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=darapureddydevendra13579@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-transform hover:scale-110 cursor-pointer"
            aria-label="Email"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;