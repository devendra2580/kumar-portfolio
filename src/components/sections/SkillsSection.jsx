import React, { useState, useEffect } from 'react';

const SkillsSection = ({ setActiveTab }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      label: '10+',
      sub: 'Technologies'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.052 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      label: '1.5+',
      sub: 'Years Exp.'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-disabled" />
        </svg>
      ),
      label: 'AI',
      sub: 'Focused'
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: '100%',
      sub: 'Passion'
    }
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: (
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: 'bg-blue-50/80 dark:bg-blue-900/30 border-blue-100 dark:border-blue-800/40',
      glow: 'group-hover:shadow-blue-500/20',
      dotBg: 'bg-blue-600 dark:bg-blue-400',
      barBg: 'bg-blue-600 dark:bg-blue-500',
      gradientBar: 'group-hover:from-blue-600 group-hover:to-indigo-500',
      badgeStyle: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border-blue-100 dark:border-blue-800/50 group-hover/skill:bg-blue-600 group-hover/skill:text-white',
      hoverText: 'group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400',
      skills: [
        { name: 'Python', level: 'Core Language', barWidth: '95%' },
        { name: 'JavaScript', level: 'Proficient', barWidth: '85%' },
        { name: 'C / C++', level: 'Academic', barWidth: '75%' },
        { name: 'HTML / CSS', level: 'Proficient', barWidth: '85%' }
      ]
    },
    {
      title: 'AI / ML & NLP',
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      iconBg: 'bg-indigo-50/80 dark:bg-indigo-900/30 border-indigo-100 dark:border-indigo-800/40',
      glow: 'group-hover:shadow-indigo-500/20',
      dotBg: 'bg-indigo-600 dark:bg-indigo-400',
      barBg: 'bg-indigo-600 dark:bg-indigo-500',
      gradientBar: 'group-hover:from-indigo-600 group-hover:to-purple-500',
      badgeStyle: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800/50 group-hover/skill:bg-indigo-600 group-hover/skill:text-white',
      hoverText: 'group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400',
      skills: [
        { name: 'Machine Learning', level: 'Production Ready', barWidth: '92%' },
        { name: 'Computer Vision (YOLO)', level: 'Specialization', barWidth: '95%' },
        { name: 'Deep Learning', level: 'Model Training', barWidth: '88%' },
        { name: 'NLP & Embeddings', level: 'Vector Search', barWidth: '90%' },
        { name: 'LLMs & Prompting', level: 'Hands-on', barWidth: '82%' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: (
        <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      iconBg: 'bg-cyan-50/80 dark:bg-cyan-900/30 border-cyan-100 dark:border-cyan-800/40',
      glow: 'group-hover:shadow-cyan-500/20',
      dotBg: 'bg-cyan-600 dark:bg-cyan-400',
      barBg: 'bg-cyan-600 dark:bg-cyan-500',
      gradientBar: 'group-hover:from-cyan-600 group-hover:to-blue-500',
      badgeStyle: 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 border-cyan-100 dark:border-cyan-800/50 group-hover/skill:bg-cyan-600 group-hover/skill:text-white',
      hoverText: 'group-hover/skill:text-cyan-600 dark:group-hover/skill:text-cyan-400',
      skills: [
        { name: 'FastAPI', level: 'REST APIs', barWidth: '92%' },
        { name: 'PyTorch', level: 'Model Dev', barWidth: '88%' },
        { name: 'TensorFlow / Keras', level: 'Proficient', barWidth: '85%' },
        { name: 'OpenCV', level: 'Image Prep', barWidth: '88%' },
        { name: 'Pandas / NumPy', level: 'Data Wrangling', barWidth: '90%' }
      ]
    },
    {
      title: 'Databases',
      icon: (
        <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      iconBg: 'bg-amber-50/80 dark:bg-amber-900/30 border-amber-100 dark:border-amber-800/40',
      glow: 'group-hover:shadow-amber-500/20',
      dotBg: 'bg-amber-600 dark:bg-amber-400',
      barBg: 'bg-amber-600 dark:bg-amber-500',
      gradientBar: 'group-hover:from-amber-600 group-hover:to-orange-500',
      badgeStyle: 'bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-300 border-amber-100 dark:border-amber-800/50 group-hover/skill:bg-amber-600 group-hover/skill:text-white',
      hoverText: 'group-hover/skill:text-amber-600 dark:group-hover/skill:text-amber-400',
      skills: [
        { name: 'PostgreSQL & pgVector', level: 'Vector Indexing', barWidth: '90%' },
        { name: 'SQL', level: 'Advanced Queries', barWidth: '88%' },
        { name: 'MySQL', level: 'Relational DB', barWidth: '80%' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: (
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 00-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      iconBg: 'bg-blue-50/80 dark:bg-blue-900/30 border-blue-100 dark:border-blue-800/40',
      glow: 'group-hover:shadow-blue-500/20',
      dotBg: 'bg-blue-600 dark:bg-blue-400',
      barBg: 'bg-blue-600 dark:bg-blue-500',
      gradientBar: 'group-hover:from-blue-600 group-hover:to-cyan-500',
      badgeStyle: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border-blue-100 dark:border-blue-800/50 group-hover/skill:bg-blue-600 group-hover/skill:text-white',
      hoverText: 'group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400',
      skills: [
        { name: 'AWS (EC2, S3, IAM)', level: 'Cloud Deployed', barWidth: '88%' },
        { name: 'Git & GitHub', level: 'Version Control', barWidth: '90%' },
        { name: 'Docker', level: 'Containerization', barWidth: '78%' }
      ]
    },
    {
      title: 'Tools & Others',
      icon: (
        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2h-3a2 2 0 01-2-2V4a2 2 0 012-2h2zM4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      iconBg: 'bg-purple-50/80 dark:bg-purple-900/30 border-purple-100 dark:border-purple-800/40',
      glow: 'group-hover:shadow-purple-500/20',
      dotBg: 'bg-purple-600 dark:bg-purple-400',
      barBg: 'bg-purple-600 dark:bg-purple-500',
      gradientBar: 'group-hover:from-purple-600 group-hover:to-pink-500',
      badgeStyle: 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 border-purple-100 dark:border-purple-800/50 group-hover/skill:bg-purple-600 group-hover/skill:text-white',
      hoverText: 'group-hover/skill:text-purple-600 dark:group-hover/skill:text-purple-400',
      skills: [
        { name: 'Postman', level: 'API Testing', barWidth: '90%' },
        { name: 'Google Colab / Jupyter', level: 'GPU Compute', barWidth: '95%' },
        { name: 'Power BI / Tableau', level: 'Analytics', barWidth: '85%' },
        { name: 'VS Code', level: 'Primary IDE', barWidth: '95%' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-6 space-y-8 relative overflow-visible px-2 sm:px-4">
      {/* Dynamic Animated Ambient Spotlights */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* Breadcrumb Navigation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 relative z-10">
        <button 
          onClick={() => setActiveTab && setActiveTab('home')} 
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
        >
          Home
        </button>
        <span>›</span>
        <span className="text-blue-600 dark:text-blue-400 font-medium">Skills</span>
      </div>

      {/* Top Header & Interactive Stats Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
        
        {/* Title & Subtitle */}
        <div className="lg:col-span-7 space-y-2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            My Skills
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto lg:mx-0"></div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal pt-1 max-w-xl leading-relaxed mx-auto lg:mx-0">
            A blend of programming, AI, automation, and cloud technologies that I use to build intelligent and scalable real-world solutions.
          </p>
        </div>

        {/* Top Right Animated Dashboard */}
        <div className="lg:col-span-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-300 dark:hover:border-slate-600 transition-all duration-500 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 text-center mt-4 lg:mt-0">
          {stats.map((stat, i) => (
            <div key={i} className="group/stat space-y-1.5 px-1 cursor-default">
              <div className="flex justify-center transform group-hover/stat:scale-125 group-hover/stat:rotate-6 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white leading-none group-hover/stat:text-blue-600 dark:group-hover/stat:text-blue-400 transition-colors">
                {stat.label}
              </div>
              <div className="text-[10px] sm:text-xs font-normal text-gray-500 dark:text-gray-400">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Section Sub-Header */}
      <div className="pt-2 relative z-10 text-center lg:text-left">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          Technical Skills
        </h2>
      </div>

      {/* Animated Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            style={{
              transitionDelay: `${idx * 100}ms`
            }}
            className={`group relative overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl ${category.glow} hover:border-blue-400/50 transition-all duration-500 space-y-4 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Smooth Shimmer Light Sweep Effect */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></div>

            {/* Glowing Accent Gradient Top Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Category Header with Hover Orbit Effect */}
            <div className="flex items-center space-x-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
              <div className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-xs ${category.iconBg}`}>
                {category.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {category.title}
              </h3>
            </div>

            {/* Skill Rows with Matching Point Colors & Animations */}
            <div className="space-y-3.5 pt-1">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5 group/skill cursor-default">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      {/* Matching Point Color Dot */}
                      <span className={`w-1.5 h-1.5 rounded-full ${category.dotBg} group-hover/skill:scale-150 transition-transform`}></span>
                      <span className={`text-gray-800 dark:text-gray-200 font-medium ${category.hoverText} transition-colors`}>
                        {skill.name}
                      </span>
                    </div>

                    {/* Matching Level Badge */}
                    <span className={`text-[10px] font-medium px-2 py-0.5 rounded border transition-all duration-200 ${category.badgeStyle}`}>
                      {skill.level}
                    </span>
                  </div>

                  {/* Matching Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700/80 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${category.barBg} rounded-full transition-all duration-1000 ease-out group-hover:${category.gradientBar} group-hover:shadow-md`}
                      style={{ width: mounted ? skill.barWidth : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;