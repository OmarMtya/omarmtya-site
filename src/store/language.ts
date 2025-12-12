import { atom } from 'nanostores';

// Detect initial language on client-side only
function getInitialLang(): 'en' | 'es' {
  if (typeof window === 'undefined') return 'en';
  
  // Read from localStorage first
  const stored = localStorage.getItem('lang');
  if (stored === 'en' || stored === 'es') {
    return stored;
  }
  
  // Fallback to browser language
  if (navigator.language.startsWith('es')) {
    return 'es';
  }
  
  return 'en';
}

export const currentLang = atom<'en' | 'es'>(getInitialLang());

export const initLanguage = () => {
  // This is now a no-op since initialization happens in getInitialLang
  // Kept for backward compatibility
};

export const setLang = (lang: 'en' | 'es') => {
  currentLang.set(lang);
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('lang', lang);
  }
};
