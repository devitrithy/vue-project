<script setup lang="ts">
defineProps({
  title: String,
});
</script>
<template>
  <div>
    <h1 class="text-[40px] font-bold">{{ title }}</h1>
    <div class="w-[117px] h-1 bg-primary"></div>
  </div>
</template>
