import React from 'react';
import { motion } from 'framer-motion';
import { Button, Section, Boop, FloatingElements } from '../index';
import { scrollToSection } from '../../utils/smoothScroll';

export interface HeroProps {
  onCTAClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  const handleViewWorkClick = () => {
    if (onCTAClick) {
      onCTAClick();
    } else {
      scrollToSection('projects');
    }
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <Section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#2774AE] via-blue-500 to-white relative overflow-hidden"
      padding="xl"
      animate={false} 
    >

      <div className="absolute inset-0 bg-linear-to-br from-[#2774AE]/90 via-blue-500/70 to-white/90" />
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      {/* Floating animated elements */}
      <FloatingElements />
      

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.h1
          variants={itemVariants}
          className="text-display-1 text-white mb-8 leading-none"
        >
          Hi, I'm Ivan Fang{' '}
          <Boop rotation={15} scale={1.2} timing={200}>
            <motion.span
              className="inline-block"
              animate={{
                rotate: [0, 14, -8, 14, -4, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: 'easeInOut',
              }}
            >
              👋
            </motion.span>
          </Boop>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-heading-1 font-medium text-blue-100 mb-6 leading-snug"
        >
          Computer Scientist at UCLA{' '}
          <Boop y={-8} scale={1.3} timing={300}>
            💙
          </Boop>
          <Boop y={-8} scale={1.3} timing={300}>
            💛
          </Boop>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-body-large text-blue-50 mb-12 leading-relaxed max-w-3xl mx-auto"
        >
          I love anything software!
        </motion.p>


        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={handleViewWorkClick}
            className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View My Work
          </Button>
        </motion.div>



      </motion.div>
    </Section>
  );
};

export default Hero;