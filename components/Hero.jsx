// components/Hero.jsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SkylineBackdrop from './SkylineBackdrop';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../lib/LanguageContext';

const tickerKeys = [
  ['Pixolish Systems:', 'ticker.pixolish'],
  ['Spark Minda:', 'ticker.sparkSDE'],
  ['Spark Minda:', 'ticker.sparkTest'],
  ['Tecknodreams:', 'ticker.tekno'],
  ['CAN Bus:', 'ticker.can'],
  ['Campus Sentry:', 'ticker.campus'],
  ['IoT:', 'ticker.iot'],
];

const resumeByLang = {
  en: '/ResumeEN.pdf',
  fr: '/ResumeFR.pdf',
  de: '/ResumeDE.pdf',
  it: '/ResumeIT.pdf',
  ta: '/ResumeEN.pdf',
};

const resumeLangLinks = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
];

const languages = [
  { name: 'Tamil', levelKey: 'lang.native', pips: 5, doc: '/docs/tamil-certificate.pdf' },
  { name: 'English', levelKey: 'lang.professional', pips: 5, doc: '/docs/ielts-english.pdf' },
  { name: 'Hindi', levelKey: 'lang.conversational', pips: 3, doc: null },
  { name: 'French', levelKey: 'lang.elementary', pips: 2, extra: 'DELF A1', doc: '/docs/delf-a1-french.pdf' },
  { name: 'German', levelKey: 'lang.elementary', pips: 2, extra: 'telc A1', doc: '/docs/telc-a1-german.pdf' },
];


function Pips({ n }) {
  return (
    <span className="pips" aria-label={`${n} of 5`}>
      {'■'.repeat(n)}
      {'□'.repeat(5 - n)}
    </span>
  );
}

