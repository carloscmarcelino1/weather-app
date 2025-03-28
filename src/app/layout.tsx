import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

import { GlobalProvider } from '@/providers';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export const metadata: Metadata = {
  title: 'Wheater-city',
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="pt_BR" className={inter.className} suppressHydrationWarning>
    <body>
      <GlobalProvider>{children}</GlobalProvider>
    </body>
  </html>
);

export default RootLayout;
