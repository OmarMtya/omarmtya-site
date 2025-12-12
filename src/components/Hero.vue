<template>
  <section class="min-h-[80vh] flex flex-col justify-center items-start relative overflow-hidden">
    <div class="absolute top-24 right-0 p-4 border border-blueprint-grid opacity-50 text-xs hidden md:block">
      <p>{{ content.status }}</p>
      <p>{{ content.location }}</p>
      <p>{{ content.id }}</p>
    </div>

    <div class="glass-panel p-8 rounded-lg max-w-3xl w-full border-l-4 border-l-blueprint-accent">
      <h2 class="text-blueprint-accent text-sm mb-2 tracking-widest wrap-break-word">{{ content.label }}</h2>
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter wrap-break-word">
        {{ content.title }}
      </h1>
      <h3 class="text-2xl text-blueprint-accent mb-6 flex items-center gap-2 flex-wrap">
        <span class="w-3 h-3 bg-blueprint-accent animate-pulse shrink-0"></span>
        <span class="wrap-break-word">{{ content.role }}</span>
      </h3>
      
      <p class="text-lg leading-relaxed mb-8 max-w-2xl text-slate-300 wrap-break-word">
        {{ content.description }}
      </p>

      <div class="flex gap-4 flex-wrap">
        <a :href="content.x_url" target="_blank" rel="noopener noreferrer" class="px-6 py-3 border border-blueprint-accent text-blueprint-accent hover:bg-blueprint-accent hover:text-blueprint-bg transition-colors duration-300 font-bold whitespace-nowrap">
          {{ content.btn_x }}
        </a>
        <a href="https://github.com/omarmtya" target="_blank" class="px-6 py-3 border border-slate-500 text-slate-400 hover:border-white hover:text-white transition-colors duration-300 whitespace-nowrap">
          {{ content.btn_github }}
        </a>
        <a href="#projects" class="px-6 py-3 border border-slate-500 text-slate-400 hover:border-white hover:text-white transition-colors duration-300 whitespace-nowrap">
          {{ content.btn_modules }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useHydratedLang } from '../composables/useHydratedLang';

const props = defineProps({
  siteData: {
    type: Object,
    required: true
  }
});

const $lang = useHydratedLang();
const content = computed(() => props.siteData[$lang.value].hero);

onMounted(() => {
  // Animation or initialization logic if needed
});
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
