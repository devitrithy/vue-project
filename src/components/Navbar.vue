<script setup lang="ts">
import { ref } from "vue";

let active = ref("home");
function activeNavItem(value: string) {
  active.value = value;
}
</script>
<template>
  <nav
    class="nav h-[60px] text-white flex justify-between items-center px-[100px] fixed w-screen border-b border-gray-800 z-10"
  >
    <a href="#home"
      ><h1 class="text-2xl gradiant text-transparent bg-clip-text">
        &ltDevitRithy />
      </h1></a
    >
    <ul class="flex gap-10 items-center">
      <li>
        <a href="#home" class="nav-item" @click="activeNavItem('home')">Home</a>
      </li>
      <li>
        <a href="#skill" class="nav-item" @click="activeNavItem('skill')"
          >Skill</a
        >
      </li>
      <li>
        <a href="#project" class="nav-item" @click="activeNavItem('project')"
          >Project</a
        >
      </li>
      <li>
        <a href="#aboutme" class="nav-item" @click="activeNavItem('aboutme')"
          >About Me</a
        >
      </li>
      <li>
        <button class="px-10 py-2 gradiant text-black rounded duration-300">
          Contact Me
        </button>
      </li>
    </ul>
  </nav>
</template>

<style>
.nav-item {
  @apply hover:text-blue-400 text-gray-400;
}
.gradiant {
  @apply hover:bg-gradient-to-l bg-gradient-to-r from-cyan-400 to-blue-400;
}
.active {
  @apply text-blue-400;
}
.nav {
  /* From https://css.glass */
  background-color: rgba(3, 7, 17, 0.829);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5.2px);
  -webkit-backdrop-filter: blur(52.3px);
}
</style>
