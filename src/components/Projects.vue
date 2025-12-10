<template>
  <section id="projects" class="py-20 relative">
    <div class="flex items-center gap-4 mb-12 reveal-on-scroll overflow-hidden" ref="headerRef">
      <h2 class="text-3xl font-bold text-white truncate">{{ content.title }}</h2>
      <div class="h-px flex-grow bg-[var(--color-blueprint-grid)] shrink-0"></div>
      <span class="text-[var(--color-blueprint-accent)] text-sm shrink-0">{{ content.version }}</span>
    </div>

    <div v-if="content.list.length === 0" class="text-center py-12">
      <p class="text-slate-400 text-lg font-mono border border-dashed border-slate-700 p-8 rounded-lg inline-block">
        {{ content.empty_message || 'No projects available.' }}
      </p>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(project, index) in content.list" :key="index" 
           ref="projectRefs"
           class="glass-panel p-6 rounded-lg group hover:border-[var(--color-blueprint-accent)] hover:shadow-[0_0_20px_rgba(100,255,218,0.15)] transition-all duration-300 relative overflow-hidden reveal-on-scroll"
           :style="{ transitionDelay: `${index * 100}ms` }">
        
        <div class="mb-4 flex justify-between items-start">
          <h3 class="text-xl font-bold text-white group-hover:text-[var(--color-blueprint-accent)] transition-colors">
            {{ project.title }}
          </h3>
          <span class="text-xs border border-[var(--color-blueprint-grid)] px-2 py-1 rounded text-slate-400">
            {{ project.type }}
          </span>
        </div>

        <p class="text-slate-400 mb-6 text-sm leading-relaxed">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="tech in project.tech" :key="tech" class="text-xs text-[var(--color-blueprint-accent)] bg-[rgba(100,255,218,0.1)] px-2 py-1 rounded">
            {{ tech }}
          </span>
        </div>

        <div class="flex gap-4 mt-auto">
          <a :href="project.link" class="inline-flex items-center gap-2 text-sm text-white hover:text-[var(--color-blueprint-accent)] transition-colors">
            <span>{{ project.cta }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a v-if="project.demoLink" :href="project.demoLink" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm text-[var(--color-blueprint-accent)] hover:text-white transition-colors">
            <span>DEMO</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useHydratedLang } from '../composables/useHydratedLang';

const props = defineProps({
  siteData: {
    type: Object,
    required: true
  }
});

const $lang = useHydratedLang();
const content = computed(() => props.siteData[$lang.value].projects);

const headerRef = ref(null);
const projectRefs = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  if (headerRef.value) observer.observe(headerRef.value);
  projectRefs.value.forEach(el => observer.observe(el));
});
</script>
