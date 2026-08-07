// components/Footer.jsx
'use client';

export default function Footer() {
  return (
    <footer style={{ marginTop: '40px' }}>
      <hr className="rule-thick" />
      <div className="topbar" style={{ justifyContent: 'center', gap: '10px' }}>
        <span>★</span>
        <span>The Times of Shrinikheathan</span>
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
          <div className="section-sub" style={{ marginBottom: '6px' }}>Correspondence</div>
          <p className="prose" style={{ fontSize: '14px' }}>
            Letters to the editor:{' '}
            <a href="mailto:ashrink91@gmail.com" className="inline-link">ashrink91@gmail.com</a>
          </p>
        </div>
        <div>
          <div className="section-sub" style={{ marginBottom: '6px' }}>The Newsroom</div>
          <p className="prose" style={{ fontSize: '14px' }}>
            Source &amp; archives:{' '}
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
      </div>

      <hr className="rule-hair" />
      <div className="topbar" style={{ justifyContent: 'space-between', paddingBottom: '18px' }}>
        <span>© {new Date().getFullYear()} Shrinikheathan Arunkumar</span>
        <span>All Rights Reserved</span>
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
