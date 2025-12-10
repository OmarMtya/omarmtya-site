<template>
  <div class="fixed top-6 right-6 z-50 flex flex-col items-end gap-2">
    <!-- Language Toggle -->
    <div class="glass-panel px-4 py-2 flex items-center gap-3 text-xs font-bold border border-[var(--color-blueprint-grid)] bg-[rgba(10,25,47,0.9)]">
      <span class="text-slate-500 tracking-widest">SYS.LANG:</span>
      <div class="flex gap-2">
        <button 
           @click="setLang('en')"
           class="transition-all duration-300 hover:text-white cursor-pointer"
           :class="$lang === 'en' ? 'text-[var(--color-blueprint-accent)] shadow-[0_0_10px_rgba(100,255,218,0.3)]' : 'text-slate-600'">
          [EN]
        </button>
        <button 
           @click="setLang('es')"
           class="transition-all duration-300 hover:text-white cursor-pointer"
           :class="$lang === 'es' ? 'text-[var(--color-blueprint-accent)] shadow-[0_0_10px_rgba(100,255,218,0.3)]' : 'text-slate-600'">
          [ES]
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useHydratedLang } from '../composables/useHydratedLang';
import { setLang, initLanguage } from '../store/language';
import { onMounted } from 'vue';

const $lang = useHydratedLang();

onMounted(() => {
  initLanguage();
});
</script>
