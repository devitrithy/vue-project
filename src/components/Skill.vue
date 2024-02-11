<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import Skill from "./shared/Skill.vue";
import SkillContainer from "./shared/SkillContainer.vue";
</script>
<template>
  <main class="container flex flex-col justify-between px-5">
    <Heading title="My Skills Set" />
    <div class="py-20 flex gap-5 overflow-x-scroll no-scrollbar">
      <SkillContainer title="Front end">
        <Skill percent="100" subject="HTML5 / CSS3" />
        <Skill percent="90" subject="Javascript" />
        <Skill percent="60" subject="Vue.js" />
        <Skill percent="70" subject="Tailwindcss" />
        <Skill percent="50" subject="Element UI Plus" />
        <Skill percent="99" subject="Svelte" />
      </SkillContainer>
      <SkillContainer title="Front end">
        <Skill percent="100" subject="HTML/CSS" />
        <Skill percent="90" subject="Javascript" />
        <Skill percent="60" subject="Vue.js" />
        <Skill percent="70" subject="Tailwindcss" />
        <Skill percent="50" subject="Element UI Plus" />
        <Skill percent="99" subject="Svelte" />
      </SkillContainer>
      <SkillContainer title="Front end">
        <Skill percent="100" subject="HTML/CSS" />
        <Skill percent="90" subject="Javascript" />
        <Skill percent="60" subject="Vue.js" />
        <Skill percent="70" subject="Tailwindcss" />
        <Skill percent="50" subject="Element UI Plus" />
        <Skill percent="99" subject="Svelte" />
      </SkillContainer>
    </div>
  </main>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
