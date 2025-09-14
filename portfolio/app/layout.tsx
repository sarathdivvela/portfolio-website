import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'sarath divvela - Portfolio',
 'Official portfolio of Sarath Divvela, Full Stack Developer. Explore projects, skills, and achievements. Search Sarath Divvela Portfolio, Sarath Developer, Sarath Fullstack Developer.',

  verification: {
    google: 'aKZHEnz6pjJF_zjU-ddx7RP00rXEoBgvKGnTP9vnRhg', // paste the code from Search Console
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
