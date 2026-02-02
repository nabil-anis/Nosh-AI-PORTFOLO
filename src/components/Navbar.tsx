import React, { useState, useEffect } from 'react';
import { Page } from '../types.ts';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
  isDark: boolean;
  toggleTheme: () => void;
  onLogoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onPageChange, isDark, toggleTheme, onLogoClick }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAbout(!showAbout);
    }, showAbout ? 2000 : 4000);
    return () => clearTimeout(timeout);
  }, [showAbout]);

  return (
    <motion.div 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      className="fixed top-4 md:top-8 left-0 right-0 z-[100] px-3 md:px-6 pointer-events-none"
    >
      <nav className="w-full max-w-[620px] mx-auto glass border border-black/[0.08] dark:border-white/[0.08] rounded-full px-1 h-14 flex items-center justify-between pointer-events-auto shadow-2xl relative transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/5 to-brand-pink/5 pointer-events-none rounded-full" />
        
        <div className="flex-shrink-0 w-20 md:w-28 flex justify-start pl-3 md:pl-6 relative z-10">
          <button 
            onClick={onLogoClick}
            className="group flex items-center h-full relative outline-none overflow-hidden"
          >
            <div className="relative h-full w-full flex items-center">
              <AnimatePresence mode="wait">
                {showAbout ? (
                  <motion.span
                    key="about"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[10px] md:text-sm font-black tracking-widest text-brand-purple uppercase"
                  >
                    About
                  </motion.span>
                ) : (
                  <motion.span
                    key="nosh"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[10px] md:text-sm font-black tracking-widest text-black dark:text-white uppercase"
                  >
                    NOSH.
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </button>
        </div>
        
        <div className="flex-1 flex items-center justify-center gap-0.5 md:gap-1 text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-widest relative z-10 overflow-hidden">
          {[Page.Engine, Page.Work, Page.Gallery].map((page) => (
            <button 
              key={page}
              onClick={() => onPageChange(page)}
              className={`transition-all px-2.5 md:px-5 py-2 rounded-full relative whitespace-nowrap ${currentPage === page ? 'text-brand-purple' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
            >
              {currentPage === page && (
                <motion.div 
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-brand-purple/[0.08] dark:bg-brand-purple/[0.12] rounded-full border border-brand-purple/20 shadow-[0_0_15px_rgba(177,83,215,0.15)]"
                />
              )}
              <span className="relative z-10 uppercase">{page}</span>
            </button>
          ))}
        </div>

        <div className="flex-shrink-0 w-20 md:w-28 flex justify-end pr-1.5 md:pr-4 relative z-10">
          <button 
            onClick={toggleTheme} 
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/[0.03] dark:bg-white/[0.05] hover:bg-brand-purple/10 transition-colors"
          >
            <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 transition-all duration-500 ${isDark ? 'border-brand-purple bg-brand-purple shadow-[0_0_10px_rgba(177,83,215,0.8)]' : 'border-gray-400 bg-transparent'}`} />
          </button>
        </div>
      </nav>
    </motion.div>
  );
};