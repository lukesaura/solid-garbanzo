// app/layout.jsx
import './globals.css';
import localFont from 'next/font/local';
import { EB_Garamond, Cinzel, Special_Elite, Noto_Serif_Tamil, Anek_Tamil } from 'next/font/google';
import SparkleTrail from '../components/SparkleTrail';
import { LanguageProvider } from '../lib/LanguageContext';

// Gothik Steel — masthead nameplate only ("The Times of Shrinikheathan")
const gothikSteel = localFont({
  src: './fonts/GothikSteel.ttf',
  variable: '--font-nameplate',
  display: 'swap'
});

// Cinzel for section labels, article titles, decks, and other newspaper headlines
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
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

// Tamil serif for body copy and Tamil section headlines
const notoSerifTamil = Noto_Serif_Tamil({
  subsets: ['tamil'],
  weight: ['400', '700', '900'],
  variable: '--font-tamil',
  display: 'swap'
});

// Bold Tamil display for masthead (no Tamil blackletter on Google Fonts; pairs with Gothik Steel)
const anekTamilMasthead = Anek_Tamil({
  subsets: ['tamil'],
  weight: ['700', '800'],
  variable: '--font-tamil-nameplate',
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
        className={`${gothikSteel.variable} ${cinzel.variable} ${ebGaramond.variable} ${specialElite.variable} ${notoSerifTamil.variable} ${anekTamilMasthead.variable}`}
      >
        <LanguageProvider>
          <SparkleTrail />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
