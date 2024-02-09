<script setup lang="ts">
defineProps({
  title: String,
  text: String,
});
</script>
<template>
  <h1 class="text-lg flex gap-5 mb-2">
    <span class="font-bold text-primary uppercase w-1/5">{{ title }}</span
    >:<span> {{ text }}</span>
  </h1>
</template>
