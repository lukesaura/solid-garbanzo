// components/Hero.jsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SkylineBackdrop from './SkylineBackdrop';

const tickerItems = [
  ['Pixolish Systems:', ' Embedded AI Intern — C++/Qt camera application, ONNX-YOLO pipeline, AI Camera Streaming Studio'],
  ['Spark Minda:', ' SDE Intern — TPMS diagnostic app, facial biometric unlock for automotives'],
  ['Spark Minda:', ' Software Testing Intern — UDS (ISO 14229) on Piaggio Vespa, CAPL/CANoe'],
  ['Tecknodreams:', ' AI Intern — LinkedIn Résumé Optimizer with RAG'],
  ['CAN Bus:', ' Vehicle telemetry & ECU simulation with live instrument cluster'],
  ['Campus Sentry:', ' Real-time violation & flood monitoring platform'],
  ['IoT:', ' ESP32 water quality monitoring with AWS']
];

const languages = [
  { name: 'Tamil', level: 'Native', pips: 5, doc: '/docs/tamil-certificate.pdf' },
  { name: 'English', level: 'Professional', pips: 5, doc: '/docs/ielts-english.pdf' },
  { name: 'Hindi', level: 'Conversational', pips: 3, doc: null },
  { name: 'French', level: 'Elementary · DELF A1', pips: 2, doc: '/docs/delf-a1-french.pdf' },
  { name: 'German', level: 'Elementary · telc A1', pips: 2, doc: '/docs/telc-a1-german.pdf' }
];

const artists = [
  { name: 'Kanye West', songs: ['Stronger', 'Runaway', 'Flashing Lights'] },
  { name: 'Rei Brown', songs: ['Edges', 'Yosemite', 'Chateau'] },
  { name: 'Bixby', songs: [] },
  { name: 'Travis Scott', songs: ['SICKO MODE', 'Goosebumps', 'HIGHEST IN THE ROOM'] },
  { name: 'Ilaiyaraaja', songs: ['Ilaya Nila', 'Thendral Vandhu', 'Janani Janani'] },
  { name: 'PARTYNEXTDOOR', songs: ['Come and See Me', 'Loyal', 'Recognize'] },
  { name: 'Joji', songs: ['Slow Dancing in the Dark', 'Glimpse of Us', 'Sanctuary'] }
];

