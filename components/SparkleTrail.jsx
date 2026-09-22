// components/SparkleTrail.jsx
'use client';
import { useEffect, useRef } from 'react';

const STAR_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="SIZE" height="SIZE" viewBox="0 0 24 24"><path d="M12 1l3.09 6.26L22 8.27l-5 4.87L18.18 20 12 16.77 5.82 20 7 13.14 2 8.27l6.91-1.01L12 1z" fill="COLOR" stroke="COLOR" stroke-width="0.5"/></svg>`;

const COLORS = ['#000', '#333', '#555', '#888', '#444'];

function spawnParticle(x, y) {
  const count = 2 + Math.floor(Math.random() * 3);
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'sparkle-particle';
    const size = 6 + Math.random() * 10;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const angle = Math.random() * Math.PI * 2;
    const dist = 10 + Math.random() * 25;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;

    el.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      --dx: ${dx}px;
      --dy: ${dy}px;
    `;

    const svg = STAR_SVG.replace(/SIZE/g, size).replace(/COLOR/g, color);
    el.innerHTML = svg;

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 600);
  }
}

function wrapTextNodes(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest('.skyline, script, style, noscript, .sparkle-char, svg, .no-sparkle'))
        return NodeFilter.FILTER_REJECT;
      if (parent.classList.contains('sparkle-char')) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'SVG') return NodeFilter.FILTER_REJECT;
      if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(textNode => {
    const text = textNode.textContent;
    if (!text) return;

    const frag = document.createDocumentFragment();
    for (const char of text) {
      if (char === ' ' || char === '\n' || char === '\t') {
        frag.appendChild(document.createTextNode(char));
      } else {
        const span = document.createElement('span');
        span.className = 'sparkle-char';
        span.textContent = char;
        frag.appendChild(span);
      }
    }
    textNode.parentNode.replaceChild(frag, textNode);
  });
}

export default function SparkleTrail() {
  const wrappedRef = useRef(new Set());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let throttle = 0;

    function onMouseMove(e) {
      const now = performance.now();
      if (now - throttle < 50) return;
      throttle = now;

      const target = e.target;
      if (target?.classList?.contains('sparkle-char')) {
        const rect = target.getBoundingClientRect();
        spawnParticle(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    }

    function wrapPage() {
      const sections = document.querySelectorAll(
        '.wrap, .sheet, main, header, footer, section, article'
      );
      sections.forEach(section => {
        if (wrappedRef.current.has(section)) return;
        wrappedRef.current.add(section);
        wrapTextNodes(section);
      });
    }

    const initTimer = setTimeout(wrapPage, 500);

    const observer = new MutationObserver(() => {
      setTimeout(wrapPage, 200);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    document.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      clearTimeout(initTimer);
      observer.disconnect();
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return null;
}
