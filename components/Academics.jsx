// components/Academics.jsx
'use client';
import { motion } from 'framer-motion';

/*
 * NOTE: `abstract` is the verbatim abstract as printed in the paper.
 * While it is null the section prints the `summary` below under an
 * "In Brief" head instead, so nothing unverified ships as an abstract.
 * Paste the real abstract in and it takes over automatically.
 */
const paper = {
  kicker: 'Conference Paper · IEEE',
  title: 'Indoor Localization Using Machine Learning for the Elderly and Visually Impaired',
  authors: 'Praveen Kumar Karunanithi · Shrinikheathan Arunkumar',
  abstract: null,
  summary:
    'A BLE-based indoor positioning system for assistive use, built around a low-cost wearable tag and a set of fixed anchors. Received-signal-strength fingerprints are collected across a floor plan and fed to a bank of supervised learners — K-Nearest Neighbours, Support Vector Machines, Random Forest, LightGBM and XGBoost — which are trained and benchmarked against one another to cut the metre-scale error that plain trilateration leaves behind. The resulting model localises an elderly or visually impaired wearer indoors, where GPS does not reach, closely enough to drive room-level guidance and fall-location alerts.',
  record: [
    ['Conference', '2026 International Conference on Innovations in Emerging Technologies for Sustainable Development (ICIETSD 2026)'],
    ['Organised by', 'Centre for Promotion of Research, Kings College of Engineering (Autonomous)'],
    ['Venue', 'Pudukkottai, Tamil Nadu, India'],
    ['Presented', '9–10 April 2026'],
    ['Publisher', 'IEEE'],
    ['Indexed in', 'IEEE Xplore Digital Library'],
    ['Paper ID', '2080']
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
  const hasAbstract = Boolean(paper.abstract);

  return (
    <section id="academics" className="section-space">
      <div className="section-head">
        <span className="section-label">The Academics Desk</span>
        <span className="section-sub">— Published research, filed for the record</span>
      </div>
      <hr className="rule-thick" style={{ marginBottom: '18px' }} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="academics-grid"
      >
        {/* --- The paper itself --- */}
        <div>
          <span className="kicker">{paper.kicker}</span>
          <h3 className="article-title" style={{ margin: '6px 0 8px' }}>{paper.title}</h3>
          <div className="byline" style={{ marginBottom: '14px' }}>By {paper.authors}</div>
          <hr className="rule-hair" style={{ marginBottom: '14px' }} />

          <div className="section-sub" style={{ marginBottom: '8px' }}>
            {hasAbstract ? 'Abstract' : 'In Brief'}
          </div>
          <p className="prose dropcap">{hasAbstract ? paper.abstract : paper.summary}</p>

          <div className="filed" style={{ marginTop: '14px' }}>
            <b>Filed under:</b> BLE · Indoor Positioning · Machine Learning · Assistive Technology · Wearables
          </div>

          <div style={{ marginTop: '16px' }}>
            <a
              className="read-more"
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the full paper on IEEE Xplore →
            </a>
          </div>
        </div>

        {/* --- Publication record sidebar --- */}
        <aside className="box-hair" style={{ alignSelf: 'start' }}>
          <div className="section-sub" style={{ marginBottom: '4px' }}>Publication Record</div>
          {paper.record.map(([label, value]) => (
            <RecordRow key={label} label={label} value={value} />
          ))}
        </aside>
      </motion.div>
    </section>
  );
}
