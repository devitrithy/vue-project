<script setup lang="ts">
import IconGithub from "../icons/Github.vue";
</script>
<template>
  <div
    class="rounded-lg overflow-hidden transition-all border border-primary/50 hover:border-primary bg-primary/10 shadow-lg hover:shadow-primary/10"
  >
    <img src="../../assets/project_1.jpg" alt="" class="w-full" />
    <div class="px-4 py-2">
      <h1 class="text-xl font-bold py-2">Title</h1>
      <h3 class="font-medium text-sm py-2">2021 - 2022</h3>
      <div class="flex justify-between items-center gap-4 my-2">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://legacycinema.vercel.app"
          class="py-2 bg-primary/10 border border-primary rounded-full w-full text-primary text-center hover:text-background hover:bg-primary transition-all duration-500 font-bold"
        >
          DEMO
        </a>
        <a class="text-4xl text-primary">
          <IconGithub />
        </a>
      </div>
    </div>
  </div>
</template>
