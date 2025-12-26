import React from 'react';
import { motion } from 'framer-motion';
import { Button, Section, ExplosiveImage, Boop } from '../index';
import { scrollToSection } from '../../utils/smoothScroll';

export interface AboutProps {
  content?: string;
}

const About: React.FC<AboutProps> = ({
  content = `Hailing from the sunny shores of Singapore, I'm currently a passionate computer science student at UCLA with a deep interest in the intersection of technology, education, and entrepreneurship. As the founder of LionCity Tutors, I've experienced firsthand how technology can transform education and make learning more accessible to students across Singapore.

My journey in computer science is driven by a desire to build meaningful solutions that address real-world problems. Whether it's developing platforms that connect students with tutors, working on innovative software projects, or engaging with my community, I'm always looking for ways to leverage technology for positive impact.

When I'm not coding or studying, you can either find me reading or doomscrolling on my bed.`
}) => {

  const addBoopToText = (text: string) => {
    const boopWords = ['passionate', 'technology', 'innovative', 'coding', 'UCLA'];
    const parts = [];
    let lastIndex = 0;

    // Find all matches and their positions
    const matches: Array<{ word: string; index: number; length: number }> = [];

    boopWords.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      let match;
      while ((match = regex.exec(text)) !== null) {
        matches.push({
          word: match[0],
          index: match.index,
          length: match[0].length
        });
      }
    });

    // Sort matches by index
    matches.sort((a, b) => a.index - b.index);

    // Build the result with boop components
    matches.forEach((match, i) => {
      // Add text before this match
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }

      // Add the boop component
      parts.push(
        <Boop key={`boop-${i}`} scale={1.1} y={-2} rotation={2}>
          <span className="text-[#2774AE] font-semibold cursor-pointer">
            {match.word}
          </span>
        </Boop>
      );

      lastIndex = match.index + match.length;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };
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
        <motion.div
          className="flex justify-center lg:justify-start order-1 lg:order-1"
          variants={imageVariants}
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-linear-to-br from-[#2774AE] to-blue-400 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl bg-linear-to-br from-[#2774AE] to-blue-400">

              <ExplosiveImage
                src={`${import.meta.env.BASE_URL}IMG_1957-modified.png`}
                alt="Ivan Fang Profile"
                className="w-full h-full"
                explosionThreshold={5}
                surpriseImage={`${import.meta.env.BASE_URL}IMG_5788-modified.png`}
                objectFit="contain"
              />
              </div>
            </div>

            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-[#2774AE] rounded-full opacity-80"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-60"
              animate={{
                x: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            />
            <motion.div
              className="absolute top-1/2 -left-8 w-6 h-6 bg-blue-200 rounded-full opacity-40"
              animate={{
                y: [0, -15, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2
              }}
            />
          </div>
        </motion.div>

        <motion.div
          className="order-2 lg:order-2 text-center lg:text-left"
          variants={itemVariants}
        >

          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-display-3 text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-[#2774AE] mx-auto lg:mx-0 rounded-full"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            {content.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-body text-gray-700 leading-relaxed"
              >
                {addBoopToText(paragraph)}
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