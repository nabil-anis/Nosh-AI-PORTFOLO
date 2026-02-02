
import React from 'react';
import { motion } from 'framer-motion';
import { Gallery } from '../components/Gallery.tsx';

export const GalleryPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Gallery />
    </motion.div>
  );
};
