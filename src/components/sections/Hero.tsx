import React from 'react';
import { motion } from 'framer-motion';
import { Button, Section } from '../index';
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
      

      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Hi, I'm Ivan Fang{' '}
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
        </motion.h1>


        <motion.h2
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-100 mb-4 leading-relaxed"
        >
          Computer Scientist at UCLA
        </motion.h2>


        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-blue-50 mb-12 leading-relaxed max-w-3xl mx-auto"
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


        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;