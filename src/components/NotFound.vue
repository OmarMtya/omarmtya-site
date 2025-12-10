<script setup lang="ts">
import { computed } from 'vue';
import { useHydratedLang } from '../composables/useHydratedLang';

const props = defineProps<{
  siteData: {
    en: any;
    es: any;
  }
}>();

const lang = useHydratedLang();
const content = computed(() => props.siteData[lang.value].notFound);
</script>

<template>
  <section class="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
    <div class="border border-blueprint-grid bg-blueprint-bg p-8 md:p-12 max-w-2xl w-full relative overflow-hidden group">
      <!-- Decorative corners -->
      <div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blueprint-accent"></div>
      <div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blueprint-accent"></div>
      <div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blueprint-accent"></div>
      <div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blueprint-accent"></div>

      <h1 class="text-6xl md:text-8xl font-bold text-blueprint-accent mb-4 font-mono glitch-text">
        {{ content.code }}
      </h1>
      
      <h2 class="text-xl md:text-2xl text-slate-200 mb-6 font-mono border-b border-blueprint-grid pb-2 inline-block">
        {{ content.title }}
      </h2>
      
      <p class="text-slate-400 mb-8 font-mono text-lg">
        {{ content.message }}
      </p>

      <a href="/" class="inline-flex items-center px-6 py-3 border border-blueprint-accent text-blueprint-accent hover:bg-blueprint-accent hover:text-blueprint-bg transition-colors duration-300 font-mono uppercase tracking-wider">
        <span class="mr-2">&lt;</span>
        {{ content.back_home }}
        <span class="ml-2">/&gt;</span>
      </a>
    </div>
  </section>
</template>

<style scoped>
.glitch-text {
  text-shadow: 2px 2px 0px rgba(0, 255, 255, 0.2), -2px -2px 0px rgba(255, 0, 0, 0.2);
  animation: glitch 3s infinite;
}

@keyframes glitch {
  0% { transform: translate(0) }
  20% { transform: translate(-2px, 2px) }
  40% { transform: translate(-2px, -2px) }
  60% { transform: translate(2px, 2px) }
  80% { transform: translate(2px, -2px) }
  100% { transform: translate(0) }
}
</style>
