<script setup>
import { computed } from 'vue';
import { useHydratedLang } from '../composables/useHydratedLang';

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
    subtitle: "Thoughts, tutorials & insights",
    readMore: "Read Article",
    noPosts: "No posts available yet.",
    prev: "Prev",
    next: "Next",
    backToHome: "Back to Home"
  },
  es: {
    title: "Blog",
    subtitle: "Pensamientos, tutoriales y reflexiones",
    readMore: "Leer Artículo",
    noPosts: "No hay publicaciones disponibles aún.",
    prev: "Anterior",
    next: "Siguiente",
    backToHome: "Regresar al Inicio"
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
  <div class="min-h-screen bg-[#FFFEF8] pt-4 md:pt-8 pb-20 font-sans">
    <div class="max-w-3xl mx-auto px-4">
      <a href="/" class="inline-flex items-center gap-2 text-slate-500 mb-12 hover:text-slate-900 transition-colors font-sans text-sm font-medium">
        &larr; {{ t.backToHome }}
      </a>

      <!-- Header -->
      <div class="mb-16 border-b border-slate-200 pb-12">
        <h1 class="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-display">{{ t.title }}</h1>
        <p class="text-slate-600 text-xl font-sans font-light max-w-2xl">
          {{ t.subtitle }}
        </p>
      </div>

      <!-- Posts Grid -->
      <div v-if="paginatedPosts.length > 0">
        <div class="grid grid-cols-1 gap-16 mb-20">
          <article 
            v-for="post in paginatedPosts" 
            :key="post.slug"
            class="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
          >
            <!-- Image (Optional, smaller in this layout) -->
            <div v-if="post.data.image" class="md:col-span-4 order-1 md:order-2">
              <div class="aspect-4/3 overflow-hidden rounded-sm bg-slate-100">
                <img 
                  :src="post.data.image.src" 
                  :alt="post.data.title"
                  class="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>

            <div :class="post.data.image ? 'md:col-span-8 order-2 md:order-1' : 'col-span-12'">
              <div class="flex items-center gap-3 text-xs font-sans font-medium text-cyan-600 mb-3 uppercase tracking-wider">
                <time>{{ formatDate(post.data.pubDate) }}</time>
                <span v-if="post.data.tags" class="text-cyan-300">•</span>
                <span v-if="post.data.tags" class="text-cyan-600">{{ post.data.tags[0] }}</span>
              </div>

              <a :href="`/blog/${post.slug}`">
                <h3 class="text-3xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors leading-tight font-display">
                  {{ post.data.title }}
                </h3>
              </a>

              <p class="text-slate-600 text-lg font-sans leading-relaxed mb-4 line-clamp-3">
                {{ post.data.description }}
              </p>

              <a 
                :href="`/blog/${post.slug}`" 
                class="inline-flex items-center gap-1 text-cyan-700 text-sm font-sans font-bold hover:underline underline-offset-4 decoration-2 decoration-cyan-200 hover:decoration-cyan-600 transition-all"
              >
                {{ t.readMore }}
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
            </div>
          </article>
        </div>

        <!-- Pagination -->
        <nav v-if="totalPages > 1" class="flex justify-center items-center gap-2 font-sans">
          <!-- Previous Button -->
          <a 
            v-if="currentPage > 1"
            :href="`/blog?page=${currentPage - 1}`"
            class="flex items-center gap-1 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded hover:bg-slate-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            {{ t.prev }}
          </a>
          <span 
            v-else
            class="flex items-center gap-1 px-4 py-2 bg-slate-50 border border-slate-100 text-slate-300 rounded cursor-not-allowed"
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
            :class="pageNum === currentPage ? 'px-4 py-2 bg-slate-900 text-white font-bold rounded' : 'px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded hover:bg-slate-50 transition-colors'"
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
            class="flex items-center gap-1 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded hover:bg-slate-50 transition-colors"
          >
            {{ t.next }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </a>
          <span 
            v-else
            class="flex items-center gap-1 px-4 py-2 bg-slate-50 border border-slate-100 text-slate-300 rounded cursor-not-allowed"
          >
            {{ t.next }}
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </span>
        </nav>
      </div>

      <div v-else class="text-center text-slate-500 py-24 border border-dashed border-slate-200 rounded-lg font-sans">
        {{ t.noPosts }}
      </div>
    </div>
  </div>
</template>
