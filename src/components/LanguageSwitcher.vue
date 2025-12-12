<template>
  <!-- Blueprint Variant (Fixed) -->
  <div v-if="variant === 'blueprint'" class="fixed top-6 right-6 z-50 flex flex-col items-end gap-2">
    <!-- Language Toggle -->
    <div class="glass-panel px-4 py-2 flex items-center gap-3 text-xs font-bold border border-blueprint-grid bg-[rgba(10,25,47,0.9)]">
      <span class="text-slate-500 tracking-widest">SYS.LANG:</span>
      <div class="flex gap-2">
        <button 
           @click="setLang('en')"
           class="transition-all duration-300 hover:text-white cursor-pointer"
           :class="$lang === 'en' ? 'text-blueprint-accent shadow-[0_0_10px_rgba(100,255,218,0.3)]' : 'text-slate-600'">
          [EN]
        </button>
        <button 
           @click="setLang('es')"
           class="transition-all duration-300 hover:text-white cursor-pointer"
           :class="$lang === 'es' ? 'text-blueprint-accent shadow-[0_0_10px_rgba(100,255,218,0.3)]' : 'text-slate-600'">
          [ES]
        </button>
      </div>
    </div>
  </div>

  <!-- Inline Blueprint Variant (Footer) -->
  <div v-else-if="variant === 'inline-blueprint'" class="flex flex-col items-start gap-2">
    <div class="glass-panel px-4 py-2 flex items-center gap-3 text-xs font-bold border border-blueprint-grid bg-[rgba(10,25,47,0.9)]">
      <span class="text-slate-500 tracking-widest">SYS.LANG:</span>
      <div class="flex gap-2">
        <button 
           @click="setLang('en')"
           class="transition-all duration-300 hover:text-white cursor-pointer"
           :class="$lang === 'en' ? 'text-blueprint-accent shadow-[0_0_10px_rgba(100,255,218,0.3)]' : 'text-slate-600'">
          [EN]
        </button>
        <button 
           @click="setLang('es')"
           class="transition-all duration-300 hover:text-white cursor-pointer"
           :class="$lang === 'es' ? 'text-blueprint-accent shadow-[0_0_10px_rgba(100,255,218,0.3)]' : 'text-slate-600'">
          [ES]
        </button>
      </div>
    </div>
  </div>

  <!-- Minimal Variant (Blog) -->
  <div v-else class="w-full flex justify-end px-4 py-2 max-w-5xl mx-auto">
    <div class="flex items-center gap-3 text-sm font-sans font-medium">
      <button 
         @click="setLang('en')"
         class="transition-colors duration-200"
         :class="$lang === 'en' ? 'text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'">
        EN
      </button>
      <span class="text-slate-300">|</span>
      <button 
         @click="setLang('es')"
         class="transition-colors duration-200"
         :class="$lang === 'es' ? 'text-slate-900 font-bold' : 'text-slate-400 hover:text-slate-600'">
        ES
      </button>
    </div>
  </div>
</template>

<script setup>
import { useHydratedLang } from '../composables/useHydratedLang';
import { setLang, initLanguage } from '../store/language';
import { onMounted } from 'vue';

defineProps({
  variant: {
    type: String,
    default: 'blueprint' // 'blueprint' | 'minimal'
  }
});

const $lang = useHydratedLang();

onMounted(() => {
  initLanguage();
});
</script>
