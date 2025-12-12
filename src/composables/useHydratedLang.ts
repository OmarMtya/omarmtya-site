import { useStore } from '@nanostores/vue';
import { currentLang } from '../store/language';

export function useHydratedLang() {
  // Since currentLang is now initialized from inline script before hydration,
  // we can directly use it without waiting for onMounted
  return useStore(currentLang);
}
