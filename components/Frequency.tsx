
import React from 'react';
import { motion } from 'framer-motion';
import { ATMOSPHERE } from '../constants';

export const Frequency: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-white dark:bg-black overflow-hidden relative">
       {/* Ambient Lighting Background Blobs */}
      <div className="ambient-light top-[-200px] right-[-200px] opacity-20 animate-float" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white mb-6">Frequency.</h2>
          <p className="text-lg text-gray-400 tracking-tight italic">In-situ.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 group">
          {ATMOSPHERE.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden transition-all duration-700 hover:z-10 hover:scale-105 hover:!opacity-100 group-hover:opacity-30 border border-transparent hover:border-brand-purple/30 hover:shadow-[0_0_30px_rgba(177,83,215,0.3)]"
            >
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
