import { atom } from 'nanostores';

// Initialize with value from inline script if available, otherwise default to 'en'
const initialLang = (typeof window !== 'undefined' && (window as any).__INITIAL_LANG__) || 'en';
export const currentLang = atom<'en' | 'es'>(initialLang);

export const initLanguage = () => {
  if (typeof window === 'undefined') return;
  
  let lang: 'en' | 'es' = 'en';
  
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang') as 'en' | 'es';
  } else if (navigator.language.startsWith('es')) {
    lang = 'es';
  }

  if (lang !== currentLang.get()) {
    currentLang.set(lang);
  }
};

export const setLang = (lang: 'en' | 'es') => {
  currentLang.set(lang);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', lang);
  }
};
