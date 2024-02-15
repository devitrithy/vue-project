<script setup lang="ts">
import IconGithub from "../icons/Github.vue";

defineProps({
  title: String,
  date: String,
  demo: String,
  github: String,
  pic: String,
});
</script>
<template>
  <div
    class="rounded-lg overflow-hidden transition-all border border-primary/50 bg-primary/10 shadow-lg hover:shadow-primary/10 flex flex-col justify-between"
  >
    <slot></slot>
    <div class="px-4 py-2">
      <h1 class="text-xl font-bold py-2">{{ title || "Title" }}</h1>
      <h3 class="font-medium text-sm py-2">{{ date || "2021 - 2022" }}</h3>
      <div class="flex justify-between items-center gap-4 my-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          v-bind:href="demo"
          class="py-2 bg-primary/10 border border-primary rounded-full w-full text-primary text-center hover:text-background hover:bg-primary transition-all duration-500 font-bold"
        >
          DEMO
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          class="text-4xl text-primary"
          v-bind:href="github"
        >
          <IconGithub />
        </a>
      </div>
    </div>
  </div>
</template>
