<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import AboutMe from "./components/AboutMe.vue";
import Footers from "./components/Footer.vue";
import Education from "./components/Education.vue";
import Skill from "./components/Skill.vue";
import Project from "./components/Project.vue";
import StayConnected from "./components/StayConnected.vue";
import IconScrollDown from "./components/icons/ScrollDown.vue";
import IconTouchDown from "./components/icons/TouchDown.vue";
import IconUp from "./components/icons/ScrollUp.vue";

import { store } from "./store";
import { ref } from "vue";

let scroll = ref(0.0);
window.addEventListener("scroll", () => {
  if (scroll.value > 2000) {
    store.startSkillAnimation = true;
  } else {
    store.startSkillAnimation = false;
  }

  if (scroll.value > 550) {
    store.scorllUp = true;
  } else {
    store.scorllUp = false;
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
  <a
    href="#home"
    :class="{ 'translate-y-96': !store.scorllUp }"
    class="z-20 transition-all transform translate-y-0 duration-500 fixed bottom-5 right-5 text-4xl text-primary p-1 bg-primary/10 rounded-full nav border border-primary"
  >
    <IconUp />
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
    <section id="projects" class="pt-[80px] items-start">
      <Project />
    </section>
    <section id="stay_connected" class="pt-[80px] items-start">
      <StayConnected />
    </section>
    <footer>
      <Footers />
    </footer>
  </div>
</template>
