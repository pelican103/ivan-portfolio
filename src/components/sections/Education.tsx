import React from 'react';
import { motion } from 'framer-motion';
import { Section, Timeline } from '../index';
import type { TimelineEntry } from '../ui/Timeline';

export interface EducationProps {
  className?: string;
}

const Education: React.FC<EducationProps> = ({ className = '' }) => {
  // Organized in reverse chronological order (most recent first)
  const educationEntries: TimelineEntry[] = [
    {
      id: 'ucla',
      title: 'B.S. Computer Science',
      organization: 'University of California, Los Angeles (UCLA)',
      period: '2025–2029',
      description: 'Pursuing a Bachelor of Science in Computer Science with a focus on software engineering, algorithms, and data structures. Actively engaged in coursework covering programming languages, computer systems, and software development methodologies. Participating in research opportunities and collaborative projects that bridge technology and real-world applications.',
      type: 'education',
    },
    {
      id: 'hwa-chong',
      title: 'GCE A Levels',
      organization: 'Hwa Chong Institution',
      period: '2020-2024',
      description: 'Completed comprehensive pre-university education with strong academic performance. Served in leadership roles including student government and various extracurricular organizations. Developed foundational skills in mathematics, sciences, and critical thinking while actively participating in community service and leadership development programs.',
      type: 'education',
    },
  ];


  const titleVariants = {
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
      id="education"
      background="gray"
      padding="xl"
      className={className}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-[#2774AE] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey in computer science and leadership development.
          </p>
        </motion.div>

        {/* Timeline */}
        <Timeline entries={educationEntries} />
      </div>
    </Section>
  );
};

export default Education;