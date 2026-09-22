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


const pokeReactions = ['Ow.', 'Stop that.', 'Urk.', 'No.', 'Hey!', 'Quit it.', 'Oi!', 'Rude.', 'Bruh.', 'Not cool.', 'Again?', 'Why.', 'Excuse me?', 'Seriously?', '...really?'];

export default function Hero() {
  const [poke, setPoke] = useState(null);
  const [pokeIndex, setPokeIndex] = useState(0);

  function playPokeSound(index) {
    try {
      if (!window.__pokeAudio) {
        window.__pokeAudio = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = window.__pokeAudio;
      if (ctx.state === 'suspended') ctx.resume();
      const t = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const sounds = [
        () => { osc.type = 'sine'; osc.frequency.setValueAtTime(800, t); osc.frequency.exponentialRampToValueAtTime(200, t + 0.15); gain.gain.setValueAtTime(0.12, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15); osc.start(t); osc.stop(t + 0.15); },
        () => { osc.type = 'square'; osc.frequency.setValueAtTime(300, t); osc.frequency.exponentialRampToValueAtTime(100, t + 0.12); gain.gain.setValueAtTime(0.06, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12); osc.start(t); osc.stop(t + 0.12); },
        () => { osc.type = 'sine'; osc.frequency.setValueAtTime(1200, t); osc.frequency.exponentialRampToValueAtTime(1600, t + 0.08); osc.frequency.exponentialRampToValueAtTime(400, t + 0.2); gain.gain.setValueAtTime(0.08, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2); osc.start(t); osc.stop(t + 0.2); },
        () => { osc.type = 'triangle'; osc.frequency.setValueAtTime(600, t); osc.frequency.setValueAtTime(700, t + 0.05); osc.frequency.setValueAtTime(500, t + 0.1); gain.gain.setValueAtTime(0.1, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18); osc.start(t); osc.stop(t + 0.18); },
        () => { osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, t); osc.frequency.exponentialRampToValueAtTime(80, t + 0.25); gain.gain.setValueAtTime(0.04, t); gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25); osc.start(t); osc.stop(t + 0.25); },
      ];
      sounds[index % sounds.length]();
    } catch {}
  }

  function handlePoke() {
    const msg = pokeReactions[pokeIndex % pokeReactions.length];
    playPokeSound(pokeIndex);
    setPokeIndex(prev => prev + 1);
    setPoke({ msg, id: Date.now() });
    setTimeout(() => setPoke(null), 1200);
  }

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
        The most passion you&rsquo;ll ever see in an&nbsp;Engineer.
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

          <div style={{ marginTop: '24px' }}>
            <a
              href="/Shrinikheathan-Arunkumar-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-cta"
            >
              ★ The Résumé, in Full ★
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
          <figure className="portrait" style={{ marginBottom: '18px', position: 'relative', overflow: 'visible' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src="/images/portrait.jpg"
              alt="Shrinikheathan Arunkumar"
              onClick={handlePoke}
              animate={poke ? { x: [0, -6, 5, -3, 2, 0], scale: [1, 0.97, 1.01, 0.99, 1] } : {}}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              style={{ cursor: 'inherit', borderRadius: '12px' }}
            />
            {poke && (
              <motion.span
                key={poke.id}
                initial={{ opacity: 0, y: 8, scale: 0.5 }}
                animate={{ opacity: 1, y: -8, scale: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                style={{
                  position: 'absolute',
                  top: '8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontFamily: 'var(--font-headline), serif',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  fontSize: '22px',
                  color: 'var(--ink)',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                  pointerEvents: 'none',
                  textShadow: '0 0 8px var(--paper), 0 0 16px var(--paper)',
                }}
              >
                {poke.msg}
              </motion.span>
            )}
            <figcaption>Shrinikheathan Arunkumar</figcaption>
            <figcaption style={{ fontSize: '10px', marginTop: '2px' }}>Currently based in Paris, France.</figcaption>
          </figure>

          <div className="box-hair" style={{ marginBottom: '18px' }}>
            <div className="section-sub" style={{ marginBottom: '8px' }}>In This Issue</div>
            <ul className="issue-list">
              <li><a href="#current">Trending Now</a><span className="pg">p. 1</span></li>
              <li><a href="#experience">Career Trajectory</a><span className="pg">p. 2</span></li>
              <li><a href="#projects">The Projects Desk</a><span className="pg">p. 3</span></li>
              <li><a href="#academics">The Academics Desk</a><span className="pg">p. 4</span></li>
              <li><a href="#certifications">On the Record</a><span className="pg">p. 5</span></li>
              <li><a href="#connect">Connect</a><span className="pg">p. 6</span></li>
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
