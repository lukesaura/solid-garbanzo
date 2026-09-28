// components/Experience.jsx
'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

const exp = [
  {
    org: 'Pixolish Systems',
    roleKey: 'exp.0.role',
    periodKey: 'exp.0.period',
    kickerKey: 'exp.recentPosting',
    doc: '/docs/certificate-softcopy.png',
    bulletKeys: ['exp.0.b0', 'exp.0.b1', 'exp.0.b2']
  },
  {
    org: 'Spark Minda Limited',
    roleKey: 'exp.1.role',
    periodKey: 'exp.1.period',
    kickerKey: 'exp.fromArchives',
    doc: '/docs/sparkminda-certificate.pdf',
    bulletKeys: ['exp.1.b0', 'exp.1.b1', 'exp.1.b2']
  },
  {
    org: 'Tecknodreams Software Consulting Pvt. Ltd',
    roleKey: 'exp.2.role',
    periodKey: 'exp.2.period',
    kickerKey: 'exp.fromArchives',
    doc: '/docs/tecknodreams-internship.pdf',
    bulletKeys: ['exp.2.b0', 'exp.2.b1', 'exp.2.b2']
  }
];

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="section-space">
      <div className="section-head">
        <span className="section-label">{t('exp.label')}</span>
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
            <span className="kicker">{t(e.kickerKey)}</span>
            <h3 className="article-title" style={{ margin: '4px 0 4px' }}>{e.org}</h3>
            <div className="byline" style={{ marginBottom: '10px' }}>
              {t(e.roleKey)} &nbsp;·&nbsp; {t(e.periodKey)}
            </div>
            <hr className="rule-hair" style={{ marginBottom: '12px' }} />
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }} className="prose">
              {e.bulletKeys.map((bk, idx) => (
                <li
                  key={idx}
                  style={{ position: 'relative', paddingLeft: '18px', marginBottom: '8px' }}
                >
                  <span style={{ position: 'absolute', left: 0, top: 0 }}>▪</span>
                  {t(bk)}
                </li>
              ))}
            </ul>
            {e.doc && (
              <div style={{ marginTop: '10px' }}>
                <a href={e.doc} target="_blank" rel="noopener noreferrer" className="read-more">
                  {t('exp.viewCert')}
                </a>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
