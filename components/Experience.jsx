// components/Experience.jsx
'use client';
import { motion } from 'framer-motion';

const exp = [
  {
    org: 'Pixolish Systems',
    role: 'Embedded AI Intern — Remote',
    period: 'Jan — Jul 2026',
    kicker: 'Recent Posting',
    doc: '/docs/certificate-softcopy.png',
    bullets: [
      'Built a multi-algorithm camera application in C++/Qt: lane detection, vehicle recognition, and obstacle classification.',
      'Engineered a threaded ONNX-YOLO pipeline with real-time image processing, sustaining 30 FPS at 720p on CPU alone (~10 W) for ADAS.',
      'Co-developed the Pixolish AI Camera Streaming Studio — a unified platform for camera ISP configuration, calibration, and AI-ready image pipelines for ADAS and embedded vision.'
    ]
  },
  {
    org: 'Spark Minda Limited',
    role: 'Software Testing Intern — On-site',
    period: 'Jun — Jul 2025',
    kicker: 'From the Archives',
    doc: '/docs/sparkminda-certificate.pdf',
    bullets: [
      'Supported development of UDS (ISO 14229) services for ECUs in the Piaggio Vespa (EU market) over CAN 2.0.',
      'Used CAPL scripting in CANoe to simulate and validate diagnostic messages and communication behaviour.',
      'Ran system testing, analysed communication logs, and ensured compliance with European diagnostics norms.'
    ]
  },
  {
    org: 'Tecknodreams Software Consulting Pvt. Ltd',
    role: 'AI Intern — Remote',
    period: 'Jun — Jul 2024',
    kicker: 'From the Archives',
    doc: '/docs/tecknodreams-internship.pdf',
    bullets: [
      'Built a LinkedIn Résumé Optimizer using RAG for personalised profile suggestions.',
      'Integrated embedding and retrieval to align résumés with LinkedIn profiles.',
      'Delivered profile enhancements through AI-driven insights and user-document context.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="section-head">
        <span className="section-label">Career Trajectory</span>
      </div>
      <hr className="rule-thin" style={{ marginBottom: '20px' }} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}
      >
        {exp.map((e, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <span className="kicker">{e.kicker}</span>
            <h3 className="article-title" style={{ margin: '4px 0 4px' }}>{e.org}</h3>
            <div className="byline" style={{ marginBottom: '10px' }}>
              {e.role} &nbsp;·&nbsp; {e.period}
            </div>
            <hr className="rule-hair" style={{ marginBottom: '12px' }} />
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }} className="prose">
              {e.bullets.map((b, idx) => (
                <li
                  key={idx}
                  style={{ position: 'relative', paddingLeft: '18px', marginBottom: '8px' }}
                >
                  <span style={{ position: 'absolute', left: 0, top: 0 }}>▪</span>
                  {b}
                </li>
              ))}
            </ul>
            {e.doc && (
              <div style={{ marginTop: '10px' }}>
                <a href={e.doc} target="_blank" rel="noopener noreferrer" className="read-more">
                  View certificate →
                </a>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
