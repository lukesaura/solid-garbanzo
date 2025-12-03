// app/layout.jsx
import './globals.css';
import { JetBrains_Mono } from 'next/font/google';

const jbmono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700'],
  variable: '--font-site',
  display: 'swap'
});

export const metadata = {
  title: 'Shrinikheathan Arunkumar — Portfolio',
  description: 'Portfolio — Embedded Systems & Fullstack projects'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jbmono.variable} font-site bg-warmgray-50 text-warmgray-900`}>
        {children}
      </body>
    </html>
  );
}
