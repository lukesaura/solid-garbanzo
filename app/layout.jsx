// app/layout.jsx
import './globals.css';
import { Playfair_Display, PT_Serif, Pirata_One, Special_Elite } from 'next/font/google';

// Bold serif for headlines & decks
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-headline',
  display: 'swap'
});

// Readable serif for body copy
const ptserif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap'
});

// Blackletter for the masthead nameplate
const pirata = Pirata_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-masthead',
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
        className={`${playfair.variable} ${ptserif.variable} ${pirata.variable} ${specialElite.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
