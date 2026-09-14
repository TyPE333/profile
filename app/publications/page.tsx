'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface Publication {
  id: number;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  doi?: string;
  arxiv?: string;
  abstract: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: 'Sample Publication Title Here',
    authors: ['Your Name', 'Collaborator 1', 'Collaborator 2'],
    year: 2024,
    venue: 'International Conference on Machine Learning (ICML)',
    arxiv: 'https://arxiv.org/abs/2401.12345',
    doi: 'https://doi.org/10.1234/example',
    abstract: 'Replace this with your actual abstract. This section will display your research papers and publications.',
  },
  {
    id: 2,
    title: 'Another Research Paper',
    authors: ['Your Name', 'Collaborator 3'],
    year: 2023,
    venue: 'NeurIPS Workshop on Biomedical AI',
    arxiv: 'https://arxiv.org/abs/2312.54321',
    abstract: 'Brief description of your research. Add real publications as you progress in your PhD.',
  },
];

export default function Publications() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-neural">
            Publications
          </h1>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {publications.length === 0 ? (
            <div className="card-glass p-8 rounded-xl text-center text-slate-400">
              <p>No publications yet. Check back soon!</p>
            </div>
          ) : (
            publications.map((pub, idx) => (
              <motion.div
                key={pub.id}
                className="card-glass p-8 rounded-xl hover:border-blue-300/50 transition-all"
                whileHover={{ y: -4 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-blue-300 mb-2">{pub.title}</h2>
                    <p className="text-slate-400 mb-2">
                      {pub.authors.join(', ')}
                    </p>
                    <p className="text-sm text-slate-500">
                      {pub.venue} • {pub.year}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    {pub.arxiv && (
                      <a
                        href={pub.arxiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 transition text-sm"
                      >
                        arXiv
                      </a>
                    )}
                    {pub.doi && (
                      <a
                        href={pub.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded bg-green-500/20 text-green-300 hover:bg-green-500/30 transition text-sm"
                      >
                        DOI
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">{pub.abstract}</p>
              </motion.div>
            ))
          )}
        </motion.div>

        <motion.div
          className="mt-16 card-glass p-8 rounded-xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
        >
          <h2 className="text-2xl font-bold text-purple-400 mb-4">Add Your Publications</h2>
          <p className="text-slate-400 mb-4">
            To add your publications, edit the <code className="text-pink-300">app/publications/page.tsx</code> file and add entries to the <code className="text-pink-300">publications</code> array.
          </p>
          <p className="text-slate-400">
            Include title, authors, year, venue, abstract, and optionally links to arXiv and DOI.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