const yt = (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

function Pips({ n }) {
  return (
    <span className="pips" aria-label={`${n} of 5`}>
      {'■'.repeat(n)}
      {'□'.repeat(5 - n)}
    </span>
  );
}

function MusicOfTheDay() {
  const [i, setI] = useState(0);
  useEffect(() => {
    setI(Math.floor(Math.random() * artists.length));
  }, []);
  const a = artists[i];
  return (
    <>
      <div className="section-sub" style={{ marginBottom: '6px' }}>Music of the Day</div>
      <hr className="rule-hair" style={{ marginBottom: '6px' }} />
      <div className="music-note">
        Now spinning
        <span className="eq" aria-hidden="true"><span /><span /><span /><span /></span>
      </div>
      <div className="music-artist">
        <a href={yt(a.name)} target="_blank" rel="noopener noreferrer">{a.name}</a>
      </div>
      {a.songs.length > 0 ? (
        <ul className="music-tracks">
          {a.songs.map((s) => (
            <li key={s}>
              <a href={yt(`${a.name} ${s}`)} target="_blank" rel="noopener noreferrer">{s}</a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="music-note" style={{ marginTop: '4px' }}>
          Selections from the catalogue — tune in above.
        </div>
      )}
    </>
  );
}

function Ticker() {
  const line = (keyPrefix) =>
    tickerItems.map((t, idx) => (
      <span className="ticker-item" key={`${keyPrefix}-${idx}`}>
        <b>{t[0]}</b>
        {t[1]}
        <span className="ticker-sep">◆</span>
      </span>
    ));

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-label">Late Edition</div>
      <div className="ticker-track">
        <div className="ticker-move">
          {line('a')}
          {line('b')}
        </div>
      </div>
    </div>
  );
}

function MovingPhoto() {
  return (
    <figure className="moving-photo">
      <div className="photo-frame">
        <svg viewBox="0 0 800 320" preserveAspectRatio="xMidYMid slice" role="img"
             aria-label="A microchip with electricity pulsing through circuit traces">
          <defs>
            <linearGradient id="pulse-r" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#000" stopOpacity="0"><animate attributeName="offset" values="-0.3;1.1" dur="2s" repeatCount="indefinite" /></stop>
              <stop offset="0.15" stopColor="#000" stopOpacity="1"><animate attributeName="offset" values="-0.15;1.25" dur="2s" repeatCount="indefinite" /></stop>
              <stop offset="0.3" stopColor="#000" stopOpacity="0"><animate attributeName="offset" values="0;1.4" dur="2s" repeatCount="indefinite" /></stop>
            </linearGradient>
            <linearGradient id="pulse-l" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0" stopColor="#000" stopOpacity="0"><animate attributeName="offset" values="-0.3;1.1" dur="2.4s" repeatCount="indefinite" /></stop>
              <stop offset="0.15" stopColor="#000" stopOpacity="1"><animate attributeName="offset" values="-0.15;1.25" dur="2.4s" repeatCount="indefinite" /></stop>
              <stop offset="0.3" stopColor="#000" stopOpacity="0"><animate attributeName="offset" values="0;1.4" dur="2.4s" repeatCount="indefinite" /></stop>
            </linearGradient>
            <linearGradient id="pulse-d" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#000" stopOpacity="0"><animate attributeName="offset" values="-0.3;1.1" dur="1.8s" repeatCount="indefinite" /></stop>
              <stop offset="0.15" stopColor="#000" stopOpacity="1"><animate attributeName="offset" values="-0.15;1.25" dur="1.8s" repeatCount="indefinite" /></stop>
              <stop offset="0.3" stopColor="#000" stopOpacity="0"><animate attributeName="offset" values="0;1.4" dur="1.8s" repeatCount="indefinite" /></stop>
            </linearGradient>
            <linearGradient id="pulse-u" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#000" stopOpacity="0"><animate attributeName="offset" values="-0.3;1.1" dur="2.2s" repeatCount="indefinite" /></stop>
              <stop offset="0.15" stopColor="#000" stopOpacity="1"><animate attributeName="offset" values="-0.15;1.25" dur="2.2s" repeatCount="indefinite" /></stop>
              <stop offset="0.3" stopColor="#000" stopOpacity="0"><animate attributeName="offset" values="0;1.4" dur="2.2s" repeatCount="indefinite" /></stop>
            </linearGradient>
          </defs>

          {/* Background grid */}
          <g stroke="rgba(0,0,0,0.06)" strokeWidth="0.5">
            {Array.from({ length: 41 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="320" />
            ))}
            {Array.from({ length: 17 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 20} x2="800" y2={i * 20} />
            ))}
          </g>

          {/* Central chip body */}
          <rect x="310" y="100" width="180" height="120" fill="#000" rx="4" />
          <rect x="318" y="108" width="164" height="104" fill="none" stroke="#fff" strokeWidth="1" rx="2" />
          <circle cx="334" cy="124" r="6" fill="none" stroke="#fff" strokeWidth="1" />
          <text x="400" y="155" textAnchor="middle" fill="#fff" fontFamily="var(--font-mono-news), monospace" fontSize="11" letterSpacing="2">EMBEDDED</text>
          <text x="400" y="172" textAnchor="middle" fill="#fff" fontFamily="var(--font-mono-news), monospace" fontSize="11" letterSpacing="2">AI · IoT</text>
          <text x="400" y="196" textAnchor="middle" fill="#fff" fontFamily="var(--font-mono-news), monospace" fontSize="9" letterSpacing="1">SA-2026</text>

          {/* Chip pins — top */}
          {[340, 360, 380, 400, 420, 440, 460].map((x) => (
            <rect key={`pt${x}`} x={x - 4} y="88" width="8" height="14" fill="#000" />
          ))}
          {/* Chip pins — bottom */}
          {[340, 360, 380, 400, 420, 440, 460].map((x) => (
            <rect key={`pb${x}`} x={x - 4} y="218" width="8" height="14" fill="#000" />
          ))}
          {/* Chip pins — left */}
          {[120, 140, 160, 180, 200].map((y) => (
            <rect key={`pl${y}`} x="298" y={y - 4} width="14" height="8" fill="#000" />
          ))}
          {/* Chip pins — right */}
          {[120, 140, 160, 180, 200].map((y) => (
            <rect key={`pr${y}`} x={488} y={y - 4} width="14" height="8" fill="#000" />
          ))}

          {/* Circuit traces — right side with pulse */}
          <g fill="none" strokeWidth="2">
            <path d="M502,120 H580 V60 H700" stroke="rgba(0,0,0,0.15)" />
            <path d="M502,120 H580 V60 H700" stroke="url(#pulse-r)" />
            <path d="M502,140 H620 V140 H740" stroke="rgba(0,0,0,0.15)" />
            <path d="M502,140 H620 V140 H740" stroke="url(#pulse-r)" />
            <path d="M502,160 H560 V220 H680" stroke="rgba(0,0,0,0.15)" />
            <path d="M502,160 H560 V220 H680" stroke="url(#pulse-r)" />
            <path d="M502,180 H600 V280 H760" stroke="rgba(0,0,0,0.15)" />
            <path d="M502,180 H600 V280 H760" stroke="url(#pulse-r)" />
            <path d="M502,200 H540 V260 H700" stroke="rgba(0,0,0,0.15)" />
            <path d="M502,200 H540 V260 H700" stroke="url(#pulse-r)" />
          </g>

          {/* Circuit traces — left side with pulse */}
          <g fill="none" strokeWidth="2">
            <path d="M298,120 H220 V40 H60" stroke="rgba(0,0,0,0.15)" />
            <path d="M298,120 H220 V40 H60" stroke="url(#pulse-l)" />
            <path d="M298,140 H180 V140 H40" stroke="rgba(0,0,0,0.15)" />
            <path d="M298,140 H180 V140 H40" stroke="url(#pulse-l)" />
            <path d="M298,160 H240 V80 H100" stroke="rgba(0,0,0,0.15)" />
            <path d="M298,160 H240 V80 H100" stroke="url(#pulse-l)" />
            <path d="M298,180 H200 V240 H80" stroke="rgba(0,0,0,0.15)" />
            <path d="M298,180 H200 V240 H80" stroke="url(#pulse-l)" />
            <path d="M298,200 H260 V280 H120" stroke="rgba(0,0,0,0.15)" />
            <path d="M298,200 H260 V280 H120" stroke="url(#pulse-l)" />
          </g>

          {/* Circuit traces — top with pulse */}
          <g fill="none" strokeWidth="2">
            <path d="M340,88 V50 H200" stroke="rgba(0,0,0,0.15)" />
            <path d="M340,88 V50 H200" stroke="url(#pulse-u)" />
            <path d="M380,88 V30 H140" stroke="rgba(0,0,0,0.15)" />
            <path d="M380,88 V30 H140" stroke="url(#pulse-u)" />
            <path d="M420,88 V40 H560" stroke="rgba(0,0,0,0.15)" />
            <path d="M420,88 V40 H560" stroke="url(#pulse-u)" />
            <path d="M460,88 V20 H640" stroke="rgba(0,0,0,0.15)" />
            <path d="M460,88 V20 H640" stroke="url(#pulse-u)" />
          </g>

          {/* Circuit traces — bottom with pulse */}
          <g fill="none" strokeWidth="2">
            <path d="M340,232 V270 H180" stroke="rgba(0,0,0,0.15)" />
            <path d="M340,232 V270 H180" stroke="url(#pulse-d)" />
            <path d="M380,232 V290 H260" stroke="rgba(0,0,0,0.15)" />
            <path d="M380,232 V290 H260" stroke="url(#pulse-d)" />
            <path d="M420,232 V260 H540" stroke="rgba(0,0,0,0.15)" />
            <path d="M420,232 V260 H540" stroke="url(#pulse-d)" />
            <path d="M460,232 V300 H620" stroke="rgba(0,0,0,0.15)" />
            <path d="M460,232 V300 H620" stroke="url(#pulse-d)" />
          </g>

          {/* Trace endpoints — small pads */}
          {[[700,60],[740,140],[680,220],[760,280],[700,260],
            [60,40],[40,140],[100,80],[80,240],[120,280],
            [200,50],[140,30],[560,40],[640,20],
            [180,270],[260,290],[540,260],[620,300]].map(([cx,cy], i) => (
            <circle key={`pad${i}`} cx={cx} cy={cy} r="4" fill="#000" />
          ))}
        </svg>
      </div>
    </figure>
  );
}

export default function Hero() {
  // Render the viewer's own local date, client-side, to avoid hydration mismatch.
  const [today, setToday] = useState('');
  useEffect(() => {
    setToday(
      new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    );
  }, []);

  return (
    <header>
      {/* Top bar */}
      <hr className="rule-hair" />
      <div className="topbar">
        <span>Vol. I · No. 1</span>
        <span>Portfolio Edition</span>
        <span>Est. 2025</span>
      </div>
      <hr className="rule-hair" />

      {/* Nameplate with skyline + TV static behind it */}
      <div className="masthead-wrap">
        <SkylineBackdrop />
        <span className="tv-static" aria-hidden="true" />
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="nameplate font-masthead"
        >
          The Times of Shrinikheathan
        </motion.h1>
      </div>
      <p className="motto">
        The most passion you&rsquo;ll ever see in an Automotive Embedded AI&nbsp;Engineer.
      </p>

      <hr className="rule-double" />
      <div className="dateline">
        <span>{today || ' '}</span>
        <span className="center">Embedded Systems, IoT and AI</span>
        <a href="/page-2" className="rainbow-link">
          ★ About Me ·
        </a>
      </div>

      {/* Moving ticker */}
      <Ticker />

      {/* Front page: lead story + sidebar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2.4fr) minmax(0, 1fr)',
          gap: '30px',
          padding: '22px 0 12px'
        }}
        className="frontpage-grid"
      >
        {/* LEAD STORY */}
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="headline lead-headline" style={{ fontSize: 'clamp(24px, 4.5vw, 52px)', lineHeight: 1.12, padding: '18px 0 6px' }}>
            You Know What Goes Better Than Bread, Butter and Jam? Me, Embedded Systems and&nbsp;AI.
          </h2>
          <div style={{ textAlign: 'center', margin: '10px 0 14px' }}>
            <span className="byline">By Shrinikheathan Arunkumar</span>
          </div>
          <hr className="rule-thin" style={{ marginBottom: '16px' }} />

          <MovingPhoto />

          <div className="prose cols-2 dropcap" style={{ marginTop: '16px', fontSize: '19px' }}>
            <p>
              Thank you for making it here. The machines I grew up admiring &mdash; the engineering
              in Porsche, Honda and Aston Martin were proof that creativity, curiosity and intellect
              can shape entire industries.
            </p>
            <p>
              That is the exact attitude I carry into work as well. I am wired to understand how
              things move, why they move, and how to make them move better and most importantly
              &mdash; you guessed it, FASTER.
            </p>
            <p>
              I chase novelty and innovation that involves the best of three worlds: Automotive
              Software, Embedded Systems and Artificial Intelligence.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '18px' }}>
            <a
              href="/Shrinikheathan-Arunkumar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="news-btn"
            >
              The Résumé, in Full
            </a>
          </div>
        </motion.article>

        {/* SIDEBAR */}
        <motion.aside
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ borderLeft: '1px solid rgba(21,21,21,0.25)', paddingLeft: '24px' }}
          className="frontpage-aside"
        >
          {/* Portrait */}
          <figure className="portrait" style={{ marginBottom: '18px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/portrait.jpg" alt="Shrinikheathan Arunkumar" />
            <figcaption>Shrinikheathan Arunkumar, reporting from the southeast</figcaption>
          </figure>

          <div className="box-hair" style={{ marginBottom: '18px' }}>
            <div className="section-sub" style={{ marginBottom: '8px' }}>In This Issue</div>
            <ul className="issue-list">
              <li><a href="#current">Trending Now</a><span className="pg">p. 1</span></li>
              <li><a href="#experience">Career Trajectory</a><span className="pg">p. 2</span></li>
              <li><a href="#projects">The Projects Desk</a><span className="pg">p. 3</span></li>
              <li><a href="#certifications">On the Record</a><span className="pg">p. 4</span></li>
            </ul>
          </div>

          <div className="section-sub" style={{ marginBottom: '6px' }}>Weather</div>
          <hr className="rule-hair" style={{ marginBottom: '8px' }} />
          <p className="prose" style={{ fontSize: '14px', marginBottom: '18px' }}>
            Weather&rsquo;s always sunny when I&rsquo;m under it. Problem is, it also makes me sweat
            a lot. Not that I can&rsquo;t handle it.
          </p>

          <div className="section-sub" style={{ marginBottom: '6px' }}>The Polyglot&rsquo;s Corner</div>
          <hr className="rule-hair" style={{ marginBottom: '4px' }} />
          <div style={{ marginBottom: '18px' }}>
            {languages.map((l) => (
              <div className="lang-row" key={l.name}>
                <span className="lang-name">
                  {l.doc ? (
                    <a href={l.doc} target="_blank" rel="noopener noreferrer">{l.name}</a>
                  ) : (
                    l.name
                  )}
                </span>
                <span className="lang-meta">
                  <Pips n={l.pips} />
                  <span className="lang-level">{l.level}</span>
                </span>
              </div>
            ))}
          </div>

        </motion.aside>
      </div>

      <hr className="rule-thick" style={{ marginTop: '8px' }} />

      <style jsx>{`
        @media (max-width: 820px) {
          :global(.frontpage-grid) {
            grid-template-columns: 1fr !important;
          }
          :global(.frontpage-aside) {
            border-left: 0 !important;
            padding-left: 0 !important;
            border-top: 3px double var(--rule);
            padding-top: 18px !important;
          }
        }
      `}</style>
    </header>
  );
}
