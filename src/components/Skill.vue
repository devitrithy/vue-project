<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import Skill from "./shared/Skill.vue";
import SkillContainer from "./shared/SkillContainer.vue";
import IconFlutter from "./icons/Flutter.vue";
import IconHtml from "./icons/Html.vue";
import IconCss from "./icons/Css.vue";
import IconJavascript from "./icons/Javascript.vue";
import IconVue from "./icons/Vue.vue";
import IconSvelte from "./icons/Svelte.vue";
import IconTailwind from "./icons/Tailwindcss.vue";
import IconNodeJs from "./icons/Nodejs.vue";
import IconGithub from "./icons/Github.vue";
import IconDocker from "./icons/Docker.vue";
import IconPhp from "./icons/Php.vue";
import IconMysql from "./icons/Mysql.vue";
import IconTypeScript from "./icons/Typescript.vue";
</script>
<template>
  <main class="container flex flex-col justify-between px-5">
    <Heading title="My Skills Set" />
    <div class="py-20 flex gap-5 overflow-x-scroll no-scrollbar">
      <SkillContainer title="Technical Skill">
        <Skill percent="90" subject="HTML5 | CSS3"
          ><IconHtml /><IconCss class="text-xl"
        /></Skill>
        <Skill percent="90" subject="Javascript"><IconJavascript /></Skill>
        <Skill percent="50" subject="Typescript"><IconTypeScript /></Skill>
        <Skill percent="60" subject="Vue.js"><IconVue /></Skill>
        <Skill percent="80" subject="Svelte"><IconSvelte /></Skill>
        <Skill percent="70" subject="Tailwindcss"><IconTailwind /></Skill>
        <Skill percent="70" subject="flutter"><IconFlutter /></Skill>
        <Skill percent="70" subject="Node.js"><IconNodeJs /></Skill>
        <Skill percent="70" subject="php"><IconPhp /></Skill>
        <Skill percent="80" subject="mysql"><IconMysql /></Skill>
        <Skill percent="80" subject="docker"><IconDocker /></Skill>
        <Skill percent="70" subject="github"><IconGithub /></Skill>
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
