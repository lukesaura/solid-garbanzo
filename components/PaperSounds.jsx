// components/PaperSounds.jsx
'use client';
import { useEffect } from 'react';

export default function PaperSounds() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!window.__paperAudio) {
      window.__paperAudio = { ctx: null, lastPlay: 0, lastScroll: 0, activated: false };
    }
    const state = window.__paperAudio;

    function initAudio() {
      if (state.ctx) {
        if (state.ctx.state === 'suspended') state.ctx.resume();
        state.activated = true;
        return;
      }
      state.ctx = new (window.AudioContext || window.webkitAudioContext)();
      state.activated = true;
    }

    function playRustle(intensity) {
      const ctx = state.ctx;
      if (!ctx || ctx.state !== 'running') return;

      const now = performance.now();
      if (now - state.lastPlay < 120) return;
      state.lastPlay = now;

      const duration = 0.06 + Math.random() * 0.08;
      const sampleRate = ctx.sampleRate;
      const length = Math.floor(sampleRate * duration);
      const buffer = ctx.createBuffer(1, length, sampleRate);
      const data = buffer.getChannelData(0);

      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.3;
      }

      const source = ctx.createBufferSource();
      source.buffer = buffer;

      const bandpass = ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.value = 800 + Math.random() * 2000;
      bandpass.Q.value = 0.5 + Math.random() * 1.5;

      const highpass = ctx.createBiquadFilter();
      highpass.type = 'highpass';
      highpass.frequency.value = 300;

      const gain = ctx.createGain();
      const vol = Math.min(intensity, 1) * 0.07;
      gain.gain.setValueAtTime(vol, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      source.connect(bandpass);
      bandpass.connect(highpass);
      highpass.connect(gain);
      gain.connect(ctx.destination);

      source.start();
      source.stop(ctx.currentTime + duration);
    }

    function onScroll() {
      if (!state.activated) return;

      const scrollY = window.scrollY;
      const delta = Math.abs(scrollY - state.lastScroll);
      state.lastScroll = scrollY;

      if (delta < 5) return;

      const intensity = Math.min(delta / 80, 1);
      playRustle(intensity);

      if (delta > 30) {
        setTimeout(() => playRustle(intensity * 0.5), 40 + Math.random() * 30);
      }
    }

    function onFirstInteraction() {
      initAudio();
    }

    window.addEventListener('click', onFirstInteraction);
    window.addEventListener('touchstart', onFirstInteraction);
    window.addEventListener('keydown', onFirstInteraction);
    window.addEventListener('scroll', onScroll, { passive: true });

    if (state.activated && state.ctx && state.ctx.state === 'suspended') {
      state.ctx.resume();
    }

    return () => {
      window.removeEventListener('click', onFirstInteraction);
      window.removeEventListener('touchstart', onFirstInteraction);
      window.removeEventListener('keydown', onFirstInteraction);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
