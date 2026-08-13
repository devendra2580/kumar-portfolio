import React from 'react';
import infologitechLogo from '../../assets/Infologitech.png';

const ExperienceSection = ({ setActiveTab }) => {
  const experiences = [
    {
      id: 1,
      role: 'Associate Python Developer',
      company: 'Infologitech',
      period: 'Nov 2024 - Present',
      location: 'Hyderabad, India',
      isCurrent: true,
      skills: ['Python', 'FastAPI', 'NLP', 'OAuth', 'Automation', 'Postman'],
      icon: (
        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      logo: (
        <img 
          src={infologitechLogo} 
          alt="Infologitech" 
          className="h-6 sm:h-7 w-auto object-contain"
        />
      ),
      points: [
        'Developed LinkedIn workflow automation with OAuth authentication, automated posting, and image uploading.',
        'Built a Resume Scoring System using FastAPI, NLP, embeddings and structured scoring logic.',
        'Implemented GitHub automation for repo creation, project upload, and secure token-based operations.',
        'Performed Postman API testing for validating request flows and automation reliability.',
        'Improved backend architecture by implementing better error handling, validation, and modular structure.',
        'Worked on multi-vendor automation workflows with secure token management.'
      ]
    },
    {
      id: 2,
      role: 'Business Analyst Intern',
      company: 'Outlook Publishing India Pvt. Ltd.',
      period: 'Apr 2024 - Jul 2024',
      location: 'Remote',
      isCurrent: false,
      skills: ['Market Research', 'Power BI', 'Tableau', 'Excel', 'Data Analysis'],
      icon: (
        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      logo: (
        <div className="flex flex-col">
          <span className="text-red-600 font-serif font-bold text-lg leading-none">Outlook</span>
          <span className="text-[9px] text-gray-500 dark:text-gray-400 font-sans tracking-tight">Publishing (India) Pvt. Ltd.</span>
        </div>
      ),
      points: [
        'Conducted detailed market research and competitive analysis to support business strategy and content planning.',
        'Created dashboards and visual analytical reports using Power BI, Tableau, and Excel to support decision-making.',
        'Worked on data cleaning, formatting, and insights extraction for editorial and marketing teams.',
        'Documented workflows, produced requirement specifications, and participated in stakeholder discussions to refine business needs.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-6 space-y-8 relative overflow-visible px-2 sm:px-4">
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
        <span className="text-blue-600 dark:text-blue-400 font-medium">Experience</span>
      </div>

      {/* Header with Gradient Accent Line */}
      <div className="space-y-2 relative z-10 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
          My Experience
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto lg:mx-0"></div>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal pt-1">
          My professional journey so far – roles, responsibilities and the impact I created.
        </p>
      </div>

      {/* Main Experience Timeline Container */}
      <div className="relative space-y-10 z-10 overflow-visible pt-4">
        
        {/* Continuous Center-Aligned Vertical Line */}
        <div className="absolute left-[15px] top-6 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-400 to-indigo-600 rounded-full z-0"></div>

        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col md:grid md:grid-cols-12 md:gap-6 items-start relative group overflow-visible">
            
            {/* Left Column: Timeline Icon Pin & Details */}
            <div className="absolute left-0 top-0 md:relative md:col-span-3 flex items-start space-x-4 pt-1">
              {/* Circular Glowing Pin Node */}
              <div className="relative w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-blue-400 dark:border-blue-500 flex items-center justify-center shadow-md z-10 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 overflow-visible">
                {exp.isCurrent && (
                  <span className="animate-ping absolute inset-0 -m-1 rounded-full bg-blue-400/60 pointer-events-none"></span>
                )}
                {exp.icon}
              </div>

              {/* Date & Location Label (Hidden on Mobile) */}
              <div className="hidden md:block space-y-0.5 mt-1">
                <h4 className="text-xs lg:text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {exp.period}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                  📍 {exp.location}
                </p>
              </div>
            </div>

            {/* Right Column: Experience Card */}
            <div className="w-full pl-14 md:pl-0 md:col-span-9 relative overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-5 sm:p-6 lg:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300 space-y-4">
              
              {/* Mid-Lighter Hover Shimmer Reflection Pass */}
              <div className="absolute inset-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12 -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-1000 ease-out pointer-events-none"></div>

              {/* Accent Top Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card Top Row: Logo, Title & Date Badge */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-700/60">
                
                <div className="flex items-center space-x-3 sm:space-x-4">
                  {/* Company Logo Container */}
                  <div className="flex-shrink-0 p-2 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700/60 shadow-sm flex items-center justify-center">
                    {exp.logo}
                  </div>

                  {/* Role & Company Name */}
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>

                {/* Date & Location Badge (Mobile Only - Hidden on Desktop) */}
                <div className="md:hidden flex flex-col sm:items-end space-y-1 mt-2 sm:mt-0">
                  <span className="inline-block bg-blue-50 dark:bg-slate-700/70 text-blue-600 dark:text-blue-300 text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full border border-blue-100 dark:border-slate-600/60 shadow-sm">
                    📅 {exp.period}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-normal inline-block ml-1 sm:ml-0">
                    📍 {exp.location}
                  </span>
                </div>

              </div>

              {/* Tech Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 sm:px-3 py-1 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs font-semibold border border-blue-200/50 dark:border-blue-500/30 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-colors duration-200 cursor-default"
                  >
                    #{skill}
                  </span>
                ))}
              </div>

              {/* Vector Checkmark Responsibilities List */}
              <ul className="space-y-3 text-xs sm:text-sm text-gray-800 dark:text-gray-200 font-normal pt-2">
                {exp.points.map((pt, i) => (
                  <li key={i} className="flex items-start space-x-2.5 group/item">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-50 dark:bg-slate-700/80 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/item:scale-110 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-200">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="leading-relaxed text-gray-700 dark:text-gray-300">{pt}</span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
        ))}

      </div>

      {/* Bottom Summary Banner */}
      <div className="mt-8 relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50/50 dark:from-slate-800/90 dark:to-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 shadow-sm">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 00-2-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
          <strong className="text-blue-600 dark:text-blue-400 font-bold">1+ years</strong> of hands-on experience delivering automation workflows, REST APIs, and data analytics solutions.
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;