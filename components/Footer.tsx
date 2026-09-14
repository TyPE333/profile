'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/50 border-t border-blue-500/20 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-blue-400 font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-blue-400 transition">About</Link></li>
              <li><Link href="/projects" className="hover:text-blue-400 transition">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-green-400 font-bold mb-4">Research</h3>
            <ul className="space-y-2">
              <li><Link href="/publications" className="hover:text-green-400 transition">Publications</Link></li>
              <li><Link href="/blog" className="hover:text-green-400 transition">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-purple-400 font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center">
          <p>&copy; {currentYear} CS PhD Student. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
