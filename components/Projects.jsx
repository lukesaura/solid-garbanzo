// components/Projects.jsx
'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

const projects = [
  {
    title: 'Pixolish AI Camera Streaming Studio',
    date: '2026 · Pixolish Systems',
    descKey: 'proj.0.desc',
    tags: ['C++', 'Qt', 'ISP', 'ADAS', 'Computer Vision'],
    repo: 'https://github.com/lukesaura/CameraCalibrationISP'
  },
  {
    title: 'Embedded Face Recognition for Automotive Access Control',
    date: '2026 · Spark Minda',
    descKey: 'proj.1.desc',
    tags: ['Raspberry Pi', 'FaceNet', 'OpenCV', 'Python', 'Embedded'],
    repo: 'https://github.com/lukesaura/embedded-face-recognition'
  },
  {
    title: 'TPMS — Tyre Pressure Monitoring & Fault Diagnosis App',
    date: '2026 · Spark Minda',
    descKey: 'proj.2.desc',
    tags: ['Mobile', 'Diagnostics', 'OBD', 'Automotive'],
    repo: 'https://github.com/lukesaura/TPMS'
  },
  {
    title: 'CAN Bus – Vehicle Telemetry & ECU Simulation',
    date: 'November 2025',
    descKey: 'proj.3.desc',
    tags: ['Arduino', 'CAN 2.0', 'Python', 'Pygame'],
    repo: 'https://github.com/lukesaura/special-engine'
  },
  {
    title: 'Campus Sentry — Real-Time Violation & Flood Monitoring',
    date: 'October 2025',
    descKey: 'proj.4.desc',
    tags: ['React', 'Firebase', 'ML', 'Expo'],
    repo: 'https://github.com/lukesaura/congenial-octo-invention2'
  },
  {
    title: 'Real-Time Indoor Localization (Wearable + ML)',
    date: 'March 2025',
    descKey: 'proj.5.desc',
    tags: ['BLE', 'ML', 'XGBoost', 'LightGBM'],
    repo: 'https://github.com/lukesaura'
  },
  {
    title: 'IoT Water Quality Monitoring (ESP32 + AWS)',
    date: 'November 2024',
    descKey: 'proj.6.desc',
    tags: ['ESP32', 'AWS', 'IoT', 'Firebase'],
    repo: 'https://github.com/lukesaura/WaterQualityApplication'
  }
];

function ProjectCell({ p, i, t, n }) {
  return (
    <motion.a
      href={p.repo}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="cell no-sparkle"
      style={{ display: 'block', textDecoration: 'none', breakInside: 'avoid' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'baseline' }}>
        <span className="kicker" style={{ color: 'var(--ink-2)' }}>
          {t('proj.reportNo')} {n(String(projects.length - i).padStart(2, '0'))}
        </span>
        <span className="byline">{p.date}</span>
      </div>
      <h3 className="article-title" style={{ margin: '4px 0 8px' }}>{p.title}</h3>
      <p className="prose" style={{ fontSize: '15px' }}>{t(p.descKey)}</p>
      <div style={{ marginTop: '12px' }} className="filed">
        <b>{t('proj.filedUnder')}</b> {p.tags.join(' · ')}
      </div>
      <div style={{ marginTop: '12px' }}>
        <span className="read-more">{t('proj.continueReading')}</span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const { t, n } = useLanguage();

  return (
    <section id="projects" className="section-space">
      <div className="section-head">
        <span className="section-label">{t('proj.label')}</span>
      </div>
      <hr className="rule-thick" style={{ marginBottom: '4px' }} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '0 40px'
        }}
      >
        {projects.map((p, i) => (
          <ProjectCell p={p} i={i} key={i} t={t} n={n} />
        ))}
      </div>
    </section>
  );
}
