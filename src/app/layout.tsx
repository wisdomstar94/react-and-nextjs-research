import './globals.css';
import type { Metadata } from 'next';
import RootLayoutClient from './layout-client';

export const metadata: Metadata = {
  title: 'React And Next.js Research',
  description: 'This is React And Next.js Research Repository.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <RootLayoutClient />
        { children }
      </body>
    </html>
  );
}
