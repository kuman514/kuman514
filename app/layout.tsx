import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { navNodes } from '^/app/header/nodes';
import Header from '^/shared/header';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'kuman514',
  // prettier-ignore
  description: 'kuman514\'s portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen w-screen`}>
        <Header navNodes={navNodes} />
        {children}
      </body>
    </html>
  );
}
