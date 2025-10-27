import React from 'react';
import { motion } from 'framer-motion';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  onClick,
}) => {

  const baseStyles = 'bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden';


  const hoverVariants = {
    initial: {
      scale: 1,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    hover: {
      scale: 1.02,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
  };

  const staticVariants = {
    initial: {
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
  };

  const combinedClassName = `${baseStyles} ${className} ${onClick ? 'cursor-pointer' : ''}`;

  return (
    <motion.div
      className={combinedClassName}
      variants={hover ? hoverVariants : staticVariants}
      initial="initial"
      whileHover={hover ? "hover" : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;