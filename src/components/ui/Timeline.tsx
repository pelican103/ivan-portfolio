  import React from 'react';
  import { motion } from 'framer-motion';
  import Card from './Card';

  export interface TimelineEntry {
    id: string;
    title: string;
    organization: string;
    period: string;
    description: string;
    type: 'experience' | 'education';
  }

  export interface TimelineProps {
    entries: TimelineEntry[];
    className?: string;
  }

  const Timeline: React.FC<TimelineProps> = ({ entries, className = '' }) => {

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

    const entryVariants = {
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
      <motion.div
        className={`space-y-6 ${className}`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {entries.map((entry, index) => (
          <motion.div
            key={entry.id}
            variants={entryVariants}
            className="relative"
          >
            <Card hover={false} className="p-6 sm:p-8">

              {index < entries.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-6 bg-gray-200 hidden sm:block"></div>
              )}
              

              <div className="absolute left-2 top-8 w-4 h-4 bg-[#2774AE] rounded-full border-4 border-white shadow-md hidden sm:block"></div>
              

              <div className="sm:ml-8">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                      {entry.title}
                    </h3>
                    <p className="text-lg text-[#2774AE] font-semibold">
                      {entry.organization}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-block px-3 py-1 bg-[#2774AE] bg-opacity-10 text-[#ffffff] text-sm font-medium rounded-full">
                      {entry.period}
                    </span>
                  </div>
                </div>
                

                 <div className="text-gray-700 leading-relaxed">
                  <ul className="list-disc pl-6 space-y-2 marker:text-[#2774AE]">
                    {entry.description
                      .split('\n')
                      .filter(line => line.trim() !== '')
                      .map((line, i) => (
                        <li key={i}>{line.trim()}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  export default Timeline;