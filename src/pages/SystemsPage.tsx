
import React from 'react';
import { motion } from 'framer-motion';
import { Systems } from '../components/Systems';

export const SystemsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="pt-32"
    >
      <Systems />
    </motion.div>
  );
};
