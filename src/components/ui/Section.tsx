import React from 'react';
import { motion } from 'framer-motion';

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = '',
  containerClassName = '',
  background = 'white',
  padding = 'lg',
  animate = true,
}) => {

  const backgroundStyles = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-white',
  };


  const paddingStyles = {
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-20',
    xl: 'py-20 sm:py-24',
  };


  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const SectionComponent = animate ? motion.section : 'section';
  const animationProps = animate
    ? {
        variants: sectionVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: true, margin: '-100px' },
      }
    : {};

  return (
    <SectionComponent
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
      {...animationProps}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </SectionComponent>
  );
};

export default Section;