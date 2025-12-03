// components/CurrentWork.jsx
'use client';
import { motion } from 'framer-motion';

const current = [
  {
    title: 'CAN Bus Research Expansion',
    short:
      'Transforming the CAN bus telemetry and ECU simulation into a formal research manuscript with advanced diagnostics, enhanced tooling, and extended protocol analysis.',
    tags: ['Research','CAN','ECU','Telemetry']
  }
];

export default function CurrentWork() {
  return (
    <section id="current" className="mt-16 container">
      <h2 className="text-3xl font-site mb-6">Currently Working On</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {current.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="current-card"
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="font-site text-xl font-semibold text-warmgray-900">{c.title}</div>
                <p className="mt-3 font-site text-warmgray-700 leading-relaxed">{c.short}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {c.tags.map((t, idx) => (
                <span key={idx} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
