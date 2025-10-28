import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    if (onClick) onClick();
  };

  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  

  const variantStyles = {
    primary: 'bg-[#2774AE] text-white hover:bg-[#1e5a8a] focus:ring-[#2774AE] shadow-md hover:shadow-lg',
    secondary: 'bg-white text-[#2774AE] border-2 border-[#2774AE] hover:bg-[#2774AE] hover:text-white focus:ring-[#2774AE]',
    outline: 'bg-transparent text-[#2774AE] border-2 border-[#2774AE] hover:bg-[#2774AE] hover:text-white focus:ring-[#2774AE]'
  };
  

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  const buttonContent = (
    <motion.span
      className="flex items-center justify-center relative"
    >
      {children}
      
      {/* Click sparkle effect */}
      <AnimatePresence>
        {isClicked && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                initial={{ 
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  x: Math.cos(i * 60 * Math.PI / 180) * 20,
                  y: Math.sin(i * 60 * Math.PI / 180) * 20,
                }}
                transition={{ 
                  duration: 0.4,
                  ease: 'easeOut'
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.span>
  );
  
  if (href) {
    return (
      <motion.a
        href={href}
        target = "_blank"
        className={`${combinedClassName} relative overflow-hidden`}
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 10px 25px rgba(39, 116, 174, 0.3)'
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
      >
        {buttonContent}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      type={type}
      className={`${combinedClassName} relative overflow-hidden`}
      onClick={handleClick}
      disabled={disabled}
      whileHover={disabled ? {} : { 
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(39, 116, 174, 0.3)'
      }}
      whileTap={disabled ? {} : { scale: 0.95 }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;