<script setup lang="ts">
defineProps({
  title: String,
});
</script>
<template>
  <div
    class="py-10 bg-primary/10 border border-primary rounded-xl shadow-lg shadow-primary/10 md:px-5"
  >
    <h1 class="uppercase text-xl font-bold mb-10 text-center">{{ title }}</h1>
    <div class="flex flex-wrap gap-10 items-center justify-evenly">
      <slot> </slot>
    </div>
  </div>
</template>
