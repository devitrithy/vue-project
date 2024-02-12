<script setup lang="ts">
defineProps({
  title: String,
  text: String,
  animateDuration: String,
});
</script>
<template>
  <h1
    class="text-lg flex gap-5 mb-2"
    data-aos="fade-right"
    v-bind:data-aos-duration="animateDuration"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom"
  >
    <span class="font-bold text-primary uppercase w-1/5">{{ title }}</span
    >:<span class="text-wrap w-3/4"> {{ text }}</span>
  </h1>
</template>
