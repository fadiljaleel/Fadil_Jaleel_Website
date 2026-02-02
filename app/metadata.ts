import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Muhammed Fadil',
  title: 'Muhammed Fadil | Python Full Stack Developer',
  description:
    'Python Full Stack Developer with 2.5+ years of experience building scalable web applications, business intelligence dashboards, and software solutions that power business growth.',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.fadiljaleel.com',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/fadiljaleel',
    linkedin: 'https://www.linkedin.com/in/fadiljaleel',
  },
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | Muhammed Fadil`,
  },

  description: siteConfig.description,

  authors: [
    {
      name: 'Muhammed Fadil',
      url: siteConfig.url,
    },
  ],

  creator: 'Muhammed Fadil',

  keywords: [
    'Python Full Stack Developer',
    'Python Developer',
    'Full Stack Developer',
    'Django Developer',
    'FastAPI Developer',
    'Web Developer',
    'Business Intelligence',
    'Data Analyst',
    'Software Engineer',
    'Muhammed Fadil',
    'Fadil Jaleel',
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Muhammed Fadil Portfolio',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Muhammed Fadil | Python Full Stack Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@fadiljaleel',
  },

  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  manifest: '/site.webmanifest',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}
