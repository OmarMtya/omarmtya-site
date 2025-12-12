import { ref, onMounted, computed } from 'vue';
import { useStore } from '@nanostores/vue';
import { currentLang, initLanguage } from '../store/language';

export function useHydratedLang() {
  const $lang = useStore(currentLang);
  const isMounted = ref(false);
  
  onMounted(() => {
    initLanguage();
    isMounted.value = true;
  });
  
  // Return 'en' until mounted to prevent SSR/client hydration mismatches.
  return computed(() => (isMounted.value ? $lang.value : 'en'));
}
