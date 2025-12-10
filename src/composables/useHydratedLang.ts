import { ref, onMounted, computed } from 'vue';
import { useStore } from '@nanostores/vue';
import { currentLang } from '../store/language';

export function useHydratedLang() {
  const $lang = useStore(currentLang);
  const isMounted = ref(false);
  
  onMounted(() => {
    isMounted.value = true;
  });
  
  return computed(() => isMounted.value ? $lang.value : 'en');
}
