// components/Projects.jsx
'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'CAN Bus – Vehicle Telemetry & ECU Simulation',
    desc: 'Two-node CAN bus system using Arduino + MCP2515 modules and a Python dashboard rendering a live virtual instrument cluster.',
    tags: ['Arduino','CAN','Python','Pygame'],
    repo: 'https://github.com/lukesaura/special-engine'
  },
  {
    title: 'Campus Sentry — Real-Time Violation & Flood Monitoring',
    desc: 'Full-stack dashboard + mobile app with Firebase and an ML pipeline for detection and approval workflows.',
    tags: ['React','Firebase','ML','Expo'],
    repo: 'https://github.com/lukesaura/congenial-octo-invention2'
  },
  {
    title: '5G Core Network Simulation (Open5GS & UERANSIM)',
    desc: 'Containerized 5G core emulation with Open5GS and UERANSIM for registration & attach flow testing.',
    tags: ['Open5GS','Docker','Telecom'],
    repo: 'https://github.com/yourusername/5g-sim'
  },
  {
    title: 'Real-Time Indoor Localization (Wearable + ML)',
    desc: 'BLE wearables and ML models (KNN, SVM, XGBoost) to improve indoor positioning accuracy.',
    tags: ['BLE','ML','XGBoost'],
    repo: 'https://github.com/yourusername/indoor-localization'
  },
  {
    title: 'IoT Water Quality Monitoring (ESP32 + AWS)',
    desc: 'ESP32 with pH/turbidity sensors sending data to AWS IoT Core and visualized via a web dashboard.',
    tags: ['ESP32','AWS','IoT'],
    repo: 'https://github.com/lukesaura/WaterQualityApplication'
  }
];

function ProjectCard({ p, i }) {
  return (
    <motion.a
      href={p.repo}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.06 }}
      className="card group block no-underline"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="project-title font-site text-lg">{p.title}</div>
          <p className="project-desc mt-2 text-sm">{p.desc}</p>
        </div>
        <div className="text-xs text-warmgray-700">{/* reserved for date / badge if needed */}</div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t, idx) => (
          <span key={idx} className="tag">{t}</span>
        ))}
      </div>

      <div className="mt-4 text-rose-300 font-site text-sm underline">Open repo →</div>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mt-16 container">
      <h2 className="text-3xl font-site mb-6">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => <ProjectCard p={p} i={i} key={i} />)}
      </div>
    </section>
  );
}
