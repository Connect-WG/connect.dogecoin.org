import { Provider } from '@/components/provider';
import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'DogeConnect',
    template: '%s | DogeConnect',
  },
  description: 'Documentation for the DogeConnect payment protocol.',
  metadataBase: new URL('https://connect.dogecoin.org'),
  openGraph: {
    title: 'DogeConnect',
    description: 'Documentation for the DogeConnect payment protocol.',
    url: 'https://connect.dogecoin.org',
    siteName: 'DogeConnect',
    type: 'website',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
