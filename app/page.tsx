'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />

        <motion.div
          className="relative z-10 text-center max-w-3xl px-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-neural">
              CS PhD Student
            </h1>
          </motion.div>

          <motion.div variants={item}>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
              Exploring the intersection of <span className="text-blue-400 font-semibold">AI</span>, 
              <span className="text-green-400 font-semibold"> Biomedical Research</span>, and 
              <span className="text-purple-400 font-semibold"> Machine Learning Engineering</span>
            </p>
          </motion.div>

          <motion.div variants={item} className="text-slate-400 mb-12">
            <p className="text-lg">Mathematics • Statistics • Deep Learning • Data Science</p>
          </motion.div>

          <motion.div variants={item} className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/about"
              className="px-8 py-3 rounded-lg bg-gradient-neural text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Learn More
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3 rounded-lg border border-blue-400/50 text-blue-300 font-semibold hover:bg-blue-400/10 transition-all"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {[
              {
                title: 'Publications',
                description: 'Research papers and academic contributions',
                href: '/publications',
                gradient: 'gradient-neural',
              },
              {
                title: 'Projects',
                description: 'AI, ML, and biomedical research projects',
                href: '/projects',
                gradient: 'gradient-bio',
              },
              {
                title: 'Blog',
                description: 'Thoughts on ML, research, and technology',
                href: '/blog',
                gradient: 'gradient-neural',
              },
            ].map((section, idx) => (
              <Link key={idx} href={section.href}>
                <motion.div
                  className={`card-glass p-8 rounded-xl cursor-pointer hover:border-blue-300/50 transition-all h-full ${section.gradient} bg-opacity-10`}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)' }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-white">{section.title}</h3>
                  <p className="text-slate-300">{section.description}</p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
