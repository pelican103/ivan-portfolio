import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import Card from './Card';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, technologies, links } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
    >
      <Card hover={true} className="p-6 h-full flex flex-col relative overflow-hidden">
      <motion.div
        className="absolute top-4 right-4 text-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? [0, 360] : 0
        }}
        transition={{ duration: 0.3 }}
      >
        ✨
      </motion.div>

      <motion.h3 
        className="text-xl font-bold text-gray-900 mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      <motion.p 
        className="text-gray-600 mb-4 grow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {description}
      </motion.p>

      {/* Technology Tags */}
      <motion.div 
        className="flex flex-wrap gap-2 mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {technologies.map((tech, index) => (
          <motion.span
            key={index}
            className="px-3 py-1 bg-[#2774AE]/10 text-[#2774AE] text-sm font-medium rounded-full border border-[#2774AE]/20 cursor-default"
            whileHover={{ 
              scale: 1.1,
              backgroundColor: 'rgba(39, 116, 174, 0.2)',
              transition: { type: 'spring', stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      <motion.div 
        className="flex gap-3 mt-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {links.demo && (
          <Button
            variant="primary"
            size="sm"
            href={links.demo}
            className="flex-1"
          >
            View Project
          </Button>
        )}
        {links.github && (
          <Button
            variant="outline"
            size="sm"
            href={links.github}
            className="flex-1"
          >
            GitHub
          </Button>
        )}
      </motion.div>
    </Card>
    </motion.div>
  );
};

export default ProjectCard;