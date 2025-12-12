<script setup lang="ts">
import Giscus from '@giscus/vue';

defineProps<{
  lang: 'en' | 'es';
}>();
</script>

<template>
  <div class="mt-2 pt-8 border-t border-cyan-500/30">
    <Giscus
      id="comments"
      repo="omarmtya/omarmtya-site"
      repoId="R_kgDOQmadUA"
      category="General"
      categoryId="DIC_kwDOQmadUM4CzsQ8"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      :lang="lang"
      loading="lazy"
    />
  </div>
</template>
