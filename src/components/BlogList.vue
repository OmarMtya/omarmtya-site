<script setup>
import { computed, onMounted } from 'vue';
import { useHydratedLang } from '../composables/useHydratedLang';

onMounted(() => {
  const script = document.createElement('script');
  script.src = "https://platform.twitter.com/widgets.js";
  script.async = true;
  document.body.appendChild(script);
});

const props = defineProps({
  posts: {
    type: Array,
    required: true
  },
  currentPage: {
    type: Number,
    default: 1
  },
  postsPerPage: {
    type: Number,
    default: 9
  }
});

const $lang = useHydratedLang();

const translations = {
  en: {
    title: "Blog",
    subtitle: "All posts",
    readMore: "Read Article",
    noPosts: "No posts available yet.",
    prev: "Prev",
    next: "Next",
    backToHome: "Back to Home",
    latestUpdates: "Latest Updates"
  },
  es: {
    title: "Blog",
    subtitle: "Todas las entradas",
    readMore: "Leer Artículo",
    noPosts: "No hay publicaciones disponibles aún.",
    prev: "Anterior",
    next: "Siguiente",
    backToHome: "Regresar al Inicio",
    latestUpdates: "Últimas Actualizaciones"
  }
};

const t = computed(() => translations[$lang.value] || translations.en);

// Filter and sort posts by language
const filteredPosts = computed(() => {
  return props.posts
    .filter(post => post.data.lang === $lang.value)
    .sort((a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate));
});

// Pagination calculations
const totalPosts = computed(() => filteredPosts.value.length);
const totalPages = computed(() => Math.ceil(totalPosts.value / props.postsPerPage));
const startIndex = computed(() => (props.currentPage - 1) * props.postsPerPage);
const endIndex = computed(() => startIndex.value + props.postsPerPage);
const paginatedPosts = computed(() => filteredPosts.value.slice(startIndex.value, endIndex.value));
const pageNumbers = computed(() => Array.from({ length: totalPages.value }, (_, i) => i + 1));

const formatDate = (date) => {
  return new Date(date).toLocaleDateString($lang.value === 'es' ? 'es-ES' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<template>
  <div class="min-h-screen bg-blueprint-bg pt-32 pb-20">
    <div class="max-w-7xl mx-auto px-4">
      <a href="/" class="inline-flex items-center gap-2 text-cyan-400 mb-8 hover:underline decoration-cyan-400/50 underline-offset-4">
        &larr; {{ t.backToHome }}
      </a>

      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-3 text-cyan-400 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
          </svg>
          <h1 class="text-4xl md:text-5xl font-bold">{{ t.title }}</h1>
        </div>
        <p class="text-slate-400 text-lg">
          {{ t.subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-8">
          <!-- Posts Grid -->
          <div v-if="paginatedPosts.length > 0">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <article 
            v-for="post in paginatedPosts" 
            :key="post.slug"
            class="group relative bg-[#112240] border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(100,255,218,0.1)]"
          >
            <!-- Image Placeholder -->
            <div class="h-48 bg-blueprint-bg relative overflow-hidden">
              <div class="absolute inset-0 bg-cyan-500/10 group-hover:bg-transparent transition-colors duration-300"></div>
              <div class="absolute inset-0 opacity-20" 
                   style="background-image: radial-gradient(#64ffda 1px, transparent 1px); background-size: 10px 10px;">
              </div>
            </div>

            <div class="p-6">
              <div class="flex items-center gap-2 text-xs text-cyan-300 mb-3 font-mono">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
                </svg>
                {{ formatDate(post.data.pubDate) }}
              </div>

              <h3 class="text-xl font-bold text-slate-200 mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {{ post.data.title }}
              </h3>

              <p class="text-slate-400 text-sm mb-6 line-clamp-3">
                {{ post.data.description }}
              </p>

              <a 
                :href="`/blog/${post.slug}`" 
                class="inline-flex items-center gap-2 text-cyan-400 text-sm font-bold hover:underline decoration-cyan-400/50 underline-offset-4"
              >
                {{ t.readMore }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <nav v-if="totalPages > 1" class="flex justify-center items-center gap-2">
          <!-- Previous Button -->
          <a 
            v-if="currentPage > 1"
            :href="`/blog?page=${currentPage - 1}`"
            class="flex items-center gap-1 px-4 py-2 bg-[#112240] border border-cyan-500/20 text-cyan-400 rounded hover:border-cyan-400/50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            {{ t.prev }}
          </a>
          <span 
            v-else
            class="flex items-center gap-1 px-4 py-2 bg-[#112240] border border-slate-700 text-slate-600 rounded cursor-not-allowed"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            {{ t.prev }}
          </span>

          <!-- Page Numbers -->
          <span 
            v-for="pageNum in pageNumbers" 
            :key="pageNum"
            :class="pageNum === currentPage ? 'px-4 py-2 bg-cyan-400 text-blueprint-bg font-bold rounded' : 'px-4 py-2 bg-[#112240] border border-cyan-500/20 text-cyan-400 rounded hover:border-cyan-400/50 transition-colors'"
          >
            <a v-if="pageNum !== currentPage" :href="`/blog?page=${pageNum}`">
              {{ pageNum }}
            </a>
            <span v-else>{{ pageNum }}</span>
          </span>

          <!-- Next Button -->
          <a 
            v-if="currentPage < totalPages"
            :href="`/blog?page=${currentPage + 1}`"
            class="flex items-center gap-1 px-4 py-2 bg-[#112240] border border-cyan-500/20 text-cyan-400 rounded hover:border-cyan-400/50 transition-colors"
          >
            {{ t.next }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
          <span 
            v-else
            class="flex items-center gap-1 px-4 py-2 bg-[#112240] border border-slate-700 text-slate-600 rounded cursor-not-allowed"
          >
            {{ t.next }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </span>
        </nav>
      </div>

      <div v-else class="text-center text-slate-500 py-12 border border-dashed border-slate-700 rounded-lg">
        {{ t.noPosts }}
      </div>
        </div>

        <!-- Sidebar -->
        <aside class="lg:col-span-4 space-y-8">
          <div class="bg-[#112240] border border-cyan-500/20 rounded-lg p-6 sticky top-32">
            <h3 class="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
              {{ t.latestUpdates }}
            </h3>
            
            <div class="min-h-[400px]">
              <a 
                class="twitter-timeline" 
                data-height="600" 
                data-theme="dark" 
                data-chrome="noheader nofooter noborders"
                data-tweet-limit="5"
                href="https://twitter.com/omarxcode?ref_src=twsrc%5Etfw"
              >
                Tweets by omarxcode
              </a> 
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>