function Ticker({ t }) {
  const line = (keyPrefix) =>
    tickerKeys.map((tk, idx) => (
      <span className="ticker-item" key={`${keyPrefix}-${idx}`}>
        <b>{tk[0]}</b>
        {' '}{t(tk[1])}
        <span className="ticker-sep">◆</span>
      </span>
    ));

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-label">{t('hero.lateEdition')}</div>
      <div className="ticker-track">
        <div className="ticker-move">
          {line('a')}
          {line('b')}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t, n, lang } = useLanguage();
  const [poke, setPoke] = useState(null);
  const [pokeIndex, setPokeIndex] = useState(0);

  function playPokeSound(index) {
    try {
      if (!window.__pokeAudio) {
        window.__pokeAudio = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = window.__pokeAudio;
      if (ctx.state === 'suspended') ctx.resume();
      const time = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      const sounds = [
        () => { osc.type = 'sine'; osc.frequency.setValueAtTime(800, time); osc.frequency.exponentialRampToValueAtTime(200, time + 0.15); gain.gain.setValueAtTime(0.12, time); gain.gain.exponentialRampToValueAtTime(0.001, time + 0.15); osc.start(time); osc.stop(time + 0.15); },
        () => { osc.type = 'square'; osc.frequency.setValueAtTime(300, time); osc.frequency.exponentialRampToValueAtTime(100, time + 0.12); gain.gain.setValueAtTime(0.06, time); gain.gain.exponentialRampToValueAtTime(0.001, time + 0.12); osc.start(time); osc.stop(time + 0.12); },
        () => { osc.type = 'sine'; osc.frequency.setValueAtTime(1200, time); osc.frequency.exponentialRampToValueAtTime(1600, time + 0.08); osc.frequency.exponentialRampToValueAtTime(400, time + 0.2); gain.gain.setValueAtTime(0.08, time); gain.gain.exponentialRampToValueAtTime(0.001, time + 0.2); osc.start(time); osc.stop(time + 0.2); },
        () => { osc.type = 'triangle'; osc.frequency.setValueAtTime(600, time); osc.frequency.setValueAtTime(700, time + 0.05); osc.frequency.setValueAtTime(500, time + 0.1); gain.gain.setValueAtTime(0.1, time); gain.gain.exponentialRampToValueAtTime(0.001, time + 0.18); osc.start(time); osc.stop(time + 0.18); },
        () => { osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, time); osc.frequency.exponentialRampToValueAtTime(80, time + 0.25); gain.gain.setValueAtTime(0.04, time); gain.gain.exponentialRampToValueAtTime(0.001, time + 0.25); osc.start(time); osc.stop(time + 0.25); },
      ];
      sounds[index % sounds.length]();
    } catch {}
  }

  function handlePoke() {
    const msg = t(`poke.${pokeIndex % 15}`);
    playPokeSound(pokeIndex);
    setPokeIndex(prev => prev + 1);
    setPoke({ msg, id: Date.now() });
    setTimeout(() => setPoke(null), 1200);
  }

  const [today, setToday] = useState('');
  useEffect(() => {
    const locale = t('_locale') || 'en-GB';
    setToday(
      new Date().toLocaleDateString(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    );
  }, [lang, t]);

  return (
    <header>
      <LanguageSwitcher />
      <hr className="rule-hair" />
      <div className="topbar">
        <span>{t('hero.vol')}</span>
        <span>{t('hero.edition')}</span>
        <span>{t('hero.est')}</span>
      </div>
      <hr className="rule-hair" />

      <div className="masthead-wrap">
        <SkylineBackdrop />
        <span className="tv-static" aria-hidden="true" />
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="nameplate font-nameplate"
        >
          {t('masthead')}
        </motion.h1>
      </div>
      <p className="motto">{t('hero.motto')}</p>

      <hr className="rule-double" />
      <div className="dateline">
        <span>{today || ' '}</span>
        <span className="center">{t('hero.field')}</span>
        <a href="/page-2" className="rainbow-link">
          {t('hero.aboutMe')}
        </a>
      </div>

      <Ticker t={t} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2.4fr) minmax(0, 1fr)',
          gap: '30px',
          padding: '22px 0 12px'
        }}
        className="frontpage-grid"
      >
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="headline lead-headline" style={{ fontSize: 'clamp(24px, 4.5vw, 52px)', lineHeight: 1.12, padding: '18px 0 6px' }}>
            {t('hero.headline')}
          </h2>
          <div style={{ textAlign: 'center', margin: '10px 0 14px' }}>
            <span className="byline">{t('hero.byline')}</span>
          </div>
          <hr className="rule-thin" style={{ marginBottom: '16px' }} />

          <div className="prose cols-2 dropcap" style={{ marginTop: '16px', fontSize: '19px' }}>
            <p>{t('hero.prose1')}</p>
            <p>{t('hero.prose2')}</p>
            <p>{t('hero.prose3')}</p>
          </div>

          <div style={{ marginTop: '24px' }}>
            <a
              href={resumeByLang[lang] || '/ResumeEN.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-cta"
            >
              {t('hero.resumeBtn')}
            </a>
            <div style={{ marginTop: '10px', fontSize: '13px', fontFamily: 'var(--font-body), serif', color: 'var(--ink-2)' }}>
              <span style={{ fontStyle: 'italic' }}>{t('hero.resumeLangs')}</span>
              <span style={{ marginLeft: '6px' }}>
                {resumeLangLinks
                  .filter(rl => rl.code !== lang)
                  .map((rl, i, arr) => (
                    <span key={rl.code}>
                      <a
                        href={resumeByLang[rl.code]}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--accent)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                      >
                        {rl.label}
                      </a>
                      {i < arr.length - 1 ? <span style={{ margin: '0 4px' }}>·</span> : ''}
                    </span>
                  ))}
                <span style={{ margin: '0 4px' }}>·</span>
                <span style={{ opacity: 0.55, fontStyle: 'italic' }}>{t('hero.resumeTamilWip')}</span>
              </span>
            </div>
          </div>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ borderLeft: '1px solid rgba(21,21,21,0.25)', paddingLeft: '24px' }}
          className="frontpage-aside"
        >
          <figure className="portrait" style={{ marginBottom: '18px', position: 'relative', overflow: 'visible' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src="/images/portrait.jpg"
              alt={t('author.name')}
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
            <figcaption>{t('hero.caption')}</figcaption>
            <figcaption style={{ fontSize: '10px', marginTop: '2px' }}>{t('hero.location')}</figcaption>
          </figure>

          <div className="box-hair" style={{ marginBottom: '18px' }}>
            <div className="section-sub" style={{ marginBottom: '8px' }}>{t('hero.inThisIssue')}</div>
            <ul className="issue-list">
              <li><a href="#current">{t('hero.issueTrending')}</a><span className="pg">{t('hero.p')} {n(1)}</span></li>
              <li><a href="#experience">{t('hero.issueCareer')}</a><span className="pg">{t('hero.p')} {n(2)}</span></li>
              <li><a href="#projects">{t('hero.issueProjects')}</a><span className="pg">{t('hero.p')} {n(3)}</span></li>
              <li><a href="#academics">{t('hero.issueAcademics')}</a><span className="pg">{t('hero.p')} {n(4)}</span></li>
              <li><a href="#certifications">{t('hero.issueRecord')}</a><span className="pg">{t('hero.p')} {n(5)}</span></li>
              <li><a href="#connect">{t('hero.issueConnect')}</a><span className="pg">{t('hero.p')} {n(6)}</span></li>
            </ul>
          </div>

          <div className="section-sub" style={{ marginBottom: '6px' }}>{t('hero.weather')}</div>
          <hr className="rule-hair" style={{ marginBottom: '8px' }} />
          <p className="prose" style={{ fontSize: '14px', marginBottom: '18px' }}>
            {t('hero.weatherText')}
          </p>

          <div className="section-sub" style={{ marginBottom: '6px' }}>{t('hero.polyglot')}</div>
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
                  <span className="lang-level">{t(l.levelKey)}{l.extra ? ` · ${l.extra}` : ''}</span>
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
