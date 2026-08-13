import React, { useState, useEffect } from 'react';

// 1. Import your local certificate images and PDFs from the assets folder
import ieeeCertImg from '../../assets/ieee-cert.png'; 
import ieeeCertPdf from '../../assets/ieee-cert.pdf';

import hackathonCertImg from '../../assets/hackathon-cert.png';
import hackathonCertPdf from '../../assets/hackathon-cert.pdf';

import mlCertImg from '../../assets/ml-cert.png';
import mlCertPdf from '../../assets/ml-cert.pdf';

import outlookCertImg from '../../assets/outlook-cert.png';
import outlookCertPdf from '../../assets/outlook-cert.pdf';

const CertificatesSection = ({ setActiveTab }) => {
  const [mounted, setMounted] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      icon: (
        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      label: '4+',
      sub: 'Certifications'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      label: 'IEEE',
      sub: 'Verified'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Outlook',
      sub: 'Industry Cert'
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: '100%',
      sub: 'Authentic'
    }
  ];

  // 2. Updated array using your imported local assets
  const certificates = [
    {
      id: 1,
      title: 'IEEE SSL/TLS Technical Workshop',
      issuer: 'IEEE Student Branch',
      date: '2023',
      category: 'Cybersecurity & Web Protocols',
      badgeStyle: 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border-blue-100 dark:border-blue-800/50',
      dotBg: 'bg-blue-600 dark:bg-blue-400',
      iconBg: 'bg-blue-50/80 dark:bg-blue-900/30 border-blue-100 dark:border-blue-800/40',
      description: 'Comprehensive technical training on Secure Sockets Layer (SSL) and Transport Layer Security (TLS) cryptographic protocols, public key infrastructure, and secure network encryption.',
      skills: ['SSL/TLS', 'Cryptography', 'Network Security', 'Public Key Infrastructure'],
      image: ieeeCertImg,
      pdfUrl: ieeeCertPdf
    },
    {
      id: 2,
      title: 'Tech Triumph 1.0 Hackathon',
      issuer: 'Department of Computer Science',
      date: '2023',
      category: 'Hackathon & AI Development',
      badgeStyle: 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800/50',
      dotBg: 'bg-indigo-600 dark:bg-indigo-400',
      iconBg: 'bg-indigo-50/80 dark:bg-indigo-900/30 border-indigo-100 dark:border-indigo-800/40',
      description: 'Participated in a high-intensity hackathon building rapid AI prototypes, developing backend logic, and presenting working software solutions under strict time constraints.',
      skills: ['Rapid Prototyping', 'Python Automation', 'Team Collaboration', 'Problem Solving'],
      image: hackathonCertImg,
      pdfUrl: hackathonCertPdf
    },
    {
      id: 3,
      title: 'Python & Machine Learning Foundations',
      issuer: 'Academic Certification',
      date: '2023',
      category: 'Artificial Intelligence',
      badgeStyle: 'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-300 border-cyan-100 dark:border-cyan-800/50',
      dotBg: 'bg-cyan-600 dark:bg-cyan-400',
      iconBg: 'bg-cyan-50/80 dark:bg-cyan-900/30 border-cyan-100 dark:border-cyan-800/40',
      description: 'Hands-on certification covering core Python programming, data manipulation with Pandas & NumPy, supervised learning models, and model evaluation metrics.',
      skills: ['Python', 'Data Preprocessing', 'Scikit-Learn', 'Model Benchmarking'],
      image: mlCertImg,
      pdfUrl: mlCertPdf
    },
    {
      id: 4,
      title: 'Business Analysis Internship Certification',
      issuer: 'Outlook Publishing India Pvt. Ltd.',
      date: 'Apr 2024 - Jul 2024',
      category: 'Business Analytics & Market Research',
      badgeStyle: 'bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 border-purple-100 dark:border-purple-800/50',
      dotBg: 'bg-purple-600 dark:bg-purple-400',
      iconBg: 'bg-purple-50/80 dark:bg-purple-900/30 border-purple-100 dark:border-purple-800/40',
      description: 'Official certificate of internship completion from Outlook Publishing India Pvt. Ltd. Recognized for conducting in-depth market research, data visualization dashboards in Power BI/Tableau, and requirements analysis.',
      skills: ['Power BI', 'Tableau', 'Market Research', 'Data Analysis', 'Excel'],
      image: outlookCertImg,
      pdfUrl: outlookCertPdf
    }
  ];

  return (
    <section id="certificates" className="py-6 space-y-8 relative overflow-visible px-2 sm:px-4">
      {/* Ambient Background Spotlights */}
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
        <span className="text-blue-600 dark:text-blue-400 font-medium">Certificates</span>
      </div>

      {/* Top Header & Dashboard Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        
        {/* Title & Subtitle */}
        <div className="lg:col-span-7 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Certifications & Accomplishments
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal pt-1 max-w-xl leading-relaxed">
            A verified collection of professional certifications, technical workshops, and hackathons that validate my expertise.
          </p>
        </div>

        {/* Top Right Stats Box */}
        <div className="lg:col-span-5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-blue-300 dark:hover:border-slate-600 transition-all duration-500 grid grid-cols-4 gap-2 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="group/stat space-y-1 border-r last:border-0 border-slate-100 dark:border-slate-700/60 px-1 cursor-default">
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
      <div className="pt-2 relative z-10">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          Verified Qualifications
        </h2>
      </div>

      {/* Certificates Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {certificates.map((cert, idx) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`group relative overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400/50 transition-all duration-500 space-y-4 cursor-pointer ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Shimmer Light Reflection Sweep Pass */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></div>

            {/* Glowing Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Card Header Row */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-700/60 pb-3">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xs ${cert.iconBg}`}>
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    {cert.issuer} • <span className="text-blue-600 dark:text-blue-400 font-semibold">{cert.date}</span>
                  </p>
                </div>
              </div>

              <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded border transition-all duration-200 ${cert.badgeStyle}`}>
                {cert.category}
              </span>
            </div>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
              {cert.description}
            </p>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-700/60">
              {cert.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="bg-slate-100/90 dark:bg-slate-700/70 text-gray-800 dark:text-gray-200 text-[11px] font-medium px-2.5 py-1 rounded-xl border border-slate-200/60 dark:border-slate-600/60 group-hover:border-blue-300 dark:group-hover:border-blue-500/50 transition-colors duration-200"
                >
                  #{skill}
                </span>
              ))}
            </div>

            {/* Bottom Preview Callout */}
            <div className="flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 pt-1 group-hover:translate-x-1 transition-transform">
              <span>Click to view credential details & download PDF</span>
              <span>➔</span>
            </div>

          </div>
        ))}
      </div>

      {/* Interactive Modal Preview with Certificate View & PDF Download */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md">
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl p-6 sm:p-8 space-y-5">
            
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center font-bold text-base cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Title */}
            <div className="space-y-1 pr-8">
              <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded border inline-block mb-1 ${selectedCert.badgeStyle}`}>
                {selectedCert.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {selectedCert.title}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                Issued by <strong className="text-gray-800 dark:text-gray-200">{selectedCert.issuer}</strong> ({selectedCert.date})
              </p>
            </div>

            {/* Certificate Document Display */}
            <div className="relative group/preview w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full flex-col items-center justify-center p-4 bg-slate-900/80 text-center">
                <span className="text-3xl mb-2">📜</span>
                <span className="text-xs font-semibold text-white">{selectedCert.title}</span>
              </div>

              {/* Hover Download Button Overlay */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center">
                <a
                  href={selectedCert.pdfUrl}
                  download
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-lg flex items-center space-x-2 transition-transform transform hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download PDF Document</span>
                </a>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-1.5">
              <h3 className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                📜 Certification Overview
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                {selectedCert.description}
              </p>
            </div>

            {/* Skills Validated */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                🛠️ Skills & Knowledge Areas
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {selectedCert.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 text-gray-800 dark:text-gray-200">
                    #{skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <a
                href={selectedCert.pdfUrl}
                download
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition-all flex items-center space-x-2 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download PDF</span>
              </a>

              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-200 text-xs font-semibold transition-all cursor-pointer"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;