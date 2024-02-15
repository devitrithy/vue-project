<script setup lang="ts">
import Contact from "./shared/Contact.vue";
import { store } from "../store";
let title = "{{ devitRithy }}";
</script>
<template>
  <header
    class="flex items-center justify-center border-b border-b-primary border-opacity-20 w-screen fixed nav z-50"
  >
    <nav
      class="flex justify-between items-center p-[16px] bg-transparent text-text container"
    >
      <a href="#home" class="text-primary text-2xl font-extrabold">{{
        title
      }}</a>
      <button class="block lg:hidden" @click="store.changeNavMode">
        <v-icon name="co-menu" class="text-primary" scale="1.5" />
      </button>
      <ul
        class="uppercase lg:flex gap-5 px-5 py-1 bg-primary/10 rounded-full items-center border-primary border text-opacity-50 text-text md:hidden hidden"
      >
        <li class="nav-item"><a href="#home">Home</a></li>
        <li class="nav-item"><a href="#about_me">about me</a></li>
        <li class="nav-item"><a href="#education">education</a></li>
        <li class="nav-item"><a href="#skills">skills</a></li>
        <li class="nav-item"><a href="#projects">projects</a></li>
      </ul>
      <ul class="lg:flex items-center gap-3 hidden">
        <Contact />
      </ul>
    </nav>
  </header>
  <nav
    class="w-2/3 h-full border-l border-primary/20 z-50 fixed right-0 lg:hidden nav flex flex-col items-end gap-10 translate-x-0 transition transform-cpu duration-300"
    :class="{ ' translate-x-full': store.showNavbar != true }"
  >
    <button class="block lg:hidden m-4 float-end" @click="store.changeNavMode">
      <v-icon name="io-close" class="text-primary" scale="1.5" />
    </button>
    <ul
      class="uppercase flex flex-col gap-5 px-5 py-1 items-center text-opacity-50 text-text mt-10 w-full"
    >
      <li class="item-width">
        <a class="nav-item hidden-nav" href="#home" @click="store.changeNavMode"
          >Home</a
        >
      </li>
      <li class="item-width">
        <a
          class="nav-item hidden-nav"
          href="#about_me"
          @click="store.changeNavMode"
          >about me</a
        >
      </li>
      <li class="item-width">
        <a
          class="nav-item hidden-nav"
          href="#education"
          @click="store.changeNavMode"
          >education</a
        >
      </li>
      <li class="item-width">
        <a
          class="nav-item hidden-nav"
          href="#skills"
          @click="store.changeNavMode"
          >skills</a
        >
      </li>
      <li class="item-width">
        <a
          class="nav-item hidden-nav"
          href="#projects"
          @click="store.changeNavMode"
          >projects</a
        >
      </li>
    </ul>
    <div class="w-full flex flex-col items-center gap-10">
      <div class="flex items-center w-full justify-center gap-1">
        <div class="w-1/4 h-[0.5px] bg-primary/20"></div>
        <h1 class="text-primary font-bold text-xl uppercase">Contact Me</h1>
        <div class="w-1/4 h-[0.5px] bg-primary/20"></div>
      </div>
      <ul class="flex items-center gap-3">
        <Contact />
      </ul>
    </div>
  </nav>
</template>

<style>
.nav {
  /* From https://css.glass */
  background: rgba(10, 10, 10, 0.65);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(17.8px);
  -webkit-backdrop-filter: blur(17.8px);
}
.item-width {
  @apply min-w-40 max-w-96 w-full;
}
.hidden-nav {
  @apply bg-primary/10 border border-primary rounded-full h-10 flex items-center justify-center item-width;
}

.nav-item {
  @apply hover:text-primary;
}
</style>
@/components/store.js
