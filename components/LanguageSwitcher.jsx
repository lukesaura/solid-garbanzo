'use client';
import { useLanguage, LANGS, LANG_LABELS } from '../lib/LanguageContext';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switcher" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`lang-btn${lang === l ? ' lang-btn-active' : ''}`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
