<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import Info from "./shared/Info.vue";
import Hobbie from "./shared/Hobbie.vue";
</script>
<template>
  <main class="container flex flex-col justify-between px-5">
    <Heading title="About Me" />
    <div
      class="flex flex-col-reverse lg:flex-row gap-10 justify-evenly items-center py-20"
    >
      <div class="block min-w-[300px] max-w-[700px]">
        <h1
          class="text-primary text-2xl uppercase font-bold"
          data-aos="fade-right"
          data-aos-duration="300"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
        >
          Full-Stack Developer
        </h1>
        <br />
        <p
          class="font-light"
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="true"
        >
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
      <div
        class="overflow-hidden rounded-xl border-primary shadow-border border-4"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="true"
      >
        <img src="../assets/me.jpg" alt="" width="352" />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="flex flex-col items-center gap-10">
        <h1 class="uppercase text-primary font-bold text-2xl">interest</h1>
        <div class="flex gap-5 flex-wrap justify-center">
          <!--  -->
          <Hobbie duration="300" icon="bi-music-note"> </Hobbie>
          <Hobbie duration="400" icon="bi-code-slash"> </Hobbie>
          <Hobbie duration="500" icon="bi-search-heart"> </Hobbie>
          <Hobbie duration="600" icon="gi-shuttlecock"> </Hobbie>
          <Hobbie duration="700" icon="la-youtube"> </Hobbie>
          <Hobbie duration="800" icon="ai-ideas-repec"> </Hobbie>
        </div>
      </div>
    </div>
  </main>
</template>
