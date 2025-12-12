<template>
  <footer class="border-t border-[var(--color-blueprint-grid)] bg-[var(--color-blueprint-bg)] py-12 mt-20 relative overflow-hidden">
    <!-- Background grid for footer -->
    <div class="absolute inset-0 opacity-20 pointer-events-none" 
         style="background-image: linear-gradient(var(--color-blueprint-grid) 1px, transparent 1px); background-size: 20px 20px;">
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        
        <!-- Brand -->
        <div>
          <h3 class="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-[var(--color-blueprint-accent)]"></span>
            {{ content.brand }}
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
            {{ content.description }}
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-[var(--color-blueprint-accent)] text-xs font-bold mb-4 tracking-widest">{{ content.connect_title }}</h4>
          <ul class="space-y-3 text-sm">
            <li>
              <a href="mailto:me@omarmtya.com" class="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group">
                <span class="opacity-0 group-hover:opacity-100 text-[var(--color-blueprint-accent)]">></span>
                me@omarmtya.com
              </a>
            </li>
            <li>
              <a href="https://github.com/omarmtya" target="_blank" class="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group">
                <span class="opacity-0 group-hover:opacity-100 text-[var(--color-blueprint-accent)]">></span>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/omarmtya/" target="_blank" class="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group">
                <span class="opacity-0 group-hover:opacity-100 text-[var(--color-blueprint-accent)]">></span>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/omarxcode" target="_blank" class="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group">
                <span class="opacity-0 group-hover:opacity-100 text-[var(--color-blueprint-accent)]">></span>
                X (Twitter)
              </a>
            </li>
          </ul>
        </div>

        <!-- Status -->
        <div>
          <h4 class="text-[var(--color-blueprint-accent)] text-xs font-bold mb-4 tracking-widest">{{ content.status_title }}</h4>
          
          <div class="mb-6">
            <LanguageSwitcher client:visible variant="inline-blueprint" />
          </div>

          <div class="glass-panel p-4 text-xs font-mono space-y-2">
            <div class="flex justify-between">
              <span class="text-slate-500">{{ content.status_avail_label }}</span>
              <span class="text-green-400">{{ content.status_avail_value }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">{{ content.status_update_label }}</span>
              <span class="text-white">{{ content.status_update_value }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">{{ content.status_version_label }}</span>
              <span class="text-white">{{ content.status_version_value }}</span>
            </div>
          </div>
        </div>

      </div>

      <div class="mt-12 pt-8 border-t border-blueprint-grid text-center text-xs text-slate-600">
        <p>{{ content.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';
import { useHydratedLang } from '../composables/useHydratedLang';
import LanguageSwitcher from './LanguageSwitcher.vue';

const props = defineProps({
  siteData: {
    type: Object,
    required: true
  }
});

const $lang = useHydratedLang();
const content = computed(() => props.siteData[$lang.value].footer);
</script>
