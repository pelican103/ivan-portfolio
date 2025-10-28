import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ className = '' }) => {
  const elements = [
    { emoji: '💻', size: 'text-4xl', delay: 0 },
    { emoji: '💻', size: 'text-4xl', delay: 0 },
    { emoji: '💻', size: 'text-4xl', delay: 0 },
    { emoji: '🚀', size: 'text-3xl', delay: 1 },
    { emoji: '🚀', size: 'text-3xl', delay: 1 },
    { emoji: '⚡', size: 'text-2xl', delay: 2 },
    { emoji: '🎯', size: 'text-3xl', delay: 3 },
    { emoji: '🎯', size: 'text-3xl', delay: 3 },
    { emoji: '🎯', size: 'text-3xl', delay: 3 },
    { emoji: '✨', size: 'text-2xl', delay: 4 },
    { emoji: '✨', size: 'text-2xl', delay: 4 },
    { emoji: '✨', size: 'text-2xl', delay: 4 },
    { emoji: '🔥', size: 'text-3xl', delay: 5 },
  ];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} opacity-20`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, Math.random() * 360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: element.delay,
            ease: 'easeInOut',
          }}
        >
          {element.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;