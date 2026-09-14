'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with ML Research',
    date: 'January 15, 2024',
    excerpt: 'Thoughts on beginning your machine learning research journey, tools to master, and common pitfalls.',
    tags: ['ML', 'Research', 'Guide'],
    slug: 'getting-started-ml',
  },
  {
    id: '2',
    title: 'Bridging AI and Biomedical Science',
    date: 'December 28, 2023',
    excerpt: 'Exploring the intersection of artificial intelligence and biomedical research, with real-world applications.',
    tags: ['AI', 'Biomedical', 'Research'],
    slug: 'ai-biomedical',
  },
  {
    id: '3',
    title: 'Best Practices for ML Engineering',
    date: 'December 10, 2023',
    excerpt: 'Practical advice on building production-ready machine learning systems and managing technical debt.',
    tags: ['ML Engineering', 'Best Practices'],
    slug: 'ml-engineering-practices',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-bio">
            Blog
          </h1>
          <p className="text-slate-400 mb-12 text-lg">Thoughts on AI, ML, research, and technology</p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              className="card-glass p-8 rounded-xl hover:border-green-300/50 transition-all cursor-pointer group"
              whileHover={{ x: 8 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-green-300 group-hover:text-green-200 transition mb-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-sm">{post.date}</p>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed">{post.excerpt}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={`/blog/${post.slug}`}
                className="inline-block text-green-400 hover:text-green-300 transition font-semibold"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 card-glass p-8 rounded-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">Create Blog Posts</h2>
          <p className="text-slate-400 mb-4">
            To add blog posts, create markdown files in a <code className="text-pink-300">blog/posts/</code> directory and update this page to render them.
          </p>
          <p className="text-slate-400">
            You can use a library like <code className="text-pink-300">gray-matter</code> to parse markdown with frontmatter metadata.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
