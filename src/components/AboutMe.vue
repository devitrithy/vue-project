<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import Info from "./shared/Info.vue";
</script>
<template>
  <main class="container flex flex-col justify-between px-5">
    <Heading title="About Me" />
    <div
      class="flex flex-col lg:flex-row gap-10 justify-evenly items-center py-20"
    >
      <div class="overflow-hidden rounded-full border-4 border-primary">
        <img src="../assets/me.jpg" alt="" width="352" />
      </div>
      <div class="block min-w-[300px] max-w-[700px]">
        <h1 class="text-primary text-2xl uppercase font-bold">
          Full-Stack Developer
        </h1>
        <br />
        <p class="font-light">
          Management Information System student. I consider myself a responsible
          and orderly person. I am looking forward for my first work experience.
        </p>
        <br />
        <Info title="fullname" text="Rithy Devit" />
        <Info title="phone" text="+855 88 412 4798" />
        <Info title="email" text="devitrithy1@gmail.com" />
        <Info title="address" text="Ta Khmau, Kandal Cambodia" />
        <Info title="language" text="Khmer, English" />
      </div>
    </div>
    <div></div>
  </main>
</template>
