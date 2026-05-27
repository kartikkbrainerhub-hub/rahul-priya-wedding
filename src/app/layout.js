import { Cinzel, Inter } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#800020',
};

export const metadata = {
  title: 'Wedding Invitation | Rahul ❤️ Priya',
  description: 'You are cordially invited to celebrate the union of Rahul and Priya. Explore our luxury wedding itinerary and venue details.',
  manifest: '/manifest.json',
  openGraph: {
    title: 'Rahul ❤️ Priya Wedding Invitation',
    description: 'We invite you to be a part of our magical journey.',
    url: 'https://rahul-priya-wedding.vercel.app',
    siteName: 'Rahul Priya Wedding',
    images: [
      {
        url: '/wedding_hero_bg.png',
        width: 1200,
        height: 630,
        alt: 'Rahul & Priya Wedding',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
