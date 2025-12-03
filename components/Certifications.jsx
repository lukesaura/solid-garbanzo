// components/Certifications.jsx
'use client';
import { motion } from 'framer-motion';

const certs = [
  { title: 'Deep Learning Onramp — MathWorks', date: 'April 2025', img: '/images/cert-deep-learning.webp' },
  { title: 'MATLAB Onramp — MathWorks', date: 'February 2025', img: '/images/cert-matlab.webp' },
  { title: 'Machine Learning Onramp — MathWorks', date: 'February 2025', img: '/images/cert-ml.webp' },
  { title: 'Python with AI — Coincent.AI', date: 'February 2024', img: '/images/cert-python-ai.webp' },
  { title: 'AI with ML Workshop — IISC Bengaluru', date: 'October 2024', img: '/images/cert-iisc.webp' },
  { title: 'AR/VR Workshop — CHOLALABS', date: 'September 2023', img: '/images/cert-arvr.webp' }
];

export default function Certifications() {
  return (
    <section id="certifications" className="mt-16 container">
      <h2 className="text-3xl font-site mb-6">Certifications & Workshops</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.a
            key={i}
            href={c.img}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            className="cert-small no-underline block"
          >
            <div className="font-site font-semibold text-warmgray-900">{c.title}</div>
            <div className="text-sm text-warmgray-500 mt-1">{c.date}</div>
            <div className="mt-3 text-xs text-rose-300 underline">View certificate →</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
