import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CS PhD Student - AI, Biomedical Research, ML Engineering',
  description: 'Personal profile of a CS PhD student focused on AI, biomedical research, machine learning engineering, mathematics, and statistics.',
  keywords: ['PhD', 'AI', 'Machine Learning', 'Biomedical', 'Research', 'Computer Science'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
