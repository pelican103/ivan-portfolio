import React from 'react';
import { motion } from 'framer-motion';
import { Button, Section } from '../index';
import { scrollToSection } from '../../utils/smoothScroll';

export interface AboutProps {
  imageUrl?: string;
  content?: string;
}

const About: React.FC<AboutProps> = ({ 
  imageUrl,
  content = `I'm a passionate computer science student at UCLA with a deep interest in the intersection of technology, education, and entrepreneurship. As the founder of LionCity Tutors, I've experienced firsthand how technology can transform education and make learning more accessible to students across Singapore.

My journey in computer science is driven by a desire to build meaningful solutions that address real-world problems. Whether it's developing platforms that connect students with tutors, working on innovative software projects, or engaging with my community, I'm always looking for ways to leverage technology for positive impact.

When I'm not coding or studying, you can find me exploring new technologies, mentoring fellow students, or working on entrepreneurial ventures that aim to make education more accessible and effective for everyone.`
}) => {
  const handleContactClick = () => {
    scrollToSection('contact');
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <Section
      id="about"
      background="gray"
      padding="xl"
      className="relative"
    >
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Image Column */}
        <motion.div
          className="flex justify-center lg:justify-start order-1 lg:order-1"
          variants={imageVariants}
        >
          <div className="relative">

            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-linear-to-br from-[#2774AE] to-blue-400 flex items-center justify-center">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Ivan Fang"
                  className="w-full h-full object-cover"
                />
              ) : (

                <img
                  src="/src/assets/images/IMG_1957.jpg"
                  alt="Ivan Fang Profile"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#2774AE] rounded-full opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-60"></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-200 rounded-full opacity-40"></div>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div
          className="order-2 lg:order-2 text-center lg:text-left"
          variants={itemVariants}
        >

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#2774AE] mx-auto lg:mx-0 rounded-full"></div>
          </motion.div>


          <motion.div variants={itemVariants} className="space-y-6">
            {content.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>


          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleContactClick}
              className="px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default About;