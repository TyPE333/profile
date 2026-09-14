'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-bio">
            Get In Touch
          </h1>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              className="card-glass p-6 rounded-xl"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">Email</h3>
              <p className="text-slate-400 mb-4">For research inquiries and professional correspondence</p>
              <a
                href="mailto:your.email@example.com"
                className="text-blue-400 hover:text-blue-300 transition font-semibold"
              >
                your.email@example.com
              </a>
            </motion.div>

            <motion.div
              className="card-glass p-6 rounded-xl"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl mb-3">🔗</div>
              <h3 className="text-xl font-bold text-green-300 mb-2">LinkedIn</h3>
              <p className="text-slate-400 mb-4">Connect with me on LinkedIn for updates</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition font-semibold"
              >
                View Profile →
              </a>
            </motion.div>

            <motion.div
              className="card-glass p-6 rounded-xl"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl mb-3">🐙</div>
              <h3 className="text-xl font-bold text-purple-300 mb-2">GitHub</h3>
              <p className="text-slate-400 mb-4">Check out my code and projects</p>
              <a
                href="https://github.com/TyPE333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition font-semibold"
              >
                View GitHub →
              </a>
            </motion.div>

            <motion.div
              className="card-glass p-6 rounded-xl"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-xl font-bold text-pink-300 mb-2">Research</h3>
              <p className="text-slate-400 mb-4">Follow my research on Google Scholar</p>
              <a
                href="https://scholar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition font-semibold"
              >
                View Scholar →
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="card-glass p-8 rounded-xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-400 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-neural text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="card-glass p-8 rounded-xl text-center"
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
          >
            <p className="text-slate-400 mb-4">
              I'm always interested in discussing research, collaboration opportunities, and new ideas.
            </p>
            <p className="text-slate-400">
              Feel free to reach out via any of the channels above!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
