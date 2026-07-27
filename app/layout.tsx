import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/lib';
import { Footer, NavigationSection } from '@/components';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='pl'
      className={`${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col'>
        <NavigationSection />
        {children}
        <Footer />
      </body>
    </html>
  );
}
