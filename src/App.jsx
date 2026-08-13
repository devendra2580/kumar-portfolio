import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import CertificatesSection from './components/sections/CertificatesSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';
import ChatIcon from './components/ai-assistant/FloatingChatWidget';
import DevAIChatModal from './components/ai-assistant/DevAIChatModal';

function App() {
  const getTabFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    return hash || 'home';
  };

  const [activeTab, setActiveTabState] = useState(getTabFromHash);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const setActiveTab = (tabId) => {
    setActiveTabState(tabId);
    window.location.hash = tabId;
  };

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  // 1. Disable browser's automatic scroll restoration on page load/reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Force scroll to top on fresh load / refresh
    window.scrollTo(0, 0);
  }, []);

  // 2. Scroll to top whenever active tab changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [activeTab]);

  // 3. Listen for URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActiveTabState(getTabFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative flex flex-col justify-between">
        <div>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <main className="w-full max-w-[95%] mx-auto px-4 sm:px-6">
            {activeTab === 'home' && <HeroSection />}
            {activeTab === 'about' && <AboutSection setActiveTab={setActiveTab} />}
            {activeTab === 'experience' && <ExperienceSection setActiveTab={setActiveTab} />}
            {activeTab === 'projects' && <ProjectsSection setActiveTab={setActiveTab} />}
            {activeTab === 'skills' && <SkillsSection setActiveTab={setActiveTab} />}
            {activeTab === 'certificates' && <CertificatesSection setActiveTab={setActiveTab} />}
            {activeTab === 'contact' && <ContactSection setActiveTab={setActiveTab} />}
          </main>
        </div>

        <Footer />
        
        {/* Floating Chat Icon & Modal */}
        <ChatIcon 
          isOpen={isChatOpen} 
          onToggleChat={handleToggleChat} 
          onOpenChat={handleToggleChat} 
        />
        <DevAIChatModal 
          isOpen={isChatOpen} 
          onClose={() => setIsChatOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}

export default App;