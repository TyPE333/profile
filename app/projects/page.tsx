'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Machine Learning Project Title',
    description: 'A compelling description of your ML project. Explain the problem, your approach, and the results.',
    tags: ['PyTorch', 'Deep Learning', 'Computer Vision'],
    github: 'https://github.com/TyPE333',
  },
  {
    id: 2,
    title: 'Biomedical AI Application',
    description: 'Details about your biomedical research project. Include methodologies, datasets used, and key findings.',
    tags: ['Healthcare', 'Neural Networks', 'Data Science'],
    link: 'https://example.com',
  },
  {
    id: 3,
    title: 'Statistical Analysis Framework',
    description: 'Description of tools or frameworks you built for statistical analysis and research.',
    tags: ['Statistics', 'Python', 'R', 'Open Source'],
    github: 'https://github.com/TyPE333',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-neural">
            Projects
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="card-glass p-6 rounded-xl hover:border-blue-300/50 transition-all flex flex-col"
              whileHover={{ y: -8 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-xl font-bold text-blue-300 mb-3">{project.title}</h2>
              <p className="text-slate-300 mb-4 flex-1">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded bg-slate-700 text-slate-200 hover:bg-slate-600 transition text-sm"
                  >
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 rounded bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition text-sm"
                  >
                    View
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 card-glass p-8 rounded-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">Add Your Projects</h2>
          <p className="text-slate-400 mb-4">
            To add projects, edit the <code className="text-pink-300">app/projects/page.tsx</code> file and update the <code className="text-pink-300">projects</code> array.
          </p>
          <p className="text-slate-400">
            Include project title, description, relevant tags, and links to GitHub repositories or live demos.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
