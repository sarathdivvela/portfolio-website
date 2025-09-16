import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'sarath divvela - Portfolio',
   description:'Official portfolio of Sarath Divvela, Full Stack Developer. Explore projects, skills, and achievements. Search Sarath Divvela Portfolio, Sarath Developer, Sarath Fullstack Developer.',

  verification: {
    google: 'aKZHEnz6pjJF_zjU-ddx7RP00rXEoBgvKGnTP9vnRhg', // paste the code from Search Console
  },
    icons: {
    icon: 'https://img.freepik.com/premium-vector/creative-letter-s-logo-design_633982-164.jpg',          // 32x32 or 64x64 works best
    apple: 'https://img.freepik.com/premium-vector/creative-letter-s-logo-design_633982-164.jpg',         // for iOS devices
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
