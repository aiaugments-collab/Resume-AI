import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import type { Metadata, Viewport } from 'next';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Lato } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Career Assistant - Enterprise Career Intelligence Platform',
  description:
    'Enterprise-grade AI career intelligence platform leveraging advanced machine learning for strategic career optimization, predictive analytics, and data-driven professional positioning.',
  keywords: [
    'enterprise career platform',
    'AI career intelligence',
    'machine learning resume',
    'career optimization platform',
    'executive resume builder',
    'enterprise AI solutions',
    'predictive career analytics',
    'professional development platform',
    'workforce intelligence',
    'career strategy platform',
    'executive positioning',
    'enterprise recruitment tools'
  ],
  authors: [
    {
      name: 'Kiran',
      url: 'https://github.com/Kiranism'
    }
  ],
  creator: 'Kiran',
  publisher: 'Kiran',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://resume-ai.vercel.app',
    title: 'Career Assistant - Enterprise Career Intelligence Platform',
    description:
      'Enterprise-grade AI career intelligence platform leveraging advanced machine learning for strategic career optimization, predictive analytics, and data-driven professional positioning.',
    siteName: 'Career Assistant',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Career Assistant - Enterprise Career Intelligence Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Career Assistant - Enterprise Career Intelligence Platform',
    description:
      'Enterprise-grade AI career intelligence platform leveraging advanced machine learning for strategic career optimization, predictive analytics, and data-driven professional positioning.',
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  category: 'productivity',
  applicationName: 'Career Assistant',
  generator: 'Next.js'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap'
});

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${lato.className}`} suppressHydrationWarning>
      <body className={'min-h-screen'}>
        <NextTopLoader showSpinner={false} />
        <ClerkProvider
          signInUrl='/sign-in'
          signUpUrl='/sign-in'
          afterSignOutUrl={'/sign-in'}
        >
          <NuqsAdapter>
            <Providers>
              <Toaster />
              {children}
            </Providers>
          </NuqsAdapter>
        </ClerkProvider>
      </body>
    </html>
  );
}
