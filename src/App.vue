<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
function scrollToSection(target: any) {
  const targetElement = document.querySelector(target);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
}
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>

<template>
  <Navbar />
  <section id="home" class="h-screen pt-[80px]">HOME</section>
  <section id="skill" class="h-screen pt-[80px]">SKILL</section>
  <section id="project" class="h-screen pt-[80px]">Project</section>
  <section id="aboutme" class="h-screen pt-[80px]">About Me</section>
</template>
