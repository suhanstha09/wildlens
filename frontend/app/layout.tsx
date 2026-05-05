import type { ReactNode } from 'react';
import { Space_Grotesk, Work_Sans } from 'next/font/google';
import './globals.css';

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata = {
  title: 'Wild Lens | Wildlife Conservation System',
  description: 'Scientific dashboard UI for wildlife monitoring, review, and analytics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  );
}