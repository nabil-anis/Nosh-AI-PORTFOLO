
import React from 'react';
import { motion } from 'framer-motion';
import { Work } from '../components/Work.tsx';

export const WorkPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Work />
    </motion.div>
  );
};
