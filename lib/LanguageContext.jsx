'use client';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import translations from './translations';

const LanguageContext = createContext();

const LANGS = ['en', 'fr', 'de', 'it', 'ta'];
const LANG_LABELS = { en: 'EN', fr: 'FR', de: 'DE', it: 'IT', ta: 'தமிழ்' };

const TAMIL_DIGITS = ['௦','௧','௨','௩','௪','௫','௬','௭','௮','௯'];

export { LANGS, LANG_LABELS };

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    // Always start in English — language switcher is available for readers who want another language
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
  }, [lang]);

  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem('portfolio-lang', l); } catch {}
  }, []);

  const t = useCallback((key) => {
    return translations[lang]?.[key] || translations.en[key] || key;
  }, [lang]);

  const n = useCallback((num) => {
    const s = String(num);
    if (lang !== 'ta') return s;
    return s.replace(/[0-9]/g, (d) => TAMIL_DIGITS[parseInt(d)]);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, n }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
