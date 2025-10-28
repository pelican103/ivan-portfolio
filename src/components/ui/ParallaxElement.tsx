import React, { useEffect, useState } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed]);

  return (
    <motion.div
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;