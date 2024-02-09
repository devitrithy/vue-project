<script setup lang="ts">
let title = "{{ devitRithy }}";
</script>
<template>
  <header
    class="flex items-center justify-center border-b border-b-primary border-opacity-20 w-screen fixed nav z-50"
  >
    <nav
      class="flex justify-between items-center p-[15px] bg-transparent text-text container"
    >
      <a href="#home" class="text-primary text-2xl font-extrabold">{{
        title
      }}</a>
      <ul
        class="uppercase lg:flex gap-5 px-5 py-1 bg-primary bg-opacity-20 rounded-full items-center border-primary border text-opacity-50 text-text md:hidden hidden"
      >
        <li class="nav-item"><a href="#home">Home</a></li>
        <li class="nav-item"><a href="#about_me">about me</a></li>
        <li class="nav-item"><a href="#education">education</a></li>
        <li class="nav-item"><a href="#skills">skills</a></li>
        <li class="nav-item"><a href="#experiences">experiences</a></li>
      </ul>
      <ul class="flex items-center gap-3">
        <li>
          <a
            href="http://facebook.com/devitrithy1"
            target="_blank"
            rel="noopener noreferrer"
            ><v-icon name="fa-facebook" class="text-primary" scale="1.5"
          /></a>
        </li>
        <li>
          <a
            href="http://t.me/devitrithy"
            target="_blank"
            rel="noopener noreferrer"
            ><v-icon name="fa-telegram" class="text-primary" scale="1.5"
          /></a>
        </li>
        <li>
          <a
            href="http://github.com/devitrithy"
            target="_blank"
            rel="noopener noreferrer"
            ><v-icon name="fa-github" class="text-primary" scale="1.5"
          /></a>
        </li>
        <li>
          <a href="tel:+855884124798"
            ><v-icon name="fa-phone" class="text-primary" scale="1.5"
          /></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.nav {
  /* From https://css.glass */
  background: rgba(10, 10, 10, 0.65);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(17.8px);
  -webkit-backdrop-filter: blur(17.8px);
}
.nav-item {
  @apply hover:text-primary;
}
</style>
