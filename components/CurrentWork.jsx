// components/CurrentWork.jsx
'use client';
import { motion, useMotionValue, animate } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../lib/LanguageContext';

const cards = [
  {
    kickerKey: 'current.card0.kicker',
    headlineKey: 'current.card0.headline',
    bylineKey: 'current.card0.byline',
    projects: [
      { nameKey: 'current.card0.proj0.name', descKey: 'current.card0.proj0.desc', tags: ['Embedded Systems', 'IEMDP', 'ISEP', 'Masters'] },
    ]
  },
  {
    kickerKey: 'current.card1.kicker',
    headlineKey: 'current.card1.headline',
    bylineKey: 'current.card1.byline',
    projects: [
      { nameKey: 'current.card1.proj0.name', descKey: 'current.card1.proj0.desc', tags: ['Mobile', 'Diagnostics', 'OBD', 'Automotive'] },
      { nameKey: 'current.card1.proj1.name', descKey: 'current.card1.proj1.desc', tags: ['Python', 'OpenCV', 'FaceNet', 'Biometrics'] },
    ]
  }
];

export default function CurrentWork() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const dragRef = useRef(null);
  const autoRef = useRef(null);

  function getCardWidth() {
    if (!containerRef.current) return 500;
    return containerRef.current.offsetWidth;
  }

  function snapTo(index) {
    const clamped = Math.max(0, Math.min(index, cards.length - 1));
    setActive(clamped);
    animate(x, -clamped * getCardWidth(), {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 0.8,
    });
  }

  function resetAutoAdvance() {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      setActive(prev => {
        const next = (prev + 1) % cards.length;
        const width = containerRef.current?.offsetWidth || 500;
        animate(x, -next * width, { type: 'spring', stiffness: 300, damping: 30, mass: 0.8 });
        return next;
      });
    }, 5000);
  }

  useEffect(() => {
    resetAutoAdvance();
    return () => clearInterval(autoRef.current);
  }, []);

  function handleDragEnd(_, info) {
    const threshold = getCardWidth() * 0.2;
    const velocity = info.velocity.x;
    let next = active;

    if (velocity < -200 || info.offset.x < -threshold) {
      next = active + 1;
    } else if (velocity > 200 || info.offset.x > threshold) {
      next = active - 1;
    }

    snapTo(next);
    resetAutoAdvance();
  }

  return (
    <section id="current" className="section-space">
      <div className="section-head">
        <span className="section-label">{t('current.label')}</span>
      </div>
      <hr className="rule-thin" style={{ marginBottom: '18px' }} />

      <div
        ref={containerRef}
        style={{ overflow: 'hidden', position: 'relative', cursor: 'grab' }}
      >
        <motion.div
          ref={dragRef}
          drag="x"
          dragConstraints={{ left: -(cards.length - 1) * (containerRef.current?.offsetWidth || 500), right: 0 }}
          dragElastic={0.15}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
          onDragEnd={handleDragEnd}
          style={{
            display: 'flex',
            gap: 0,
            x,
            touchAction: 'pan-y',
          }}
          whileDrag={{ cursor: 'grabbing' }}
        >
          {cards.map((card, ci) => (
              <motion.div
                key={ci}
                className="breaking"
                initial={{ opacity: 0, scale: 0.92, rotate: -1 }}
                animate={{
                  opacity: active === ci ? 1 : 0.5,
                  scale: active === ci ? 1 : 0.95,
                  rotate: active === ci ? 0 : -1,
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                style={{
                  minWidth: '100%',
                  flex: '0 0 100%',
                }}
              >
                <span className="kicker">{t(card.kickerKey)}</span>
                <h3 className="headline" style={{ fontSize: 'clamp(24px, 4vw, 38px)', margin: '6px 0 4px' }}>
                  {t(card.headlineKey)}
                </h3>
                <div className="byline" style={{ marginBottom: '16px' }}>
                  {t(card.bylineKey)}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                  {card.projects.map((p, i) => (
                    <div key={i} style={{ borderTop: '2px solid var(--rule)', paddingTop: '14px' }}>
                      <h4 className="article-title" style={{ fontSize: '18px', margin: '0 0 8px' }}>{t(p.nameKey)}</h4>
                      <p className="prose" style={{ fontSize: '15px', margin: '0 0 10px' }}>{t(p.descKey)}</p>
                      <span className="filed"><b>{t('current.filedUnder')}</b> {p.tags.join(' · ')}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '16px' }}>
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => snapTo(i)}
            aria-label={`Go to story ${i + 1}`}
            style={{
              width: active === i ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              border: '1.5px solid var(--ink)',
              background: active === i ? 'var(--ink)' : 'transparent',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  );
}
