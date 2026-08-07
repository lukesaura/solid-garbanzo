// components/CurrentWork.jsx
'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'TPMS — Tyre Pressure Monitoring & Fault Diagnosis App',
    desc: 'Built a proof-of-concept mechanic diagnostic tool letting workshop technicians of an undisclosed motorcycle manufacturer read and diagnose fault codes without needing a CAN interface.',
    tags: ['Mobile', 'Diagnostics', 'OBD', 'Automotive'],
    repo: 'https://github.com/lukesaura/TPMS'
  },
  {
    name: 'Facial Biometric Unlock for Automotives',
    desc: 'Built an end-to-end facial biometric unlock pipeline in Python with zero network dependency — OpenCV SSD (ResNet-10) detection with FaceNet 512-d embeddings, tuned to <0.1% false-accept at ~5 FPS, CPU-only, sub-2-second unlock.',
    tags: ['Python', 'OpenCV', 'FaceNet', 'Biometrics'],
  }
];

export default function CurrentWork() {
  return (
    <section id="current" className="section-space">
      <div className="section-head">
        <span className="section-label">Trending Now</span>
      </div>
      <hr className="rule-thin" style={{ marginBottom: '18px' }} />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="breaking"
      >
        <span className="kicker">◆ On-site, Bengaluru · Since Feb 2026</span>
        <h3 className="headline" style={{ fontSize: 'clamp(24px, 4vw, 38px)', margin: '6px 0 4px' }}>
          Currently Interning at Spark Minda
        </h3>
        <div className="byline" style={{ marginBottom: '16px' }}>
          SDE Intern · Spark Minda Limited
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px 30px'
          }}
        >
          {projects.map((p, i) => (
            <div key={i} style={{ borderTop: '2px solid var(--rule)', paddingTop: '14px' }}>
              <h4 className="article-title" style={{ fontSize: '18px', margin: '0 0 8px' }}>{p.name}</h4>
              <p className="prose" style={{ fontSize: '15px', margin: '0 0 10px' }}>{p.desc}</p>
              <span className="filed"><b>Filed under:</b> {p.tags.join(' · ')}</span>
            </div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
