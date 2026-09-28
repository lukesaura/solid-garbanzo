// components/Academics.jsx
'use client';
import { motion } from 'framer-motion';
import { useLanguage } from '../lib/LanguageContext';

const paper = {
  title: 'Indoor Localization Using Machine Learning for the Elderly and Visually Impaired',
  authors: 'Praveen Kumar Karunanithi · Shrinikheathan Arunkumar',
  abstract: null,
  record: [
    ['acad.recConference', '2026 International Conference on Innovations in Emerging Technologies for Sustainable Development (ICIETSD 2026)'],
    ['acad.recOrganisedBy', 'Centre for Promotion of Research, Kings College of Engineering (Autonomous)'],
    ['acad.recVenue', 'Pudukkottai, Tamil Nadu, India'],
    ['acad.recPresented', '9–10 April 2026'],
    ['acad.recPublisher', 'IEEE'],
    ['acad.recIndexed', 'IEEE Xplore Digital Library'],
    ['acad.recPaperId', '2080']
  ],
  link: 'https://ieeexplore.ieee.org/document/11584776'
};

function RecordRow({ label, value }) {
  return (
    <div style={{ padding: '7px 0', borderTop: '1px solid rgba(0,0,0,0.18)' }}>
      <div className="section-sub" style={{ marginBottom: '2px' }}>{label}</div>
      <div className="prose" style={{ fontSize: '14px', lineHeight: 1.45 }}>{value}</div>
    </div>
  );
}

export default function Academics() {
  const { t } = useLanguage();
  const hasAbstract = Boolean(paper.abstract);

  return (
    <section id="academics" className="section-space">
      <div className="section-head">
        <span className="section-label">{t('acad.label')}</span>
        <span className="section-sub">{t('acad.subtitle')}</span>
      </div>
      <hr className="rule-thick" style={{ marginBottom: '18px' }} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="academics-grid"
      >
        <div>
          <span className="kicker">{t('acad.kicker')}</span>
          <h3 className="article-title" style={{ margin: '6px 0 8px' }}>{paper.title}</h3>
          <div className="byline" style={{ marginBottom: '14px' }}>{t('acad.byPrefix')} {paper.authors}</div>
          <hr className="rule-hair" style={{ marginBottom: '14px' }} />

          <div className="section-sub" style={{ marginBottom: '8px' }}>
            {hasAbstract ? t('acad.abstract') : t('acad.inBrief')}
          </div>
          <p className="prose dropcap">{hasAbstract ? paper.abstract : t('acad.summary')}</p>

          <div className="filed" style={{ marginTop: '14px' }}>
            <b>{t('acad.filedUnder')}</b> {t('acad.filedTags')}
          </div>

          <div style={{ marginTop: '16px' }}>
            <a
              className="read-more"
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('acad.readFull')}
            </a>
          </div>
        </div>

        <aside className="box-hair" style={{ alignSelf: 'start' }}>
          <div className="section-sub" style={{ marginBottom: '4px' }}>{t('acad.pubRecord')}</div>
          {paper.record.map(([labelKey, value]) => (
            <RecordRow key={labelKey} label={t(labelKey)} value={value} />
          ))}
        </aside>
      </motion.div>
    </section>
  );
}
