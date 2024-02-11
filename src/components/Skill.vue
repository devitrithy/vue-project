<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import Skill from "./shared/Skill.vue";
</script>
<template>
  <main class="container px-5">
    <Heading title="My Skills Set" />
    <div>
      <h1>Front End</h1>
      <Skill percent="100" subject="HTML/CSS" />
      <Skill percent="90" subject="Javascript" />
      <Skill percent="60" subject="Vue.js" />
      <Skill percent="70" subject="Tailwindcss" />
      <Skill percent="50" subject="Element UI Plus" />
    </div>
  </main>
</template>
