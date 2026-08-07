// components/Projects.jsx
'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Pixolish AI Camera Streaming Studio',
    date: '2026 · Pixolish Systems',
    desc: 'Co-developed a unified, license-based AI camera streaming platform — camera ISP configuration, automated calibration & sensor alignment, multi-camera management, low-latency live streaming, and an AI-ready image pipeline for ADAS, autonomous driving, robotics, and industrial automation.',
    tags: ['C++', 'Qt', 'ISP', 'ADAS', 'Computer Vision'],
    repo: 'https://github.com/lukesaura/CameraCalibrationISP'
  },
  {
    title: 'Embedded Face Recognition for Automotive Access Control',
    date: '2026 · Spark Minda',
    desc: 'A fully offline face recognition pipeline on Raspberry Pi 4 — video-to-dataset extraction, FaceNet 512-d embedding generation, and real-time cosine-similarity matching at ~5 FPS. Built after the Arduino Nicla Vision proved too constrained for a multi-stage vision pipeline.',
    tags: ['Raspberry Pi', 'FaceNet', 'OpenCV', 'Python', 'Embedded'],
    repo: 'https://github.com/lukesaura/embedded-face-recognition'
  },
  {
    title: 'TPMS — Tyre Pressure Monitoring & Fault Diagnosis App',
    date: '2026 · Spark Minda',
    desc: 'A Tyre Pressure Monitoring app built as a proof of concept for a mechanic diagnostic tool — letting workshop technicians of an undisclosed motorcycle manufacturer read and diagnose fault codes without needing a CAN interface.',
    tags: ['Mobile', 'Diagnostics', 'OBD', 'Automotive'],
    repo: 'https://github.com/lukesaura/TPMS'
  },
  {
    title: 'CAN Bus – Vehicle Telemetry & ECU Simulation',
    date: 'November 2025',
    desc: 'Two-node CAN bus system on Arduino Uno + MCP2515 simulating a full vehicle ECU — throttle, braking, indicators, headlights, fuel modelling and real-time physics — paired with a Python (Pygame) dashboard rendering a live virtual instrument cluster.',
    tags: ['Arduino', 'CAN 2.0', 'Python', 'Pygame'],
    repo: 'https://github.com/lukesaura/special-engine'
  },
  {
    title: 'Campus Sentry — Real-Time Violation & Flood Monitoring',
    date: 'October 2025',
    desc: 'Full-stack municipal monitoring platform: a React + Tailwind dashboard and a cross-platform Expo app on Firebase Auth, Firestore and real-time listeners, with an external ML pipeline feeding parking-violation and water-logging detections into instant approval workflows.',
    tags: ['React', 'Firebase', 'ML', 'Expo'],
    repo: 'https://github.com/lukesaura/congenial-octo-invention2'
  },
  {
    title: 'Real-Time Indoor Localization (Wearable + ML)',
    date: 'March 2025',
    desc: 'A BLE-based indoor localization system inspired by IEEE research, using wearables and machine learning. Boosted positioning accuracy with KNN, SVM, LightGBM, XGBoost and Random Forest for assistive applications.',
    tags: ['BLE', 'ML', 'XGBoost', 'LightGBM'],
    repo: 'https://github.com/lukesaura'
  },
  {
    title: 'IoT Water Quality Monitoring (ESP32 + AWS)',
    date: 'November 2024',
    desc: 'An ESP32 prototype with pH, turbidity and salinity sensors streaming processed data to AWS via API, IoT Core, DynamoDB and Lambda, with a Firebase-hosted web app visualising real-time water-quality metrics.',
    tags: ['ESP32', 'AWS', 'IoT', 'Firebase'],
    repo: 'https://github.com/lukesaura/WaterQualityApplication'
  }
];

function ProjectCell({ p, i }) {
  return (
    <motion.a
      href={p.repo}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="cell"
      style={{ display: 'block', textDecoration: 'none', breakInside: 'avoid' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'baseline' }}>
        <span className="kicker" style={{ color: 'var(--ink-2)' }}>
          Report No. {String(projects.length - i).padStart(2, '0')}
        </span>
        <span className="byline">{p.date}</span>
      </div>
      <h3 className="article-title" style={{ margin: '4px 0 8px' }}>{p.title}</h3>
      <p className="prose" style={{ fontSize: '15px' }}>{p.desc}</p>
      <div style={{ marginTop: '12px' }} className="filed">
        <b>Filed under:</b> {p.tags.join(' · ')}
      </div>
      <div style={{ marginTop: '12px' }}>
        <span className="read-more">Continue reading on GitHub →</span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="section-head">
        <span className="section-label">The Projects Desk</span>
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
          <ProjectCell p={p} i={i} key={i} />
        ))}
      </div>
    </section>
  );
}
