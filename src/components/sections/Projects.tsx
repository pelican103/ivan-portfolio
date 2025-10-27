import React from 'react';
import { motion } from 'framer-motion';
import { Section, ProjectCard, type Project } from '../index';

export interface ProjectsProps {
  className?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className = '' }) => {

  const projects: Project[] = [
    {
      id: 'lioncity-tutors',
      title: 'LionCity Tutors',
      description: 'A platform connecting students and tutors across Singapore, built with React, MongoDB, and Telegram Bot API. Designed to reduce the hassle of finding quality tutors.',
      technologies: ['React', 'MongoDB', 'Telegram Bot API', 'Javascript'],
      links: {
        demo: 'https://www.lioncitytutors.com/'
      },
    },
  ];


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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <Section
      id="projects"
      background="gray"
      padding="lg"
      className={className}
    >

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore some of the projects I've built to solve real-world problems and make a positive impact.
        </p>
      </motion.div>


      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={itemVariants}
            className="h-full"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>


      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-gray-500 italic">
          More exciting projects coming soon...
        </p>
      </motion.div>
    </Section>
  );
};

export default Projects;