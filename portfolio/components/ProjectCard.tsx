'use client';

import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
}

export default function ProjectCard({ title, description, technologies, imageUrl, projectUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -15, rotateX: -5 }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        rotateY: 0,
        rotateX: 0,
        transition: { 
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }
      }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 5,
        rotateX: 2,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl overflow-hidden backdrop-blur-sm hover-lift border border-blue-500/20"
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      <div className="relative group">
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
          style={{ transformStyle: "preserve-3d" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-white mb-2"
          whileHover={{ scale: 1.05, x: 5 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {description}
        </motion.p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                rotateY: 10,
                backgroundColor: "rgba(59, 130, 246, 0.2)"
              }}
              className="px-3 py-1 bg-blue-900/30 rounded-full text-sm text-blue-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <motion.a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ 
            scale: 1.05,
            rotateY: 10,
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.95, rotateY: -5 }}
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span>View Project</span>
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  );
} 