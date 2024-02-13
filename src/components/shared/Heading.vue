<script setup lang="ts">
defineProps({
  title: String,
});
</script>
<template>
  <div>
    <h1 class="text-3xl font-bold uppercase">{{ title }}</h1>
    <div class="w-[117px] h-1 bg-primary content"></div>
  </div>
</template>
