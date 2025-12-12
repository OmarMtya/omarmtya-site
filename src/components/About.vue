<template>
  <section id="about" class="py-20 relative">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Profile Image / ID Card -->
      <div ref="cardRef" class="reveal-on-scroll relative group">
        <!-- Decorative brackets -->
        <div class="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--color-blueprint-accent)]"></div>
        <div class="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--color-blueprint-accent)]"></div>
        
        <div class="glass-panel p-2 relative overflow-hidden">
          <div class="aspect-square bg-slate-800 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
            <!-- User image -->
            <img src="/profile.png" alt="Omar Montoya" class="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
            
            <!-- Scanline effect -->
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-blueprint-accent)] to-transparent opacity-10 animate-scan h-[200%] w-full pointer-events-none"></div>
          </div>
          
          <!-- ID Data -->
          <div class="mt-2 flex justify-between text-[10px] text-[var(--color-blueprint-accent)] font-bold tracking-widest">
            <span>{{ content.id }}</span>
            <span>{{ content.auth }}</span>
          </div>
        </div>
      </div>

      <!-- Bio Text -->
      <div ref="textRef" class="reveal-on-scroll">
        <h2 class="text-3xl font-bold text-white mb-6 flex gap-3 overflow-hidden">
          <span class="text-[var(--color-blueprint-accent)] shrink-0">//</span> 
          <span>{{ content.title }}</span>
        </h2>
        
        <div class="space-y-6 text-slate-400 leading-relaxed">
          <p>
            <strong class="text-white">{{ content.p1_strong }}</strong> 
            {{ content.p1 }}
          </p>
          
          <p>
            {{ content.p2 }}
          </p>

          <div class="grid grid-cols-2 gap-4 mt-8">
            <div class="border border-[var(--color-blueprint-grid)] p-4">
              <h4 class="text-white text-sm font-bold mb-2">{{ content.stack_title }}</h4>
              <ul class="text-xs space-y-1 text-[var(--color-blueprint-accent)]">
                <li v-for="item in content.stack" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="border border-[var(--color-blueprint-grid)] p-4">
              <h4 class="text-white text-sm font-bold mb-2">{{ content.method_title }}</h4>
              <ul class="text-xs space-y-1 text-[var(--color-blueprint-accent)]">
                <li v-for="item in content.method" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>

          <!-- Certifications Section -->
          <div class="mt-8 pt-6 border-t border-[var(--color-blueprint-grid)]">
            <h4 class="text-white text-sm font-bold mb-4 flex items-center gap-2">
              <span class="w-1 h-1 bg-[var(--color-blueprint-accent)]"></span>
              {{ content.certs_title }}
            </h4>
            <div class="flex flex-wrap gap-3">
              <span v-for="cert in content.certs" :key="cert" class="text-xs border border-[var(--color-blueprint-accent)] text-[var(--color-blueprint-accent)] px-3 py-1 rounded bg-[rgba(100,255,218,0.05)]">
                {{ cert }}
              </span>
            </div>
          </div>

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
const content = computed(() => props.siteData[$lang.value].about);

const cardRef = ref(null);
const textRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  if (cardRef.value) observer.observe(cardRef.value);
  if (textRef.value) observer.observe(textRef.value);
});
</script>
