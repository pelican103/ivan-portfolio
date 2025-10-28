import React from 'react';
import { motion } from 'framer-motion';
import { useBoop } from '../../hooks/useBoop';

interface BoopProps {
  children: React.ReactNode;
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  className?: string;
}

const Boop: React.FC<BoopProps> = ({
  children,
  x = 0,
  y = -4,
  rotation = 0,
  scale = 1.1,
  timing = 150,
  className = '',
}) => {
  const { style, trigger } = useBoop({
    x,
    y,
    rotation,
    scale,
    timing,
  });

  return (
    <motion.span
      style={style}
      onMouseEnter={trigger}
      className={`inline-block cursor-pointer ${className}`}
    >
      {children}
    </motion.span>
  );
};

export default Boop;