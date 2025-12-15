import { ref, onMounted, computed } from 'vue';
import { useStore } from '@nanostores/vue';
import { currentLang, initLanguage } from '../store/language';

export function useHydratedLang(initialLang: 'en' | 'es' = 'en') {
  const $lang = useStore(currentLang);
  const isMounted = ref(false);
  
  onMounted(() => {
    initLanguage();
    isMounted.value = true;
  });
  
  // Use server-provided lang until hydrated to keep SSR and client in sync.
  return computed(() => (isMounted.value ? $lang.value : initialLang));
}
