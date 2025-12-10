import { atom } from 'nanostores';

export const currentLang = atom<'en' | 'es'>('en');

export const initLanguage = () => {
  if (typeof window === 'undefined') return;
  
  let lang: 'en' | 'es' = 'en';
  
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang') as 'en' | 'es';
  } else if (navigator.language.startsWith('es')) {
    lang = 'es';
  }

  if (lang !== 'en') {
    currentLang.set(lang);
  }
};

export const setLang = (lang: 'en' | 'es') => {
  currentLang.set(lang);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', lang);
  }
};
