<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import AboutMe from "./components/AboutMe.vue";
import Education from "./components/Education.vue";
import Skill from "./components/Skill.vue";
import Project from "./components/Project.vue";
import IconScrollDown from "./components/icons/ScrollDown.vue";
import IconTouchDown from "./components/icons/TouchDown.vue";

import { store } from "./store";
import { ref } from "vue";

let scroll = ref(0.0);
window.addEventListener("scroll", () => {
  if (scroll.value > 2000) {
    store.startSkillAnimation = true;
  } else {
    store.startSkillAnimation = false;
  }
  scroll.value = window.scrollY;
});

detectMobile();

function detectMobile() {
  const userAgent = navigator.userAgent;
  store.isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    );
}
</script>

<template>
  <Navbar />
  <a
    v-if="store.isMobile !== true"
    href="#about_me"
    class="absolute bottom-20 left-1/2 animate-bounce text-4xl text-primary"
  >
    <IconScrollDown />
  </a>
  <a
    v-else
    href="#about_me"
    class="absolute bottom-5 left-1/2 animate-bounce text-4xl text-primary"
  >
    <IconTouchDown />
  </a>
  <div @click="store.closeNavbar">
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
