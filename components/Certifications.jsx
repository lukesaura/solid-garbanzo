// components/Certifications.jsx
'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

const groups = [
  {
    headingKey: 'cert.academicRecord',
    items: [
      { title: 'B.Tech CSE (IoT & Automation) — SASTRA University, Tanjore', meta: 'CGPA 7.71', date: 'Jul 2026' },
      { title: 'Class XII, CBSE — DAV Boys Hr. Sec. School, Gopalapuram', meta: '95%', date: '2022' },
      { title: 'Class X, CBSE — Indian School Muscat, Oman', meta: '94.4%', date: '2020' }
    ]
  },
  {
    headingKey: 'cert.certifications',
    items: [
      { title: 'Deep Learning Onramp — MathWorks', date: 'Apr 2025', doc: '/docs/deep-learning-onramp.pdf' },
      { title: 'Machine Learning Onramp — MathWorks', date: 'Feb 2025', doc: '/docs/machine-learning-onramp.pdf' },
      { title: 'MATLAB Onramp — MathWorks', date: 'Feb 2025', doc: '/docs/matlab-onramp.pdf' },
      { title: 'Python with AI — Coincent.AI', date: 'Feb 2024', doc: '/docs/coincent-python-ai.pdf' }
    ]
  },
  {
    headingKey: 'cert.workshops',
    items: [
      { title: 'AI with ML Workshop — IISc Bengaluru (EduFabrica)', date: 'Oct 2024', doc: '/docs/iisc-ai-ml-workshop.pdf' },
      { title: 'PCB Design Workshop', date: '', doc: '/docs/pcb-workshop.pdf' },
      { title: 'AR/VR Workshop — Cholalabs, SASTRA University', date: 'Sep 2024', doc: null }
    ]
  },
  {
    headingKey: 'cert.examinations',
    items: [
      { title: 'GRE — Graduate Record Examination', meta: 'Verbal 151 · Quant 159 · AWA 3.5', date: 'May 18, 2026', doc: null },
      { title: 'IELTS — English Proficiency', meta: 'Score report', date: '', doc: '/docs/ielts-english.pdf' },
      { title: 'DELF A1 — French Proficiency', meta: 'Score card', date: '', doc: '/docs/delf-a1-french.pdf' },
      { title: 'telc A1 — German Proficiency', meta: 'Certified', date: '', doc: '/docs/telc-a1-german.pdf' }
    ]
  }
];

function Record({ it, t }) {
  const inner = (
    <>
      <div className="r-title">{it.title}</div>
      <div className="r-meta">
        <span className="r-date">{[it.meta, it.date].filter(Boolean).join(' · ')}</span>
        {it.doc && <span className="r-view">{t('cert.view')}</span>}
      </div>
    </>
  );
  return it.doc ? (
    <a className="record" href={it.doc} target="_blank" rel="noopener noreferrer">{inner}</a>
  ) : (
    <div className="record">{inner}</div>
  );
}

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="section-space">
      <div className="section-head">
        <span className="section-label">{t('cert.label')}</span>
        <span className="section-sub">{t('cert.subtitle')}</span>
      </div>
      <hr className="rule-thin" style={{ marginBottom: '18px' }} />

      <div style={{ columnCount: 2, columnGap: '40px' }} className="records-cols">
        {groups.map((g, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: gi * 0.05 }}
            className="record-group"
          >
            <h4>{t(g.headingKey)}</h4>
            {g.items.map((it, ii) => (
              <Record it={it} key={ii} t={t} />
            ))}
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          :global(.records-cols) {
            column-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
