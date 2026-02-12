import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants.ts';
import { Project } from '../types.ts';
import { WebsiteCard } from './WebsiteCard.tsx';

const SkeletonProjectCard: React.FC = () => (
  <div className="min-w-[280px] sm:min-w-[380px] aspect-[4/3] rounded-[3rem] bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.05] relative overflow-hidden">
    <div className="absolute inset-0 z-10 animate-shimmer pointer-events-none">
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/[0.05] dark:via-white/[0.02] to-transparent" />
    </div>
    <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 right-8 sm:right-12 space-y-4 sm:space-y-5">
      <div className="h-2 w-20 bg-black/5 dark:bg-white/5 rounded-full" />
      <div className="h-6 w-3/4 bg-black/5 dark:bg-white/5 rounded-xl" />
    </div>
  </div>
);

const ProjectCTACard: React.FC = () => {
  const [jokeIndex, setJokeIndex] = useState(0);
  const jokes = [
    "It's free. Your procurement department will love us.",
    "Priced at exactly $0.00. We checked the math twice.",
    "Zero cost to initialize. No billable hours were harmed.",
    "Think of it as a professional trial with no professional invoice.",
    "The first handshake is on the house. No fine print.",
    "Consultation is free. Staying inefficient is expensive.",
    "Zero risk. Zero cost. Maximum industrial output."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setJokeIndex((prev) => (prev + 1) % jokes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="min-w-[280px] sm:min-w-[380px] shrink-0 aspect-[4/3] rounded-[3rem] bg-zinc-50 dark:bg-[#050505] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:shadow-[0_0_60px_15px_rgba(255,0,255,0.15)] flex flex-col justify-between p-8 sm:p-10 transition-all duration-700 relative overflow-hidden group/cta cursor-default shadow-sm snap-center"
    >
      <div className="relative z-10 flex flex-col h-full items-start">
        <div className="flex justify-between items-start w-full mb-4">
          <div className="flex gap-2 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
            <span className="text-[9px] sm:text-[10px] font-black text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.3em]">Direct Inquiry</span>
          </div>
          <span className="text-[8px] sm:text-[9px] font-medium text-zinc-300 dark:text-zinc-800 tracking-widest uppercase">Registry 2026</span>
        </div>

        <div className="flex-grow flex flex-col justify-center text-left">
          <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white leading-[0.95] mb-4 sm:mb-6 text-balance">
            A singular problem <br />
            <span className="italic text-zinc-300 dark:text-zinc-700">requires a singular solution.</span>
          </h4>

          <div className="relative min-h-[3rem] flex flex-col justify-start text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={jokeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-1"
              >
                <p className="text-xs sm:text-sm md:text-base font-bold text-black dark:text-white tracking-tight">
                  {jokes[jokeIndex]}
                </p>
                <p className="text-[10px] sm:text-[11px] font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest italic">
                  No harm in trying it out.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 w-full">
          <button
            data-cal-link="nosh-ai-automation/30-minutes-meeting"
            className="w-full flex items-center justify-center gap-4 py-5 sm:py-6 rounded-[2rem] sm:rounded-[2.5rem] bg-black dark:bg-white text-white dark:text-black text-[10px] sm:text-[12px] font-black uppercase tracking-[0.3em] hover:bg-brand-purple dark:hover:bg-brand-purple hover:text-white dark:hover:text-white transition-all shadow-xl active:scale-95 border-none"
          >
            Book a Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none group-hover/cta:bg-brand-purple/10 transition-all duration-1000" />
    </motion.div>
  );
};

export const Work: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [modalMode, setModalMode] = useState<'briefing' | 'interactive'>('briefing');
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const scrollRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { id: 'AI Automations', label: 'AI Automation', tech: 'Neural Workflows', desc: 'Eliminating manual bottlenecks through autonomous agentic logic.' },
    { id: 'Websites', label: 'S.A.A.S (Websites & Apps)', tech: 'Performance Interfaces', desc: 'High-speed digital platforms built for sub-second delivery.' },
    { id: 'Chatbots', label: 'AI Chatbots', tech: 'Cognitive Agents', desc: 'Context-aware intelligence layers for 24/7 customer orchestration.' },
    { id: 'Voice Agents', label: 'Voice Agents', tech: 'Autonomous Voice', desc: 'Zero-latency vocal infrastructure for human-like tele-reasoning.' }
  ];

  const filterOptions = ['All', ...categories.map(c => c.id)];
  const displayedCategories = activeFilter === 'All'
    ? categories
    : categories.filter(c => c.id === activeFilter);

  const scroll = (id: string, direction: 'left' | 'right') => {
    const container = scrollRefs.current[id];
    if (container) {
      const scrollAmount = window.innerWidth < 640 ? 320 : 520;
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-40 px-6 bg-white dark:bg-black min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 sm:mb-32 text-left"
        >
          <div className="flex items-center justify-start gap-4 mb-6 sm:mb-8">
            <div className="h-[1px] w-8 sm:w-12 bg-brand-purple hidden sm:block" />
            <span className="text-brand-purple text-[9px] sm:text-[10px] font-black uppercase tracking-[0.6em]">logic in production</span>
          </div>
          <h2 className="text-5xl sm:text-7xl md:text-[8vw] font-bold tracking-tighter text-black dark:text-white mb-6 sm:mb-8 leading-[0.9]">
            NOSH AI, <br />
            <span className="text-gray-200 dark:text-zinc-800 italic">PORTFOLIO.</span>
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-500 dark:text-gray-400 font-medium leading-tight max-w-2xl text-balance">
            A curated selection of technical deployments optimized for scale and absolute precision.
          </p>
        </motion.div>

        <div className="mb-24 sm:mb-40 sticky top-20 sm:top-24 z-40 flex justify-center">
          <div className="flex gap-1 sm:gap-2 p-1.5 sm:p-2 glass border border-black/5 dark:border-white/5 rounded-full shadow-xl overflow-x-auto no-scrollbar max-w-full">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-6 py-2 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-all relative whitespace-nowrap ${activeFilter === filter ? 'text-white' : 'text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-brand-purple rounded-full z-0 shadow-lg"
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-40 sm:space-y-80">
          <AnimatePresence mode="wait">
            {displayedCategories.map((cat) => {
              const filteredProjects = PROJECTS.filter(p => p.category === cat.id);
              if (filteredProjects.length === 0) return null;

              // Special Split View for S.A.A.S (Websites)
              if (cat.id === 'Websites') {
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="group/category flex flex-col gap-12 sm:gap-24"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-8 sm:mb-16 items-end text-left">
                      <div className="lg:col-span-8">
                        <p className="text-brand-purple text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase mb-4">{cat.tech}</p>
                        <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mb-4">{cat.label}</h3>
                        <p className="text-sm sm:text-lg text-gray-400 dark:text-zinc-600 font-medium max-w-xl text-balance">{cat.desc}</p>
                      </div>
                    </div>

                    <div className="space-y-32 sm:space-y-48">
                      {filteredProjects.map((project, index) => (
                        <div key={project.id} className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                          <div className="lg:w-2/5 flex flex-col items-start text-left px-4 sm:px-0">
                            <span className="flex items-center gap-3 mb-6">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"></span>
                              <span className="text-[9px] text-zinc-400 font-black tracking-[0.4em] uppercase">ID: {project.id.toUpperCase()}</span>
                            </span>
                            <h4 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white mb-6 tracking-tighter leading-tight">
                              {project.client}
                            </h4>
                            <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed mb-8 text-balance max-w-lg">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap justify-start gap-2 mb-10">
                              {project.techStack?.map((tech, i) => (
                                <span key={i} className="px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-zinc-500">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group/btn flex items-center gap-4 px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-brand-purple dark:hover:bg-brand-purple hover:text-white dark:hover:text-white transition-all shadow-lg hover:scale-105 active:scale-95"
                            >
                              <span className="text-[11px] font-black uppercase tracking-[0.25em]">Launch System</span>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                            </a>
                          </div>

                          <div className="lg:w-3/5 w-full flex justify-center perspective-1000">
                            <div className="w-full aspect-video shadow-2xl rounded-[1.5rem] sm:rounded-[2rem] bg-zinc-900 overflow-hidden border border-white/5 relative transform hover:scale-[1.01] transition-transform duration-500">
                              {project.url ? (
                                <WebsiteCard url={project.url} title={project.client} isEmbeddable={project.isEmbeddable} />
                              ) : (
                                <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                                  <p className="text-zinc-500 font-mono text-xs">NO_PREVIEW_URL_AVAILABLE</p>
                                </div>
                              )}
                              <div className="absolute top-4 right-4 z-30 px-3 py-1 bg-black/50 backdrop-blur rounded-full border border-white/10 hidden sm:block">
                                <span className="text-[9px] font-mono text-zinc-400">REMOTE_ACCESS_ACTIVE</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              }

              // Default Carousel View for other categories (Automations, Chatbots, Voice Agents)
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="group/category"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-12 sm:mb-20 items-end text-left">
                    <div className="lg:col-span-8">
                      <p className="text-brand-purple text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase mb-4">{cat.tech}</p>
                      <h3 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mb-4">{cat.label}</h3>
                      <p className="text-sm sm:text-lg text-gray-400 dark:text-zinc-600 font-medium max-w-xl text-balance">{cat.desc}</p>
                    </div>
                  </div>

                  <div className="relative group/scroll">
                    <div className="absolute top-1/2 -translate-y-1/2 left-[-20px] sm:left-[-40px] right-[-20px] sm:right-[-40px] flex justify-between z-30 pointer-events-none">
                      <button
                        onClick={() => scroll(cat.id, 'left')}
                        className="w-10 h-10 sm:w-16 sm:h-16 rounded-full glass border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all pointer-events-auto shadow-2xl active:scale-90"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6" /></svg>
                      </button>
                      <button
                        onClick={() => scroll(cat.id, 'right')}
                        className="w-10 h-10 sm:w-16 sm:h-16 rounded-full glass border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all pointer-events-auto shadow-2xl active:scale-90"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
                      </button>
                    </div>

                    <div
                      ref={el => { scrollRefs.current[cat.id] = el; }}
                      className="flex gap-6 sm:gap-8 overflow-x-auto pb-10 sm:pb-16 no-scrollbar px-2 snap-x snap-mandatory"
                    >
                      {isLoading ? (
                        [1, 2, 3].map(i => <SkeletonProjectCard key={i} />)
                      ) : (
                        <>
                          {filteredProjects.map((project) => (
                            <motion.div
                              key={project.id}
                              whileHover={{ y: -10 }}
                              onClick={() => {
                                setSelected(project);
                                setModalMode('briefing');
                              }}
                              className={`min-w-[280px] sm:min-w-[380px] shrink-0 aspect-[4/3] rounded-[3rem] border border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:shadow-[0_0_60px_15px_rgba(177,83,215,0.15)] overflow-hidden relative group shadow-sm transition-all duration-700 cursor-pointer snap-center flex flex-col items-center justify-center p-12 text-center ${project.category === 'AI Automations'
                                ? 'bg-zinc-50 dark:bg-[#050505]'
                                : 'bg-zinc-100 dark:bg-zinc-900'
                                }`}
                            >
                              {project.category === 'AI Automations' ? (
                                <>
                                  <div className="absolute top-8 left-10 right-10 flex justify-between items-start opacity-40">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{project.client}</span>
                                    <span className="text-[10px] font-mono text-zinc-500">{project.registry || 'SYSTEM_00'}</span>
                                  </div>

                                  <div className="flex flex-col items-center gap-6">
                                    <div className="flex flex-col items-center">
                                      <p className="text-brand-purple text-[10px] sm:text-[11px] font-black tracking-[0.4em] uppercase mb-4">Industrial Intelligence</p>
                                      <h4 className="text-3xl sm:text-5xl font-bold tracking-tighter leading-[0.95] text-black dark:text-white max-w-[280px]">
                                        {project.scope}
                                      </h4>
                                    </div>

                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(project.url, '_blank');
                                      }}
                                      className="group/link flex flex-col items-center gap-1 mt-4"
                                    >
                                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 group-hover/link:text-brand-purple transition-colors">Tap here for the case study</span>
                                      <div className="w-12 h-[1px] bg-zinc-200 dark:bg-zinc-800 group-hover/link:bg-brand-purple group-hover/link:shadow-[0_0_10px_#B153D7] transition-all" />
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="absolute inset-0">
                                    {project.media?.[0]?.type === 'video' ? (
                                      <video src={project.media[0].src} className="w-full h-full object-cover opacity-60 transition-opacity duration-700" />
                                    ) : (
                                      <img src={project.media?.[0]?.src} className="w-full h-full object-cover opacity-60 transition-opacity duration-700" alt="" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                  </div>
                                  <div className="absolute bottom-10 sm:bottom-12 left-10 sm:left-12 right-10 sm:right-12 text-white z-20 text-left">
                                    <p className="text-brand-purple text-[8px] sm:text-[10px] font-black tracking-[0.4em] uppercase mb-2">{project.client}</p>
                                    <h4 className="text-3xl sm:text-4xl font-bold tracking-tighter leading-tight">{project.scope}</h4>
                                  </div>
                                </>
                              )}
                            </motion.div>
                          ))}
                          <ProjectCTACard />
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-8 overflow-hidden"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="max-w-[1000px] w-full h-[95vh] bg-[#0A0A0A] border border-white/5 rounded-[2rem] sm:rounded-[4rem] overflow-y-auto no-scrollbar relative shadow-2xl flex flex-col pointer-events-auto"
              onClick={e => e.stopPropagation()}
            >
              {/* Modal Media Area */}
              {selected.category !== 'AI Automations' && (
                <div className="w-full h-[50vh] sm:h-[65vh] bg-[#1A1A1A] relative shrink-0 border-b border-white/5 overflow-hidden">
                  {modalMode === 'interactive' && selected.url ? (
                    <div className="w-full h-full p-4 sm:p-8">
                      <WebsiteCard url={selected.url} title={selected.client} isEmbeddable={selected.isEmbeddable} />
                    </div>
                  ) : (
                    <>
                      {selected.media?.[0]?.type === 'video' ? (
                        <video
                          src={selected.media[0].src}
                          controls
                          playsInline
                          className="w-full h-full object-contain relative z-10"
                        />
                      ) : (
                        <img src={selected.media?.[0]?.src} className="w-full h-full object-contain" alt="" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                    </>
                  )}

                  <button
                    onClick={() => setSelected(null)}
                    className="absolute top-6 right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90 z-40"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  </button>
                </div>
              )}

              {selected.category === 'AI Automations' && (
                <div className="absolute top-10 right-10">
                  <button
                    onClick={() => setSelected(null)}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md flex items-center justify-center text-white transition-all active:scale-90 z-40"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                  </button>
                </div>
              )}

              <div className="p-8 sm:p-14 bg-[#0A0A0A] flex flex-col gap-10 sm:gap-16 items-start">
                <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8">
                  <div className="space-y-4 text-left">
                    <span className="text-brand-purple text-[10px] sm:text-[11px] font-black tracking-[0.5em] uppercase block">
                      SYSTEM SUMMARY
                    </span>
                    <h3 className="text-3xl sm:text-7xl font-bold tracking-tighter text-white leading-none">
                      {selected.scope}
                    </h3>
                    <p className="text-xs sm:text-base font-bold text-zinc-500 uppercase tracking-widest italic text-balance">
                      {selected.client}
                    </p>
                  </div>

                  <div className="flex gap-4 md:pt-4 shrink-0">
                    <div className="px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-zinc-900/50 border border-white/5 text-center min-w-[100px] sm:min-w-[130px]">
                      <p className="text-[7px] sm:text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 opacity-70">EFFICIENCY</p>
                      <p className="text-lg sm:text-2xl font-bold text-white tracking-tighter">
                        {selected.efficiency || (Math.random() * (93 - 85) + 85).toFixed(1) + '%'}
                      </p>
                    </div>
                    <div className="px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-zinc-900/50 border border-white/5 text-center min-w-[120px] sm:min-w-[150px]">
                      <p className="text-[7px] sm:text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-1 opacity-70">REGISTRY</p>
                      <p className="text-lg sm:text-2xl font-black text-brand-purple tracking-tighter uppercase font-mono">
                        {selected.registry || 'CORE_STD_00'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 sm:space-y-10 text-left w-full">
                  <div className="space-y-4">
                    <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-zinc-700">EXECUTIVE BRIEFING</p>
                    <div className="h-[1px] w-full bg-white/5" />
                  </div>
                  <p className="text-lg sm:text-3xl text-zinc-400 font-medium leading-snug sm:leading-[1.35] max-w-4xl text-balance">
                    {selected.description}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 pt-10 pb-12 border-t border-white/5 w-full">
                  {selected.url && (
                    <button
                      onClick={() => {
                        if (selected.category === 'AI Automations') {
                          window.open(selected.url, '_blank');
                        } else {
                          setModalMode(modalMode === 'briefing' ? 'interactive' : 'briefing');
                        }
                      }}
                      className={`w-full md:w-auto px-10 sm:px-12 py-4 sm:py-5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 ${modalMode === 'interactive'
                        ? 'bg-brand-purple text-white'
                        : 'bg-white text-black hover:bg-zinc-200'
                        }`}
                    >
                      <span>
                        {selected.category === 'AI Automations'
                          ? 'OPEN_CASE_STUDY'
                          : modalMode === 'interactive' ? 'EXIT_TEST_INSTANCE' : 'INITIALIZE_TEST_INTERFACE'
                        }
                      </span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polyline></svg>
                    </button>
                  )}

                  <button
                    onClick={() => setSelected(null)}
                    className="w-full md:w-auto px-10 sm:px-12 py-4 sm:py-5 rounded-full border border-white/10 text-zinc-400 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
                  >
                    CLOSE_BRIEFING
                  </button>

                  <div className="w-full md:w-auto px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/5 text-zinc-700 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-center bg-zinc-950/30 ml-auto">
                    SYSTEM-ID: {selected.id.toUpperCase()}
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