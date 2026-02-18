import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Orchestration: React.FC = () => {
  const [params, setParams] = useState({ logic: 94, aesthetics: 88, sarcasm: 12 });
  const [status, setStatus] = useState('SYSTEM_STABLE');

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
      desc: 'Orchestrating autonomous logic flows that replace repetitive cognitive tasks with high-precision AI agents.',
      specs: ['Low-Latency', 'Scalable Architecture', 'RAG Integration'],
      icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z'
    },
    {
      label: 'Websites',
      title: 'Performance Engines',
      desc: 'Bespoke digital platforms built with a focus on micro-interactions, low-latency, and aesthetic rigour.',
      specs: ['React/Next.js', 'Framer Motion', 'Sub-second Load'],
      icon: 'M21 12H3m18 0a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      label: 'Chatbots',
      title: 'Cognitive Interfaces',
      desc: 'Deployment of LLM-powered assistants designed to navigate complex customer support and internal logic tiers.',
      specs: ['Custom Knowledge', '24/7 Availability', 'Context-Aware'],
      icon: 'M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    },
    {
      label: 'Voice Agents',
      title: 'Autonomous Tele-Infra',
      desc: 'Voice-to-voice communication systems with near-zero latency, delivering human-like vocal cadence and reasoning.',
      specs: ['Vapi/Twilio Stack', '0.5s Latency', 'Multi-Lingual'],
      icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z'
    },
    {
      label: 'System Design',
      title: 'Custom Infrastructure',
      desc: 'Architecting the hidden layers of your digital ecosystem. Secure, robust, and deliberately precise.',
      specs: ['Cloud-Native', 'Security-First', 'API Orchestration'],
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4'
    }
  ];

  return (
    <section className="pb-20 px-6 bg-white dark:bg-black relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#B153D7 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-7"
          >
            <span className="text-brand-purple text-[10px] font-black tracking-[0.5em] uppercase mb-8 inline-block drop-shadow-[0_0_8px_rgba(177,83,215,0.4)]">BILAL ZINDANI CAPABILITIES</span>
            <h2 className="text-5xl md:text-[7vw] font-bold tracking-tighter text-black dark:text-white leading-[0.85] mb-12">
              Systems,<br /><span className="text-gray-300 dark:text-zinc-800 italic">Orchestrated.</span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium max-w-xl leading-tight text-balance">
              Technical infrastructure for the next era. Premium AI ecosystems designed for absolute precision and <span className="text-brand-purple italic drop-shadow-[0_0_12px_rgba(177,83,215,0.3)]">zero noise.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="glass p-8 rounded-[2.5rem] border border-black/[0.05] dark:border-white/[0.05] w-full max-w-sm space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
              </div>

              <div className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-4">
                <p className="text-[9px] font-black tracking-widest uppercase text-brand-purple">Core Tuning</p>
                <div className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[7px] font-mono font-black text-gray-400 dark:text-zinc-600 uppercase tracking-tighter">{status}</span>
                </div>
              </div>

              {[
                { key: 'logic', label: 'Logic', color: 'bg-brand-purple' },
                { key: 'aesthetics', label: 'Visuals', color: 'bg-brand-pink' },
                { key: 'sarcasm', label: 'Restraint', color: 'bg-orange-500' }
              ].map((p) => (
                <div key={p.key} className="space-y-2 group/item">
                  <div className="flex justify-between text-[10px] font-bold">
                    <span className="text-gray-400 group-hover/item:text-brand-purple transition-colors uppercase tracking-widest">{p.label}</span>
                    <span className="text-black dark:text-white font-mono">{params[p.key as keyof typeof params]}%</span>
                  </div>
                  <input
                    type="range"
                    min="0" max="100"
                    value={params[p.key as keyof typeof params]}
                    onChange={(e) => setParams({ ...params, [p.key]: parseInt(e.target.value) })}
                    className="w-full h-1 bg-black/5 dark:bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                  />
                </div>
              ))}

              <div className="pt-2 flex justify-center">
                <span className="text-[8px] font-black uppercase tracking-[0.4em] text-gray-300 dark:text-zinc-800">Interface // v2.0.26</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group p-10 rounded-[3rem] bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-black/[0.05] dark:border-white/[0.05] hover:border-brand-purple/40 transition-all duration-700 relative overflow-hidden shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(177,83,215,0.25)]"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-20 group-hover:text-brand-purple transition-all duration-700">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d={service.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="mb-8">
                  <p className="text-brand-purple text-[9px] font-black tracking-[0.4em] uppercase mb-4">{service.label}</p>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4 tracking-tight leading-tight group-hover:text-brand-purple transition-colors">{service.title}</h3>
                  <p className="text-sm text-gray-400 dark:text-zinc-500 font-medium leading-relaxed mb-8">{service.desc}</p>
                </div>

                <div className="mt-auto space-y-3">
                  <p className="text-[8px] font-black tracking-[0.2em] uppercase text-gray-300 dark:text-zinc-700 border-b border-black/5 dark:border-white/5 pb-2">System Specs</p>
                  <div className="flex flex-wrap gap-2">
                    {service.specs.map((spec, j) => (
                      <span key={j} className="text-[10px] font-bold text-black dark:text-white/80 flex items-center gap-1.5 px-2 py-1 rounded-md bg-black/[0.02] dark:bg-white/[0.02]">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-brand-purple to-brand-pink shadow-[0_0_8px_rgba(177,83,215,0.6)]" />
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
            whileHover={{ scale: 1.05 }}
            className="group p-10 rounded-[3rem] bg-gradient-brand text-white flex flex-col justify-between relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(177,83,215,0.5)] transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold tracking-tighter mb-4 drop-shadow-md">Start the<br />Handshake.</h3>
              <p className="text-sm font-medium text-white/80 leading-relaxed mb-10">Have a custom workflow that needs automation? Let's build it.</p>
            </div>

            <a
              href="mailto:bilalzindani1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center justify-between w-full p-4 rounded-2xl bg-white/20 border border-white/30 hover:bg-white/30 transition-all group/btn"
            >
              <span className="text-[10px] font-black uppercase tracking-widest">Inquire Now</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};