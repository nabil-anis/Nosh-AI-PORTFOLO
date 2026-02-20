import React from 'react';
import { motion } from 'framer-motion';

interface AboutOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutOverlay: React.FC<AboutOverlayProps> = ({ isOpen, onClose }) => {
  const flowSteps = [
    {
      title: 'Discovery',
      desc: 'Identifying system friction. We map out manual bottlenecks and constraints.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
      )
    },
    {
      title: 'Architecture',
      desc: 'Engineering logic gates. Designing multi-agent orchestration points.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7.5 4.27 9 5.15" /><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" /><path d="m3.3 7 8.7 5 8.7-5" /><path d="M12 22V12" />
        </svg>
      )
    },
    {
      title: 'Deployment',
      desc: 'Initialization. Pushing agentic loops into your live production stack.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8" /><path d="m16 6-4 4-4-4" /><rect width="20" height="8" x="2" y="14" rx="2" />
        </svg>
      )
    },
    {
      title: 'Optimization',
      desc: 'Refining feedback loops. Monitoring and logic upgrades for scale.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    }
  ];

  const techStack = [
    { category: 'Automations', tools: ['n8n', 'Zapier', 'Make', 'Python Scripts', 'Playwright', 'Puppeteer', 'Axiom.ai'] },
    { category: 'Chatbots', tools: ['Voiceflow', 'n8n', 'Vapi', 'Retell', 'Zapier', 'Make', 'Botpress', 'Dify.ai', 'LangChain'] },
    { category: 'Voice Agents', tools: ['Vapi', 'Retell', 'Eleven Labs', 'Deepgram', 'Twilio', 'Bland AI', 'Play.ht'] },
    { category: 'Intelligence (AI)', tools: ['Claude 3.5', 'OpenAI GPT-4o', 'Gemini 1.5 Pro', 'Groq (LPU)', 'xAI Grok', 'Llama 3', 'Mistral Large', 'Perplexity'] },
    { category: 'CRMs & Ecosystems', tools: ['GHL (GoHighLevel)', 'HubSpot', 'Salesforce', 'Pipedrive', 'Monday.com'] },
    { category: 'Vector & DBs', tools: ['Pinecone', 'Supabase', 'Firebase', 'Weaviate', 'MongoDB', 'Redis', 'PostgreSQL'] },
    { category: 'Infrastructure', tools: ['Vercel', 'AWS', 'Google Cloud', 'Docker', 'Railway', 'GitHub Actions'] }
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[150] bg-white dark:bg-black p-4 md:p-12 flex flex-col items-center overflow-y-auto overflow-x-hidden no-scrollbar scroll-smooth"
    >
      <div className="ambient-light top-[-100px] left-[-100px] opacity-10 animate-float" />
      <div className="ambient-light ambient-light-pink bottom-[-100px] right-[-100px] opacity-10 animate-float" style={{ animationDelay: '3s' }} />

      <button
        onClick={onClose}
        className="fixed top-8 right-8 w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-brand-purple hover:text-white transition-all z-[160] shadow-2xl backdrop-blur-md text-black dark:text-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>

      <div className="max-w-5xl w-full pt-12 pb-32 relative z-10 overflow-x-hidden">
        <section className="mb-32 flex flex-col items-center text-center px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full flex flex-col items-center"
          >
            <div className="flex flex-col items-center max-w-full">
              <div className="relative w-24 h-24 md:w-40 md:h-40 flex items-center justify-center z-0">
                <img
                  src='/nosh-logo.webp'
                  alt="NOSH Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(177,83,215,0.3)] opacity-90"
                />
              </div>

              <div className="text-center -mt-6 md:-mt-10 relative z-10">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-black dark:text-white uppercase leading-none drop-shadow-sm">
                  NOSH-AI
                </h1>
                <p className="text-[10px] md:text-sm font-black tracking-[0.5em] text-zinc-400 dark:text-zinc-600 uppercase mt-4">
                  AUTOMATION ORCHESTRATION
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="max-w-2xl mt-16"
          >
            <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 font-medium leading-tight text-balance">
              Orchestrating autonomous logic. NOSH exists to <span className="text-brand-purple italic">bridge the gap</span> between human intent and machine execution.
            </p>
          </motion.div>

          {/* CV Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-purple dark:hover:bg-brand-purple hover:text-white dark:hover:text-white transition-all shadow-xl active:scale-95 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
              View CV
            </a>
            <a
              href="/cv.pdf"
              download
              className="px-8 py-4 rounded-full border border-black/10 dark:border-white/10 text-black dark:text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-brand-purple hover:text-white hover:border-transparent transition-all shadow-xl active:scale-95 flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              Download CV
            </a>
          </motion.div>
        </section>

        <section className="mb-40 px-4 md:px-0">
          <div className="flex flex-col items-center gap-4 mb-24 text-center">
            <span className="text-[10px] font-black tracking-[0.8em] uppercase text-brand-purple">THE HANDSHAKE FLOW</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black dark:text-white">How Systems Deploy.</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-y-16 md:gap-x-8 relative z-10">
              {flowSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded-[2.5rem] bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-brand-purple/40 group-hover:bg-brand-purple/5 transition-all duration-500 relative">
                    <div className="text-gray-400 dark:text-zinc-600 group-hover:text-brand-purple transition-colors duration-500">
                      {step.icon}
                    </div>
                  </div>

                  <div className="mb-4 text-[10px] font-black text-brand-purple/40 dark:text-brand-purple/30 tracking-[0.4em] uppercase">
                    Step 0{i + 1}
                  </div>

                  <div className="space-y-3 px-2">
                    <h3 className="text-lg font-bold text-black dark:text-white tracking-tight">{step.title}</h3>
                    <p className="text-xs text-gray-400 dark:text-zinc-500 leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 md:px-0">
          <div className="flex flex-col items-center gap-4 mb-20 text-center">
            <span className="text-[10px] font-black tracking-[0.8em] uppercase text-zinc-400 dark:text-zinc-600">THE ARSENAL</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black dark:text-white">Technical Infrastructure.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[3rem] bg-white dark:bg-zinc-950 border border-black/[0.05] dark:border-white/[0.05] hover:border-brand-purple/40 transition-all duration-500 shadow-sm"
              >
                <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-purple mb-8 text-center">{stack.category}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.tools.map((tool, j) => (
                    <span key={j} className="px-4 py-2 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.03] dark:border-white/[0.05] text-[11px] font-bold text-black/80 dark:text-white/60 hover:bg-brand-purple hover:text-white hover:border-transparent transition-all cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center py-20 border-t border-black/5 dark:border-white/5"
        >
          <div className="mb-12">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-black dark:text-white mb-6">Initialize Connection.</h3>
            <p className="text-gray-400 dark:text-zinc-600 text-sm font-medium">Available for architectural consultation and deployment orchestration for 2026.</p>
          </div>
          <a
            href="mailto:bilalzindani1@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-black dark:bg-white text-white dark:text-black text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            Deploy Handshake
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </motion.div>
      </div>
    </motion.div >
  );
};
