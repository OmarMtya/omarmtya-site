<script setup>
import { computed } from 'vue';
import { useHydratedLang } from '../composables/useHydratedLang';
import { BookOpen, ArrowRight, Calendar } from 'lucide-vue-next';

const props = defineProps({
  posts: {
    type: Array,
    required: true
  },
  siteData: {
    type: Object,
    required: true
  }
});

const $lang = useHydratedLang();

const translations = {
  en: {
    title: "Latest Insights",
    subtitle: "Thoughts and articles",
    readMore: "Read Article",
    noPosts: "No posts available yet."
  },
  es: {
    title: "Últimas Publicaciones",
    subtitle: "Pensamientos y artículos",
    readMore: "Leer Artículo",
    noPosts: "No hay publicaciones disponibles aún."
  }
};

const t = computed(() => translations[$lang.value] || translations.en);

const aboutData = computed(() => props.siteData[$lang.value]?.about || props.siteData.en.about);

const filteredPosts = computed(() => {
  return props.posts
    .filter(post => post.data.lang === $lang.value)
    .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate))
    .slice(0, 3); // Show only latest 3
});

const totalFilteredPosts = computed(() => {
  return props.posts.filter(post => post.data.lang === $lang.value).length;
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString($lang.value === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<template>
  <section id="blog" class="py-20 relative overflow-hidden">


    <div class="max-w-6xl mx-auto px-4 relative z-10">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-px flex-1 bg-cyan-500/30 min-w-0"></div>
        <a href="/blog" class="text-3xl md:text-4xl font-bold text-cyan-400 flex items-center gap-3 hover:text-cyan-300 transition-colors group min-w-0">
          <BookOpen class="w-8 h-8 shrink-0 group-hover:scale-110 transition-transform" />
          <span class="truncate">{{ t.title }}</span>
        </a>
        <div class="h-px flex-1 bg-cyan-500/30 min-w-0"></div>
      </div>

      <p class="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
        {{ t.subtitle }}
      </p>

      <div v-if="filteredPosts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in filteredPosts" 
          :key="post.slug"
          class="group relative bg-[#112240] border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)]"
        >
          <!-- Image -->
          <div class="h-48 bg-[#0a192f] relative overflow-hidden">
            <img 
              v-if="post.data.image"
              :src="post.data.image.src" 
              :alt="post.data.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div v-else class="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors duration-300"></div>
            <div v-if="!post.data.image" class="absolute inset-0 opacity-20" 
                 style="background-image: radial-gradient(#64ffda 1px, transparent 1px); background-size: 10px 10px;">
            </div>
          </div>

          <div class="p-6">
            <div class="flex items-center gap-2 text-xs text-cyan-300 mb-3 font-mono">
              <Calendar class="w-3 h-3" />
              {{ formatDate(post.data.pubDate) }}
            </div>

            <a :href="`/blog/${post.slug}`">
              <h3 class="text-xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2 cursor-pointer">
                {{ post.data.title }}
              </h3>
            </a>

            <p class="text-slate-400 text-sm mb-6 line-clamp-3">
              {{ post.data.description }}
            </p>

            <a :href="`/blog/${post.slug}`" class="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold hover:underline decoration-cyan-400/50 underline-offset-4">
              {{ t.readMore }}
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </article>
      </div>

      <div v-else class="text-center text-slate-500 py-12 border border-dashed border-slate-700 rounded-lg">
        {{ t.noPosts }}
      </div>

      <!-- View All Posts Button -->
      <div v-if="totalFilteredPosts > 3" class="mt-12 text-center">
        <a 
          href="/blog" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded hover:bg-cyan-400 hover:text-blueprint-bg transition-all duration-300 group"
        >
          {{ aboutData.viewAllPosts }}
          <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
</template>
