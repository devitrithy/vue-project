<script setup lang="ts">
import IconGithub from "../icons/Github.vue";
import IconPreview from "../icons/IconPreview.vue";

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
    <div class="h-48">
      <slot></slot>
    </div>
    <div class="px-4 py-2">
      <h1 class="text-lg text-nowrap font-semibold py-1 text-ellipsis truncate">
        {{ title }}
      </h1>
      <h3 class="font-medium text-xs pt-1 pb-4 text-gray-400">{{ date }}</h3>
      <div class="flex justify-between items-center gap-4 my-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          v-bind:href="demo"
          class="py-2 bg-primary/10 border border-primary rounded-full w-full text-primary text-center hover:text-background hover:bg-primary transition-all duration-500 font-bold flex items-center justify-center gap-2"
        >
          <span><IconPreview /></span>
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
