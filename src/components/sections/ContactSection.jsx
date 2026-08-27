import React, { useState } from 'react';

const ContactSection = ({ setActiveTab }) => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  // State for Email Options Modal
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = 'darapureddydevendra13579@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Direct In-Page Submission (Web3Forms API)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    const formData = new FormData();
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('subject', formState.subject || 'Portfolio Direct Message');
    formData.append('Role Inquiry', formState.subject);
    formData.append('message', formState.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError(true);
    }
  };

  // Provider Options List for the Contact Info Card Modal
  const emailProviders = [
    {
      name: 'Gmail',
      desc: 'Open Compose in Gmail Web',
      icon: '✉️',
      color: 'hover:border-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 text-red-600 dark:text-red-400',
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`,
      target: '_blank'
    },
    {
      name: 'Outlook',
      desc: 'Open Compose in Outlook Web',
      icon: '📬',
      color: 'hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-blue-600 dark:text-blue-400',
      href: `https://outlook.office.com/mail/deeplink/compose?to=${emailAddress}`,
      target: '_blank'
    },
    {
      name: 'Yahoo Mail',
      desc: 'Open Compose in Yahoo Web',
      icon: '📧',
      color: 'hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 text-purple-600 dark:text-purple-400',
      href: `https://compose.mail.yahoo.com/?to=${emailAddress}`,
      target: '_blank'
    }
  ];

  return (
    <section id="contact" className="py-6 space-y-8 relative overflow-visible px-2 sm:px-4">
      {/* Ambient Spotlights */}
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
        <span className="text-blue-600 dark:text-blue-400 font-medium">Contact</span>
      </div>

      {/* Top Header */}
      <div className="space-y-3 relative z-10 text-center lg:text-left">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mx-auto lg:mx-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span>GET IN TOUCH</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
          Let’s Connect & Collaborate
        </h1>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto lg:mx-0"></div>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-normal pt-1 max-w-xl leading-relaxed mx-auto lg:mx-0">
          Whether you have a job opportunity, a project proposal, or just want to say hello, feel free to drop me a message. I am actively looking for AI & Python Developer roles.
        </p>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-start mt-4">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white pb-1 text-center lg:text-left">
            Contact Information
          </h2>

          <div className="space-y-4">
            
            {/* Email Card with Option Trigger */}
            <div
              onClick={() => setShowEmailModal(true)}
              className="group relative block overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none"></div>

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="space-y-0.5 min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      Email Address
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded border bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-300 border-blue-100 dark:border-blue-800/50">
                      Click Options ➔
                    </span>
                  </div>
                  
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {emailAddress}
                  </h3>
                  
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-normal">
                    Select your preferred webmail client (Gmail, Outlook, Yahoo)
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <a
              href="tel:+918341695598"
              className="group relative block overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="space-y-0.5 min-w-0 flex-1">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Phone / WhatsApp</span>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">+91 8341695598</h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-normal">Mon - Sat • 9:00 AM - 8:00 PM IST</p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <a
              href="https://maps.google.com/?q=Hyderabad,India"
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 text-cyan-600 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-0.5 min-w-0 flex-1">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">Current Location</span>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Hyderabad, Telangana, India</h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-normal">Open to Remote & Hybrid Roles</p>
                </div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/darapureddy-devendra-kumar-a81a18206"
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-700/60 shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5 fill-current text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="space-y-0.5 min-w-0 flex-1">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">LinkedIn Network</span>
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Devendra Kumar Darapureddy</h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-normal">Professional Connect & Portfolio</p>
                </div>
              </div>
            </a>

          </div>
        </div>

        {/* Right Column: Direct In-Page Form with overflow-hidden added */}
        <div className="lg:col-span-7 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-[0_4px_30px_rgba(0,0,0,0.04)] relative overflow-hidden mt-8 lg:mt-0">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"></div>

          <div className="space-y-6">
            <div className="space-y-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Send a Direct Message
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                Fill out the form below to send a message directly to my inbox.
              </p>
            </div>

            {/* Success Message Banner */}
            {isSubmitted && (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-medium flex items-center space-x-3">
                <span className="text-lg">✅</span>
                <span>Thank you! Your message has been sent directly to Devendra’s inbox.</span>
              </div>
            )}

            {/* Error Message Banner */}
            {submitError && (
              <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/60 border border-red-200 dark:border-red-800/60 text-red-800 dark:text-red-300 text-xs sm:text-sm font-medium flex items-center space-x-3">
                <span className="text-lg">⚠️</span>
                <span>Submission failed. Please check your `.env` key setup.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Subject / Role Inquiry *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Opportunity for AI / Python Developer Position"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-700 dark:text-gray-300">Your Message *</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Type your message or project details here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <span>Send Message ➔</span>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* Choose Email Provider Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-md">
          <div className="relative w-full max-w-[95%] sm:max-w-md bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl p-5 sm:p-6 space-y-5">
            
            <button
              onClick={() => setShowEmailModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center font-bold text-sm cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-1 pr-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Choose Webmail Provider
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                Select where you want to open the compose window:
              </p>
            </div>

            <div className="space-y-2.5">
              {emailProviders.map((prov, pIdx) => (
                <a
                  key={pIdx}
                  href={prov.href}
                  target={prov.target}
                  rel="noreferrer"
                  onClick={() => setShowEmailModal(false)}
                  className={`flex items-center space-x-3.5 p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 transition-all duration-200 ${prov.color} group`}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{prov.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {prov.name}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-normal truncate">
                      {prov.desc}
                    </p>
                  </div>
                  <span className="text-xs font-bold">➔</span>
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 font-medium truncate pr-2">
                {emailAddress}
              </span>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 text-xs font-semibold hover:bg-blue-600 hover:text-white transition-colors cursor-pointer flex-shrink-0"
              >
                {copiedEmail ? '✓ Copied!' : 'Copy Email'}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;