import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { EnginePage } from './pages/EnginePage.tsx';
import { WorkPage } from './pages/WorkPage.tsx';
import { GalleryPage } from './pages/GalleryPage.tsx';
import { AboutOverlay } from './components/AboutOverlay.tsx';
import { Page } from './types.ts';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Work);
  const [isDark, setIsDark] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(systemPrefersDark);
    if (systemPrefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.Engine: return <EnginePage key="engine-page" />;
      case Page.Work: return <WorkPage key="work-page" />;
      case Page.Gallery: return <GalleryPage key="gallery-page" />;
      default: return <EnginePage key="engine-page" />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-brand-purple/20 transition-colors duration-500 flex flex-col">
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onLogoClick={() => setIsAboutOpen(true)}
      />

      <AnimatePresence>
        {isAboutOpen && (
          <AboutOverlay isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      <footer className="py-24 px-6 bg-white dark:bg-black border-t border-black/[0.05] dark:border-white/[0.05] transition-colors duration-500">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-12">
          {/* Left Column: Stylized Logo Stacked above Text */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <a
              href="mailto:bilalzindani1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center hover:scale-110 transition-transform active:scale-95 transition-all"
            >
              <img
                src="/nosh-logo.webp"
                alt="Bilal Zindani"
                className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(177,83,215,0.2)]"
              />
            </a>
          </div>

          <div className="flex justify-center gap-12 text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
            <a href="mailto:bilalzindani1@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">Contact</a>
            <a href="https://www.linkedin.com/in/bilal-zindani" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/bilal_zindani18/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">Instagram</a>
          </div>

          <div className="flex justify-center md:justify-end">
            <p className="text-[10px] font-black text-gray-400 dark:text-zinc-700 uppercase tracking-[0.2em] text-center md:text-right">
              © 2026 Bilal Zindani
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;