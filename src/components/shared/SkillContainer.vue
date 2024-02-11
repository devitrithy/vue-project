<script setup lang="ts">
defineProps({
  title: String,
});
</script>
<template>
  <div
    class="w-[350px] flex flex-col items-center py-10 bg-primary/20 border border-primary rounded-xl shadow-lg shadow-primary/20 px-5"
  >
    <h1 class="uppercase text-xl font-bold mb-10">{{ title }}</h1>
    <slot> </slot>
  </div>
</template>
