// components/PageTwo.jsx
'use client';
import { useLanguage } from '../lib/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const hobbies = [
  { nameKey: 'hobby.bibliophile', descKey: 'hobby.bibliophileDesc' },
  { nameKey: 'hobby.canvas', descKey: 'hobby.canvasDesc' },
  { nameKey: 'hobby.digital', descKey: 'hobby.digitalDesc', link: 'https://www.webtoons.com/en/canvas/the-love-paradox/list?title_no=1037817' },
  { nameKey: 'hobby.cinephile', descKey: 'hobby.cinephileDesc' },
  { nameKey: 'hobby.flute', descKey: 'hobby.fluteDesc' },
  { nameKey: 'hobby.carnatic', descKey: 'hobby.carnaticDesc' },
  { nameKey: 'hobby.sports', descKey: 'hobby.sportsDesc' },
  { nameKey: 'hobby.chess', descKey: 'hobby.chessDesc' },
];

export default function PageTwo() {
  const { t } = useLanguage();

  return (
    <main style={{ padding: 'clamp(12px, 3vw, 40px) 0' }}>
      <div className="sheet sheet-p2">
        <div className="wrap">
          <LanguageSwitcher />
          <hr className="rule-hair" />
          <div className="topbar">
            <span>{t('p2.pageTwo')}</span>
            <span>{t('p2.personalColumn')}</span>
            <span>{t('p2.offTheClock')}</span>
          </div>
          <hr className="rule-thick" />

          <div className="section-space">
            <div style={{ textAlign: 'center' }}>
              <span className="kicker">{t('p2.feature')}</span>
            </div>
            <div style={{ textAlign: 'center', margin: '10px 0 16px' }}>
              <span className="byline">{t('p2.dispatch')}</span>
            </div>
            <hr className="rule-thin" style={{ marginBottom: '18px' }} />

            <div className="prose cols-2 dropcap">
              <p>{t('p2.prose1')}</p>
              <p>{t('p2.prose2')}</p>
              <p>{t('p2.prose3')}</p>
              <p>{t('p2.prose4')}</p>
            </div>
          </div>

          <div className="section-space">
            <div className="section-head">
              <span className="section-label">{t('p2.artsLeisure')}</span>
              <span className="section-sub">{t('p2.artsSubtitle')}</span>
            </div>
            <hr className="rule-thin" style={{ marginBottom: '18px' }} />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '18px 30px'
              }}
            >
              {hobbies.map((h) => (
                <div key={h.nameKey} className="cell" style={{ paddingTop: '14px' }}>
                  <h3 className="article-title" style={{ fontSize: '18px', marginBottom: '4px' }}>
                    {h.link ? (
                      <a href={h.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}>
                        {t(h.nameKey)}
                      </a>
                    ) : t(h.nameKey)}
                  </h3>
                  <p className="prose" style={{ fontSize: '14px', margin: 0 }}>{t(h.descKey)}</p>
                </div>
              ))}
            </div>
          </div>

          <hr className="rule-thick" style={{ marginTop: '20px' }} />
          <div className="topbar" style={{ justifyContent: 'center', padding: '18px 0' }}>
            <a
              href="/"
              style={{ color: 'var(--ink)', textDecoration: 'none', borderBottom: '1px solid var(--ink)' }}
            >
              {t('p2.backToFront')}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
