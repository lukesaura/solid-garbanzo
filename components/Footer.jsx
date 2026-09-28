// components/Footer.jsx
'use client';
import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="connect" style={{ marginTop: '40px' }}>
      <hr className="rule-thick" />
      <div className="topbar" style={{ justifyContent: 'center', gap: '10px' }}>
        <span>★</span>
        <span>{t('masthead')}</span>
        <span>★</span>
      </div>
      <hr className="rule-hair" />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          padding: '22px 0'
        }}
      >
        <div>
          <div className="section-sub" style={{ marginBottom: '6px' }}>{t('footer.correspondence')}</div>
          <p className="prose" style={{ fontSize: '14px' }}>
            {t('footer.lettersTo')}{' '}
            <a href="mailto:ashrink91@gmail.com" className="inline-link">ashrink91@gmail.com</a>
          </p>
        </div>
        <div>
          <div className="section-sub" style={{ marginBottom: '6px' }}>{t('footer.newsroom')}</div>
          <p className="prose" style={{ fontSize: '14px' }}>
            {t('footer.sourceArchives')}{' '}
            <a
              href="https://github.com/lukesaura"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              github.com/lukesaura
            </a>
          </p>
        </div>
        <div>
          <div className="section-sub" style={{ marginBottom: '6px' }}>{t('footer.wire')}</div>
          <p className="prose" style={{ fontSize: '14px' }}>
            {t('footer.proNetwork')}{' '}
            <a
              href="https://www.linkedin.com/in/shrinikheathan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              linkedin.com/in/shrinikheathan
            </a>
          </p>
        </div>
      </div>

      <hr className="rule-hair" />
      <div className="topbar" style={{ justifyContent: 'space-between', paddingBottom: '18px' }}>
        <span>© {new Date().getFullYear()} {t('author.name')}</span>
        <span>{t('footer.allRights')}</span>
      </div>

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}
