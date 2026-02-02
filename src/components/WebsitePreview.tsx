import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WebsitePreviewProps {
    url: string;
    title: string;
}

export const WebsitePreview: React.FC<WebsitePreviewProps> = ({ url, title }) => {
    const [iframeError, setIframeError] = useState(false);

    return (
        <div className="w-full h-full rounded-[1.5rem] bg-[#1a1a1a] overflow-hidden border border-white/10 flex flex-col shadow-2xl relative">
            {/* Browser Bar */}
            <div className="h-10 bg-[#0A0A0A] flex items-center px-4 gap-4 shrink-0 border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 h-6 bg-[#1a1a1a] rounded flex items-center px-3">
                    <span className="text-[10px] text-gray-500 font-mono truncate">{url}</span>
                </div>
            </div>

            {/* Browser Content */}
            <div className="flex-1 bg-white relative">
                {!iframeError ? (
                    <iframe
                        src={url}
                        className="w-full h-full border-none"
                        title={title}
                        onError={() => setIframeError(true)}
                        onLoad={(e) => {
                            // Fallback check if load implies access denied in some browsers (hard to catch cross-origin though)
                            // This is mostly to catch strict network errors
                            try {
                                // Attempting to access contentWindow might throw if cross-origin
                            } catch (e) {
                                // This is expected for standard cross-origin
                            }
                        }}
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0A0A] text-white">
                        <p className="text-sm font-bold opacity-60">PREVIEW_BLOCKED_BY_SOURCE</p>
                    </div>
                )}

                {/* Overlay for interaction protection or just visual cue? */}
                {/* We leave it interactive so user can scroll */}
            </div>

            {/* Launch Button Overlay (always available) */}
            <div className="absolute bottom-6 right-6">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-brand-purple text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-brand-purple/20"
                >
                    <span>Launch Site</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
            </div>
        </div>
    );
};
