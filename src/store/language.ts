import { atom } from 'nanostores';

// IMPORTANT:
// Keep the initial language deterministic between SSR and the client's first render
// to avoid Vue hydration mismatches. We always start with 'en' and then, on the
// client only, we initialize from URL / localStorage / navigator language.
export const currentLang = atom<'en' | 'es'>('en');

let didInit = false;

const getLangFromUrl = (): 'en' | 'es' | null => {
  if (typeof window === 'undefined') return null;

  const url = new URL(window.location.href);
  const paramLang = url.searchParams.get('lang');
  if (paramLang === 'en' || paramLang === 'es') return paramLang;

  const segments = url.pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first === 'en' || first === 'es') return first;

  return null;
};

export const initLanguage = () => {
  if (didInit) return;
  didInit = true;

  if (typeof window === 'undefined') return;

  const urlLang = getLangFromUrl();
  if (urlLang) {
    currentLang.set(urlLang);
    localStorage.setItem('lang', urlLang);
    return;
  }

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

  if (typeof window !== 'undefined') {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
  }
};
