import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

const title = 'Green Huang | Full Stack Developer From Melbourne Australia.';
const description =
  'A self-proclaimed programmer who specializes in full stack develop and deployment.';
const url = 'https://greenhuang.com/';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Full Stack Developer',
    'C# Developer',
    'Next.js Developer',
    'AWS Engineer',
  ],
  creator: 'Green Huang',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/images/open-graph-sagar.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@shahsagarm',
    images: '/images/open-graph-sagar.png',
  },
  icons: {
    icon: '/icon.png',
    shortcut: 'https://download.greenhuang.com/favicon.ico',
    apple: 'https://download.greenhuang.com/favicon.ico',
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
          <head>

            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            ></Script>
            <Script id="google-anayltics-script">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
            </Script>
            <title></title>
            <link rel="icon" href="https://download.greenhuang.com/favicon.ico" sizes="any"/>
          </head>
      ) : null}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
