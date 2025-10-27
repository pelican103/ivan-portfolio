import React from 'react';
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

  return (
    <Card hover={true} className="p-6 h-full flex flex-col">
      {/* Project Title */}
      <motion.h3 
        className="text-xl font-bold text-gray-900 mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>

      {/* Project Description */}
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
          <span
            key={index}
            className="px-3 py-1 bg-[#2774AE]/10 text-[#2774AE] text-sm font-medium rounded-full border border-[#2774AE]/20"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* Action Buttons */}
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
  );
};

export default ProjectCard;