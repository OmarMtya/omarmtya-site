import { atom } from 'nanostores';

// IMPORTANT:
// Keep the initial language deterministic between SSR and the client's first render
// to avoid Vue hydration mismatches. We always start with 'en' and then, on the
// client only, we initialize from localStorage / navigator language.
export const currentLang = atom<'en' | 'es'>('en');

let didInit = false;

export const initLanguage = () => {
  if (didInit) return;
  didInit = true;

  if (typeof window === 'undefined') return;

  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'es') {
    currentLang.set(stored);
    return;
  }

  if (navigator.language?.startsWith('es')) {
    currentLang.set('es');
  }
};

export const setLang = (lang: 'en' | 'es') => {
  currentLang.set(lang);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', lang);
  }
};
