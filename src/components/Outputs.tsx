
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

export const Outputs: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const categories: Project['category'][] = [
    'AI Automations',
    'Websites',
    'Chatbots',
    'Voice Agents'
  ];

  return (
    <section className="py-40 px-6 bg-white dark:bg-black min-h-screen relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="ambient-light top-1/4 right-[-300px] ambient-light-pink opacity-40 animate-float" />
      <div className="ambient-light bottom-1/4 left-[-300px] opacity-40 animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-8xl font-bold tracking-tighter text-black dark:text-white mb-6">Work.</h2>
          <p className="text-xl text-gray-400 max-w-sm tracking-tight font-medium leading-tight text-balance">
            Curated outputs across technical disciplines, <span className="text-brand-purple">illuminated</span> by logic.
          </p>
        </motion.div>

        <div className="space-y-40">
          {categories.map((category) => {
            const filteredProjects = PROJECTS.filter(p => p.category === category);
            
            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group"
              >
                <div className="flex items-end justify-between mb-10 border-b border-black/[0.05] dark:border-white/[0.05] pb-6">
                  <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-black dark:text-white group-hover:text-brand-purple transition-colors">
                    {category}
                  </h3>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300 dark:text-zinc-700">
                    {filteredProjects.length.toString().padStart(2, '0')}
                  </span>
                </div>

                {filteredProjects.length > 0 ? (
                  <div className="flex gap-8 overflow-x-auto pb-12 no-scrollbar cursor-grab active:cursor-grabbing">
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.id}
                        whileHover={{ y: -15, scale: 1.02 }}
                        onClick={() => setSelected(project)}
                        className="min-w-[300px] md:min-w-[420px] aspect-[4/5] rounded-[2.5rem] bg-white dark:bg-zinc-900 border border-black/[0.05] dark:border-white/[0.05] overflow-hidden relative group/card shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(177,83,215,0.3)] transition-all duration-700"
                      >
                        {project.media[0]?.type === 'video' ? (
                          <video src={project.media[0].src} autoPlay muted loop className="w-full h-full object-cover opacity-60 group-hover/card:opacity-100 transition-opacity duration-700" />
                        ) : project.media[0] ? (
                          <img src={project.media[0].src} className="w-full h-full object-cover opacity-60 group-hover/card:opacity-100 transition-opacity duration-700" alt="" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-black/5 dark:bg-white/5">
                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Preview Unavailable</span>
                          </div>
                        )}
                        
                        {/* Interactive Brand Glow Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 via-transparent to-transparent pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                        
                        <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover/card:translate-y-0 opacity-0 group-hover/card:opacity-100 transition-all duration-500 pr-10 z-20">
                          <p className="text-[9px] font-black tracking-[0.4em] uppercase opacity-80 mb-2">{project.client}</p>
                          <h4 className="text-xl font-bold tracking-tight">{project.scope}</h4>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="py-20 flex flex-col items-center justify-center rounded-[2.5rem] bg-black/[0.02] dark:bg-white/[0.01] border border-dashed border-black/[0.05] dark:border-white/[0.05]">
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-gray-400">No active deployments</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-6"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-10 right-10 text-white opacity-40 hover:opacity-100 transition-opacity p-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-6xl w-full max-h-[90vh] overflow-y-auto no-scrollbar rounded-[3rem] bg-white dark:bg-black border border-white/10 shadow-[0_0_100px_rgba(177,83,215,0.4)] flex flex-col md:flex-row"
            >
              {/* Media Section */}
              <div className="w-full md:w-2/3 aspect-video md:aspect-auto bg-black flex items-center justify-center overflow-hidden">
                {selected.media[0]?.type === 'video' ? (
                  <video src={selected.media[0].src} controls autoPlay className="w-full h-full object-cover" />
                ) : selected.media[0] ? (
                  <img src={selected.media[0].src} className="w-full h-full object-cover" alt="" />
                ) : null}
              </div>

              {/* Info Section */}
              <div className="w-full md:w-1/3 p-8 md:p-14 flex flex-col justify-center bg-white dark:bg-zinc-950">
                <div className="space-y-10">
                  <div>
                    <span className="text-brand-purple text-[9px] font-black tracking-[0.4em] uppercase mb-4 inline-block drop-shadow-sm">Project Detail</span>
                    <h3 className="text-3xl font-bold tracking-tighter text-black dark:text-white mb-2 leading-tight">{selected.scope}</h3>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{selected.client}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 dark:text-zinc-700 border-b border-black/5 dark:border-white/5 pb-4">Synopsis</p>
                    <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                      {selected.description}
                    </p>
                  </div>

                  <div className="pt-6">
                     <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-brand text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-brand-purple/20">
                       Closed Source
                     </div>
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
