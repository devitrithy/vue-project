<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
</script>

<template>
  <Navbar />
  <section id="home" class="h-screen pt-[80px]"><Home /></section>
  <section id="about_me" class="h-screen pt-[80px]">About Me</section>
  <section id="education" class="h-screen pt-[80px]">Education</section>
  <section id="skills" class="h-screen pt-[80px]">SKILL</section>
  <section id="experiences" class="h-screen pt-[80px]">Project</section>
</template>
