// components/CurrentWork.jsx
'use client';
import { motion, useMotionValue, useTransform, useAnimation, animate } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const cards = [
  {
    kicker: '◆ Paris, France · Since Sep 2026',
    headline: 'Pursuing Masters at ISEP, Paris',
    byline: 'IEMDP — Embedded Systems',
    projects: [
      {
        name: 'International Embedded Master Degree Program',
        desc: 'Currently pursuing a Master\'s degree in Embedded Systems at ISEP (Institut Supérieur d\'Électronique de Paris), specializing in the IEMDP track covering hardware-software co-design, real-time systems, and IoT architectures.',
        tags: ['Embedded Systems', 'IEMDP', 'ISEP', 'Masters'],
      }
    ]
  },
  {
    kicker: '◆ On-site, Bengaluru · Since Feb 2026',
    headline: 'Currently Interning at Spark Minda',
    byline: 'SDE Intern · Spark Minda Limited',
    projects: [
      {
        name: 'TPMS — Tyre Pressure Monitoring & Fault Diagnosis App',
        desc: 'Built a proof-of-concept mechanic diagnostic tool letting workshop technicians of an undisclosed motorcycle manufacturer read and diagnose fault codes without needing a CAN interface.',
        tags: ['Mobile', 'Diagnostics', 'OBD', 'Automotive'],
      },
      {
        name: 'Facial Biometric Unlock for Automotives',
        desc: 'Built an end-to-end facial biometric unlock pipeline in Python with zero network dependency — OpenCV SSD (ResNet-10) detection with FaceNet 512-d embeddings, tuned to <0.1% false-accept at ~5 FPS, CPU-only, sub-2-second unlock.',
        tags: ['Python', 'OpenCV', 'FaceNet', 'Biometrics'],
      }
    ]
  }
];

export default function CurrentWork() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const dragRef = useRef(null);

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
  }

  return (
    <section id="current" className="section-space">
      <div className="section-head">
        <span className="section-label">Trending Now</span>
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
          {cards.map((card, ci) => {
            const cardX = useTransform(x, (v) => {
              const offset = v + ci * (containerRef.current?.offsetWidth || 500);
              return offset;
            });
            const rotate = useTransform(cardX, [-600, 0, 600], [-1.5, 0, 1.5]);
            const scale = useTransform(cardX, [-400, 0, 400], [0.97, 1, 0.97]);

            return (
              <motion.div
                key={ci}
                className="breaking"
                style={{
                  minWidth: '100%',
                  flex: '0 0 100%',
                  rotate,
                  scale,
                  transformOrigin: 'center bottom',
                }}
              >
                <span className="kicker">{card.kicker}</span>
                <h3 className="headline" style={{ fontSize: 'clamp(24px, 4vw, 38px)', margin: '6px 0 4px' }}>
                  {card.headline}
                </h3>
                <div className="byline" style={{ marginBottom: '16px' }}>
                  {card.byline}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                  {card.projects.map((p, i) => (
                    <div key={i} style={{ borderTop: '2px solid var(--rule)', paddingTop: '14px' }}>
                      <h4 className="article-title" style={{ fontSize: '18px', margin: '0 0 8px' }}>{p.name}</h4>
                      <p className="prose" style={{ fontSize: '15px', margin: '0 0 10px' }}>{p.desc}</p>
                      <span className="filed"><b>Filed under:</b> {p.tags.join(' · ')}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* dot indicators */}
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
