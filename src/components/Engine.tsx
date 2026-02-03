import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Engine: React.FC = () => {
  const [params, setParams] = useState({ logic: 94, aesthetics: 88, sarcasm: 12 });
  const [status, setStatus] = useState('SYSTEM_STABLE');
  const [showContactOptions, setShowContactOptions] = useState(false);

  const statuses = [
    'ORCHESTRATING_LOGIC',
    'EXECUTING_AGENTS',
    'RESOLVING_DEPENDENCIES',
    'OPTIMIZING_RAG_PIPELINES',
    'TERMINAL_STABLE'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(statuses[Math.floor(Math.random() * statuses.length)]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      label: 'AI Automations',
      title: 'Agentic Workflows',
      desc: 'Intelligent software agents that work for you 24/7, handling repetitive daily tasks automatically so you don\'t have to.',
      specs: ['Fast & Reliable', 'Smart Logic', 'Custom Data'],
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
    },
    {
      label: 'Websites',
      title: 'Performance Engines',
      desc: 'Beautiful, lightning-fast websites and apps designed to load instantly and look perfect on every screen.',
      specs: ['Modern Design', 'Fast Loading', 'Mobile Ready'],
      icon: 'M21 12H3m18 0a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      label: 'Chatbots',
      title: 'Cognitive Interfaces',
      desc: 'Smart assistants that talk to your customers, answer questions, and solve problems instantly, day or night.',
      specs: ['Instant Answers', 'Always Online', 'Smart Memory'],
      icon: 'M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    },
    {
      label: 'Voice Agents',
      title: 'Autonomous Tele-Infra',
      desc: 'Advanced voice systems that talk just like a person, perfect for answering calls and booking appointments without delay.',
      specs: ['Natural Voice', 'No Delay', 'Any Language'],
      icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
    },
    {
      label: 'System Design',
      title: 'Custom Infrastructure',
      desc: 'Building the secure, powerful technology behind your business to keep everything running smoothly and reliably.',
      specs: ['Private & Secure', 'Scalable Power', 'Seamless Sync'],
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
    }
  ];

  return (
    <section className="pb-24 sm:pb-32 px-6 bg-white dark:bg-black relative overflow-hidden transition-colors duration-700">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(#B153D7 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 xl:col-span-8 text-left"
          >
            <span className="text-brand-purple text-[9px] sm:text-[10px] font-black tracking-[0.5em] uppercase mb-6 sm:mb-8 inline-block">Systems, Orchestrated.</span>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-black dark:text-white leading-[0.9] mb-8 sm:mb-12">
              NOSH <br /><span className="text-gray-200 dark:text-zinc-800 italic">CAPABILITIES</span>
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium max-w-2xl leading-tight">
              Technical infrastructure for the next era. Premium AI ecosystems designed for absolute precision and <span className="text-brand-purple italic">zero noise.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end"
          >
            <div className="glass p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-black/[0.08] dark:border-white/[0.08] w-full max-w-[420px] space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-15 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-brand-purple"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
              </div>

              <div className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-5 sm:pb-6">
                <p className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-black dark:text-white opacity-40">Core Tuning</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                  <span className="text-[8px] font-mono font-black text-gray-400 dark:text-zinc-600 uppercase tracking-tighter">{status}</span>
                </div>
              </div>

              {[
                { key: 'logic', label: 'Logic' },
                { key: 'aesthetics', label: 'Visuals' },
                { key: 'sarcasm', label: 'Restraint' }
              ].map((p) => (
                <div key={p.key} className="space-y-3 group/item">
                  <div className="flex justify-between text-[10px] sm:text-[11px] font-bold">
                    <span className="text-gray-500 dark:text-zinc-500 group-hover/item:text-brand-purple transition-colors uppercase tracking-widest">{p.label}</span>
                    <span className="text-black dark:text-white font-mono">{params[p.key as keyof typeof params]}%</span>
                  </div>
                  <div className="relative h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={false}
                      animate={{ width: `${params[p.key as keyof typeof params]}%` }}
                      className="absolute inset-y-0 left-0 bg-brand-purple opacity-40"
                    />
                    <input
                      type="range"
                      min="0" max="100"
                      value={params[p.key as keyof typeof params]}
                      onChange={(e) => setParams({ ...params, [p.key]: parseInt(e.target.value) })}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                  </div>
                </div>
              ))}

              <div className="pt-2 sm:pt-4 flex justify-start">
                <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 dark:text-zinc-700">Interface // v2.0.26</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] bg-white/60 dark:bg-zinc-950/60 backdrop-blur-md border border-black/[0.05] dark:border-white/[0.05] hover:border-black/10 dark:hover:border-white/10 hover:shadow-[0_0_60px_15px_rgba(255,0,255,0.15)] transition-all duration-700 relative overflow-hidden shadow-sm"
            >
              <div className="absolute top-0 right-0 p-8 sm:p-10 opacity-[0.05] group-hover:opacity-20 transition-all duration-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]">
                  <path d={service.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="mb-8 sm:mb-10 text-left">
                  <p className="text-black dark:text-white opacity-40 text-[8px] sm:text-[9px] font-black tracking-[0.4em] uppercase mb-4">{service.title}</p>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-purple mb-4 sm:mb-5 tracking-tight leading-tight group-hover:text-black dark:group-hover:text-white transition-colors">{service.label}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-zinc-500 font-medium leading-relaxed mb-6 sm:mb-8">{service.desc}</p>
                </div>

                <div className="mt-auto space-y-4">
                  <p className="text-[8px] sm:text-[9px] font-black tracking-[0.2em] uppercase text-gray-300 dark:text-zinc-700 border-b border-black/5 dark:border-white/5 pb-3">Key Features</p>
                  <div className="flex flex-wrap gap-2">
                    {service.specs.map((spec, j) => (
                      <span key={j} className="text-[9px] sm:text-[10px] font-bold text-black dark:text-white/70 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.03] dark:border-white/[0.03]">
                        <div className="w-1 h-1 rounded-full bg-brand-purple" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={!showContactOptions ? { scale: 1.02 } : {}}
            className="group p-1 rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-brand text-white flex flex-col justify-between relative overflow-hidden shadow-lg transition-all duration-700"
          >
            <AnimatePresence mode="wait">
              {!showContactOptions ? (
                <motion.div
                  key="cta-initial"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col h-full p-8 sm:p-12 justify-between items-start"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <div className="relative z-10 text-left">
                    <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4 sm:mb-5 drop-shadow-md">Start the<br />Handshake.</h3>
                    <p className="text-xs sm:text-sm font-medium text-white/80 leading-relaxed mb-8 sm:mb-12">Have a custom workflow that needs automation? Let's build it.</p>
                  </div>

                  <button
                    onClick={() => setShowContactOptions(true)}
                    className="relative z-10 flex items-center justify-between w-full p-4 sm:p-5 rounded-2xl bg-white/20 border border-white/30 hover:bg-white/30 transition-all active:scale-95"
                  >
                    <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-widest">Inquire Now</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="cta-options"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col h-full p-6 sm:p-10 space-y-3 sm:space-y-4 items-start"
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.4em] opacity-80">Initialization Routes</span>
                    <button onClick={() => setShowContactOptions(false)} className="p-2 hover:bg-white/15 rounded-full transition-colors active:scale-90">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                    </button>
                  </div>

                  <button
                    data-cal-link="nosh-ai-automation/30-minutes-meeting"
                    className="w-full glass bg-white/10 hover:bg-white/25 border border-white/25 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-7 flex items-center gap-4 sm:gap-5 transition-all active:scale-95"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/20 flex items-center justify-center text-brand-purple shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest">Book Consultation</p>
                      <p className="text-[7px] sm:text-[8px] font-bold opacity-70 uppercase tracking-tighter mt-1">Formal Session</p>
                    </div>
                  </button>

                  <a
                    href="https://noshaiautomation.com/contact/"
                    target="_blank"
                    className="w-full glass bg-white/10 hover:bg-white/25 border border-white/25 rounded-[2rem] sm:rounded-[2.5rem] p-5 sm:p-7 flex items-center gap-4 sm:gap-5 transition-all active:scale-95"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/20 flex items-center justify-center text-brand-purple shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest">Email Us</p>
                      <p className="text-[7px] sm:text-[8px] font-bold opacity-70 uppercase tracking-tighter mt-1">Direct Channel</p>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};