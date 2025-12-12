import { ref, onMounted, computed } from 'vue';
import { useStore } from '@nanostores/vue';
import { currentLang } from '../store/language';

export function useHydratedLang() {
  const $lang = useStore(currentLang);
  const isMounted = ref(false);
  
  onMounted(() => {
    isMounted.value = true;
  });
  
  // Return the current lang only after component is mounted to prevent SSR/client mismatch
  return computed(() => isMounted.value ? $lang.value : currentLang.get());
}
