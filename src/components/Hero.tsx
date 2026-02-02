import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
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

  return (
    <section className="pt-32 sm:pt-48 pb-10 flex flex-col items-start justify-center px-6 bg-white dark:bg-black overflow-hidden relative min-h-[80vh] sm:min-h-0">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] dark:opacity-[0.1]"
        style={{
          backgroundImage: 'radial-gradient(#B153D7 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl w-full z-10 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-left mb-12 sm:mb-16 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-black dark:text-white mb-6 uppercase leading-[0.9]">
            Builders, <br className="sm:hidden" /> not spectators.
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium leading-tight max-w-2xl">
            Engineered for systems, flows, and elegant shortcuts. Welcome to <span className="text-brand-purple font-black italic">NOSH</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="w-full max-w-sm sm:max-w-md"
        >
          <div className="glass p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-black/[0.05] dark:border-white/[0.05] w-full space-y-6 sm:space-y-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-brand-purple"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" /></svg>
            </div>

            <div className="flex justify-between items-center border-b border-black/5 dark:border-white/5 pb-5 sm:pb-6">
              <p className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-black dark:text-white opacity-40">Core Tuning</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
                <span className="text-[8px] font-mono font-black text-gray-400 dark:text-zinc-600 uppercase tracking-tighter">{status}</span>
              </div>
            </div>

            {[
              { key: 'logic', label: 'Logic' },
              { key: 'aesthetics', label: 'Visuals' },
              { key: 'sarcasm', label: 'Restraint' }
            ].map((p) => (
              <div key={p.key} className="space-y-2 sm:space-y-3 group/item">
                <div className="flex justify-between text-[10px] sm:text-[11px] font-bold">
                  <span className="text-gray-500 group-hover/item:text-brand-purple transition-colors uppercase tracking-widest">{p.label}</span>
                  <span className="text-black dark:text-white font-mono">{params[p.key as keyof typeof params]}%</span>
                </div>
                <input
                  type="range"
                  min="0" max="100"
                  value={params[p.key as keyof typeof params]}
                  onChange={(e) => setParams({ ...params, [p.key]: parseInt(e.target.value) })}
                  className="w-full h-1 sm:h-1.5 bg-black/5 dark:bg-white/5 rounded-lg appearance-none cursor-pointer accent-brand-purple"
                />
              </div>
            ))}

            <div className="pt-2 sm:pt-4 flex justify-start">
              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-700">System Interface // v2.0.26</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};