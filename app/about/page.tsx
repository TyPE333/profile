'use client';

import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
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
            About Me
          </h1>
        </motion.div>

        <motion.div
          className="space-y-8 text-lg text-slate-300 leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card-glass p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Background</h2>
            <p>
              I'm a CS PhD student passionate about advancing machine learning and artificial intelligence with applications
              in biomedical research. My work spans the intersection of deep learning, statistical inference, and computational biology.
            </p>
          </div>

          <div className="card-glass p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Research Interests</h2>
            <ul className="space-y-3">
              <li>• <span className="text-blue-300">Machine Learning Engineering</span> - Building robust, scalable ML systems</li>
              <li>• <span className="text-green-300">Biomedical AI</span> - Applying ML to healthcare and biological problems</li>
              <li>• <span className="text-purple-300">Deep Learning</span> - Neural networks and modern architectures</li>
              <li>• <span className="text-pink-300">Statistical Methods</span> - Rigorous statistical foundation for ML</li>
              <li>• <span className="text-cyan-300">Mathematical Foundations</span> - Theory behind algorithms and models</li>
            </ul>
          </div>

          <div className="card-glass p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-blue-300 font-semibold mb-2">ML/AI Frameworks</h3>
                <p>PyTorch, TensorFlow, JAX, scikit-learn, XGBoost</p>
              </div>
              <div>
                <h3 className="text-green-300 font-semibold mb-2">Languages</h3>
                <p>Python, C++, Java, R, SQL</p>
              </div>
              <div>
                <h3 className="text-purple-300 font-semibold mb-2">Mathematics</h3>
                <p>Linear Algebra, Probability, Statistics, Optimization</p>
              </div>
              <div>
                <h3 className="text-pink-300 font-semibold mb-2">Tools & Platforms</h3>
                <p>Git, Docker, AWS, GCP, HPC, Jupyter</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
