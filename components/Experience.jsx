// components/Experience.jsx
'use client';
import { motion } from 'framer-motion';

const exp = [
  {
    org: 'Spark Minda Limited',
    role: 'Intern — Embedded Systems',
    period: 'June — July 2025',
    bullets: [
      'Supported development of UDS (ISO 14229) services for ECUs in Piaggio Vespa.',
      'Used CAPL scripting in CANoe to simulate and validate diagnostic messages.',
      'System testing, communication log analysis, and compliance verification.'
    ]
  },
  {
    org: 'Tecknodreams Software Consulting pvt. Ltd',
    role: 'Intern — AI / Fullstack',
    period: 'June — July 2024',
    bullets: [
      'Built a LinkedIn Resume Optimizer using RAG.',
      'Integrated embedding + retrieval for profile suggestions.',
      'Fine-tuned prompts for context-aware recommendations.'
    ]
  }
];

export default function Experience(){
  return (
    <section id="experience" className="mt-12 container">
      <h2 className="text-3xl font-site mb-6">Experience</h2>

      <div className="space-y-6">
        {exp.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <div className="flex items-baseline justify-between">
              <div>
                <div className="text-lg font-site font-semibold">{e.org}</div>
                <div className="text-sm font-site text-warmgray-700">{e.role}</div>
              </div>
              <div className="text-sm text-warmgray-500 font-site">{e.period}</div>
            </div>

            <ul className="mt-3 ml-5 list-disc space-y-1 text-warmgray-700 font-site">
              {e.bullets.map((b, idx) => <li key={idx} className="mt-1">{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
