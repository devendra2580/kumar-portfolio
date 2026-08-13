import React, { useState, useEffect } from "react";

const FloatingChatWidget = ({ isOpen, onToggleChat, onOpenChat }) => {
  const [showNotification, setShowNotification] = useState(false);

  // Show notification popover after 2 seconds if chat is closed
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setShowNotification(true);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowNotification(false);
    }
  }, [isOpen]);

  const handleButtonClick = () => {
    setShowNotification(false);
    if (onToggleChat) {
      onToggleChat();
    } else if (onOpenChat) {
      onOpenChat();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto select-none font-sans">
      
      {/* Floating Notification Banner */}
      {!isOpen && showNotification && (
        <div className="mb-3.5 relative max-w-xs bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-[0_10px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-bottom-3 duration-300 flex items-start space-x-3">
          
          {/* Close Notification Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowNotification(false);
            }}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400 transition-colors flex items-center justify-center text-[10px] font-bold cursor-pointer shadow-sm border border-slate-200 dark:border-slate-700"
            title="Dismiss"
          >
            ✕
          </button>

          {/* AI Badge Avatar */}
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm mt-0.5">
            ⚡
          </div>

          {/* Text Content */}
          <div 
            onClick={handleButtonClick}
            className="cursor-pointer space-y-0.5"
          >
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                Dev AI Assistant
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight">
              Hi there! Have questions about my experience or projects? Ask me!
            </p>
          </div>

          {/* Pointer Triangle */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white/95 dark:bg-slate-900/95 border-r border-b border-slate-200/80 dark:border-slate-800 rotate-45"></div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={handleButtonClick}
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer border border-white/20"
        aria-label={isOpen ? "Close Dev AI Assistant" : "Open Dev AI Assistant"}
      >
        {/* Soft Ambient Glow */}
        <div className="absolute -inset-1 rounded-full bg-blue-600/30 blur-md group-hover:bg-blue-600/50 transition-all pointer-events-none"></div>

        {/* Dynamic Icon Switcher */}
        <div className="relative z-10 flex items-center justify-center transition-transform duration-300">
          {isOpen ? (
            <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </div>

        {/* Alert Dot when chat is closed */}
        {!isOpen && (
          <span className="absolute top-0.5 right-0.5 flex h-3.5 w-3.5 z-20">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 border-2 border-white dark:border-slate-900 shadow-sm"></span>
          </span>
        )}
      </button>

    </div>
  );
};

export default FloatingChatWidget;