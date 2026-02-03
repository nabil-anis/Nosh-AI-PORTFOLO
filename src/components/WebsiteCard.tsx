import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WebsiteCardProps {
    url: string;
    title: string;
    isEmbeddable?: boolean;
}

type Viewport = 'desktop' | 'tablet' | 'mobile';

export const WebsiteCard: React.FC<WebsiteCardProps> = ({ url, title, isEmbeddable = true }) => {
    const [isActive, setIsActive] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [viewport, setViewport] = useState<Viewport>('desktop');
    const [logs, setLogs] = useState<string[]>([]);

    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isActive && !isLoaded) {
            const initialLogs = [
                'INITIALIZING_HANDSHAKE...',
                `RESOLVING_HOST: ${url.replace('https://', '').split('/')[0]}`,
                'ESTABLISHING_TLS_TUNNEL...',
                'MOUNTING_REMOTE_ASSETS...',
                'STARTING_LIVE_STREAM...',
                isEmbeddable ? 'SYSTEM_STABLE.' : 'HANDSHAKE_COMPLETED.'
            ];

            let currentIndex = 0;
            const interval = setInterval(() => {
                if (currentIndex < initialLogs.length) {
                    setLogs(prev => [...prev, initialLogs[currentIndex]]);
                    currentIndex++;

                    if (terminalRef.current) {
                        terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
                    }
                } else {
                    clearInterval(interval);
                    setTimeout(() => setIsLoaded(true), 800);
                }
            }, 400); // Faster logs for better UX

            return () => clearInterval(interval);
        }
    }, [isActive, isLoaded, url, isEmbeddable]);

    return (
        <div className="w-full h-full rounded-[1.5rem] bg-[#0A0A0A] overflow-hidden border border-white/10 flex flex-col shadow-2xl relative group">
            {/* Browser Bar */}
            <div className="h-10 bg-[#0A0A0A] flex items-center px-4 gap-4 shrink-0 border-b border-white/5 z-20 relative">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>

                {/* URL Bar */}
                <div className="flex-1 max-w-xl mx-auto h-6 bg-[#1a1a1a] rounded-md flex items-center px-3 justify-center">
                    <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        {url.replace('https://', '')}
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="hidden sm:flex rounded-md bg-[#1a1a1a] p-0.5">
                        <div className={`p-1 rounded ${viewport === 'desktop' ? 'bg-white/10 text-white' : 'text-zinc-600'}`}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                        </div>
                        <div className="p-1 rounded text-zinc-600">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 relative bg-black">
                <AnimatePresence mode="wait">
                    {!isActive && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsActive(true)}
                            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#050505] cursor-pointer group/overlay"
                        >
                            {/* Grid Background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover/overlay:scale-110 group-hover/overlay:border-brand-purple/50 transition-all duration-500 shadow-2xl">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-white"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                                </div>
                                <h4 className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mb-2">Initialize Production Interface</h4>
                                <p className="text-zinc-700 text-[9px] italic">Handshake required for live data stream</p>
                            </div>
                        </motion.div>
                    )}

                    {isActive && !isLoaded && (
                        <motion.div
                            key="terminal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-20 bg-black p-8 font-mono text-xs overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                            <div ref={terminalRef} className="h-full overflow-y-auto no-scrollbar space-y-2 relative z-10">
                                {logs.map((log, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="text-green-500/80"
                                    >
                                        <span className="opacity-50 mr-2">[{new Date().toLocaleTimeString()}]</span>
                                        {log}
                                    </motion.div>
                                ))}
                                <motion.div
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-2 h-4 bg-green-500"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Live Content */}
                {isActive && isLoaded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-full h-full bg-white relative"
                    >
                        {isEmbeddable ? (
                            <iframe
                                src={url}
                                className="w-full h-full border-none"
                                title={title}
                            />
                        ) : (
                            <div className="w-full h-full bg-[#050505] flex flex-col items-center justify-center p-8 text-center relative">
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center mb-6 opacity-40">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-brand-purple"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                </div>
                                <h5 className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Remote Access Resticted</h5>
                                <p className="text-zinc-600 text-xs font-medium max-w-xs leading-relaxed mb-8">
                                    For security architecture reasons, this system cannot be proxied through an iframe. Initialize a direct connection to view the live deployment.
                                </p>

                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 rounded-full bg-brand-purple text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-brand-purple/20"
                                >
                                    Egress to System
                                </a>
                            </div>
                        )}

                        {/* Launch Button Overlay - Only for embeddable sites to provide an escape */}
                        {isEmbeddable && (
                            <div className="absolute bottom-6 right-6">
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-zinc-900/90 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-transparent transition-all backdrop-blur-md"
                                >
                                    <span>Independent Instance</span>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                                </a>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
};
