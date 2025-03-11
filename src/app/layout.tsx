import { Inter } from 'next/font/google';
import './globals.scss';
import { getLocale, getMessages } from 'next-intl/server';

// Types
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'App Router Template',
  description: 'App Router Template',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className={inter.className}>
        <span>Locale in layout.tsx: {locale}</span>
        {children}
      </body>
    </html>
  );
}
