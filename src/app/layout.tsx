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
  title: 'Resume AI - AI-Powered Resume Builder',
  description:
    'Create professional, ATS-friendly resumes with AI. Generate tailored resumes from job descriptions using advanced AI technology.',
  keywords: [
    'resume builder',
    'AI resume',
    'AI-powered resume',
    'job application',
    'CV maker',
    'professional resume',
    'ATS-friendly',
    'resume generator',
    'AI resume writer',
    'Next.js',
    'React',
    'PDF resume'
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
    title: 'Resume AI - AI-Powered Resume Builder',
    description:
      'Create professional, ATS-friendly resumes with AI. Generate tailored resumes from job descriptions using advanced AI technology.',
    siteName: 'Resume AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resume AI - AI-Powered Resume Builder'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume AI - AI-Powered Resume Builder',
    description:
      'Create professional, ATS-friendly resumes with AI. Generate tailored resumes from job descriptions using advanced AI technology.',
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  category: 'productivity',
  applicationName: 'Resume AI',
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
          signUpUrl='/sign-up'
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
