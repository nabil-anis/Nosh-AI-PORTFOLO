import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ATMOSPHERE } from '../constants.ts';

export const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + ATMOSPHERE.length) % ATMOSPHERE.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % ATMOSPHERE.length);
    }
  };

  const selectedImage = selectedIndex !== null ? ATMOSPHERE[selectedIndex] : null;

  return (
    <section className="py-40 px-6 bg-white dark:bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <span className="text-brand-purple text-[10px] font-black tracking-[1em] uppercase mb-4 inline-block">Production Archives</span>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-black dark:text-white">Gallery.</h2>
          <p className="mt-4 text-gray-400 font-medium tracking-tight">Varying perspectives, unified logic.</p>
        </motion.div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 w-full">
          {ATMOSPHERE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedIndex(index)}
              className="masonry-item relative rounded-[2.5rem] overflow-hidden group cursor-pointer border border-black/5 dark:border-white/5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-brand-purple/10"
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 block" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white text-[10px] font-black uppercase tracking-widest">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 md:p-12 overflow-hidden"
          >
            {/* Close Button: Solid white circle */}
            <button 
              onClick={() => setSelectedIndex(null)}
              className="fixed top-8 right-8 md:top-12 md:right-12 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center text-black shadow-2xl z-[350] transition-transform active:scale-90"
              aria-label="Close"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            {/* Navigation Controls: Centered on sides */}
            <div className="absolute inset-x-4 md:inset-x-12 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none z-[340]">
               <button 
                onClick={handlePrev} 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all pointer-events-auto active:scale-90"
               >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6"/></svg>
               </button>
               <button 
                onClick={handleNext} 
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all pointer-events-auto active:scale-90"
               >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6"/></svg>
               </button>
            </div>

            <motion.div 
              key={selectedImage.id}
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative flex items-center justify-center max-w-[90vw] md:max-w-[70vw] max-h-[85vh] pointer-events-none"
            >
              <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-zinc-950 flex items-center justify-center border border-white/10 pointer-events-auto w-full h-full">
                <img 
                  src={selectedImage.src} 
                  className="w-full h-full object-contain md:max-h-[85vh]" 
                  alt={selectedImage.alt} 
                />
                
                {/* Metadata Overlay: Adjusted to use brand-purple theme color */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center text-center pointer-events-none">
                  <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-brand-purple mb-2 drop-shadow-md">
                    PERSPECTIVE
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white uppercase mb-4 drop-shadow-lg">
                    {selectedImage.alt}
                  </h3>
                  <div className="text-[10px] md:text-[12px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                    {selectedIndex + 1} / {ATMOSPHERE.length}
                  </div>
                  
                  {/* Pagination Dots using theme brand-purple */}
                  <div className="flex gap-2.5">
                    {ATMOSPHERE.map((_, i) => (
                      <div 
                        key={i} 
                        className={`h-1.5 rounded-full transition-all duration-500 ${i === selectedIndex ? 'w-10 bg-brand-purple shadow-[0_0_12px_rgba(177,83,215,0.6)]' : 'w-4 bg-white/20'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};