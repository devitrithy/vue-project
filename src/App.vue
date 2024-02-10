<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import AboutMe from "./components/AboutMe.vue";
import Education from "./components/Education.vue";
import Skill from "./components/Skill.vue";
import Project from "./components/Project.vue";

import { store } from "./store";
</script>

<template>
  <Navbar />
  <div @click="store.changeNavMode">
    <section id="home" class="h-screen pt-[80px]"><Home /></section>
    <section id="about_me" class="pt-[80px] items-start">
      <AboutMe />
    </section>
    <section id="education" class="pt-[80px] items-start">
      <Education />
    </section>
    <section id="skills" class="pt-[80px] items-start">
      <Skill />
    </section>
    <section id="experiences" class="pt-[80px] items-start">
      <Project />
    </section>
  </div>
</template>
