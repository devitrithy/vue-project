<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Skill from "./components/Navbar.vue";
import About from "./components/Navbar.vue";
import Project from "./components/Navbar.vue";
</script>

<template>
  <Navbar />
  <section id="home" class="h-screen pt-[80px]"><Home /></section>
  <section id="skill" class="h-screen pt-[80px]">SKILL</section>
  <section id="project" class="h-screen pt-[80px]">Project</section>
  <section id="aboutme" class="h-screen pt-[80px]">About Me</section>
</template>
