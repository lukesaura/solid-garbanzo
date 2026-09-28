// app/layout.jsx
import './globals.css';
import localFont from 'next/font/local';
import { EB_Garamond, UnifrakturMaguntia, Special_Elite, Noto_Serif_Tamil } from 'next/font/google';
import SparkleTrail from '../components/SparkleTrail';
import { LanguageProvider } from '../lib/LanguageContext';

// Gothik Steel for newspaper section headlines & decks
const gothikSteel = localFont({
  src: './fonts/GothikSteel.ttf',
  variable: '--font-headline',
  display: 'swap'
});

// Old-world serif for body copy
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap'
});

// Blackletter for the masthead nameplate
const unifraktur = UnifrakturMaguntia({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-masthead',
  display: 'swap'
});

// Tamil serif for newspaper feel
const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ['tamil'],
  weight: ['400', '700', '900'],
  variable: '--font-tamil',
  display: 'swap'
});

// Typewriter accent for tags / labels
const specialElite = Special_Elite({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono-news',
  display: 'swap'
});

export const metadata = {
  title: 'The Times of Shrinikheathan — Shrinikheathan Arunkumar',
  description: 'Portfolio Edition — Embedded Systems, Automotive & IoT engineering, reported first-hand.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gothikSteel.variable} ${ebGaramond.variable} ${unifraktur.variable} ${specialElite.variable} ${notoSerifTamil.variable}`}
      >
        <LanguageProvider>
          <SparkleTrail />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
