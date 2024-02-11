<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import Skill from "./shared/Skill.vue";
</script>
<template>
  <main class="container px-5">
    <Heading title="My Skills Set" />
    <div class="w-[370px]">
      <div
        class="flex flex-col items-center py-10 bg-primary/20 border border-primary rounded-xl shadow-lg shadow-primary/20"
      >
        <h1 class="uppercase text-xl font-bold">Front End</h1>
        <div>
          <Skill percent="100" subject="HTML/CSS" />
          <Skill percent="90" subject="Javascript" />
          <Skill percent="60" subject="Vue.js" />
          <Skill percent="70" subject="Tailwindcss" />
          <Skill percent="50" subject="Element UI Plus" />
          <Skill percent="99" subject="Svelte" />
        </div>
      </div>
    </div>
  </main>
</template>
