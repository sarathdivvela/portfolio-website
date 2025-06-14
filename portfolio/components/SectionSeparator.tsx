'use client';

import { motion } from 'framer-motion';

const SectionSeparator = () => {
  return (
    <div className="w-full flex justify-center py-8">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '100%', opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut'
        }}
        viewport={{ once: true, amount: 0.5 }}
        className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent w-full"
      />
    </div>
  );
};

export default SectionSeparator; 