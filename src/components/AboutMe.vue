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
        >
          Full-Stack Developer
        </h1>
        <br />
        <p
          class="font-light"
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-anchor-placement="top-bottom"
        >
          Management Information System student. I consider myself a responsible
          and orderly person. I am looking forward for my first work experience.
        </p>
        <br />
        <Info
          title="fullname"
          text="Rithy Devit"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        />
        <Info
          title="phone"
          text="+855 88 412 4798"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
        />
        <Info
          title="email"
          text="devitrithy1@gmail.com"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-anchor-placement="top-bottom"
        />
        <Info
          title="address"
          text="Ta Khmau, Kandal Cambodia"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-anchor-placement="top-bottom"
        />
        <Info
          title="language"
          text="Khmer, English"
          data-aos="fade-right"
          data-aos-duration="900"
          data-aos-anchor-placement="top-bottom"
        />
      </div>
      <div
        class="overflow-hidden rounded-xl border-primary shadow-border border-4"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="../assets/me.jpg" alt="" width="352" />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="flex flex-col items-center gap-10">
        <h1 class="uppercase text-primary font-bold text-2xl">interest</h1>
        <div class="flex gap-5 flex-wrap justify-center">
          <!--  -->
          <Hobbie duration="300">
            <v-icon
              name="bi-music-note"
              class="text-primary"
              scale="2.0"
              title="Listen to music"
            />
          </Hobbie>
          <Hobbie duration="400">
            <v-icon
              name="bi-code-slash"
              class="text-primary"
              scale="2.0"
              title="Coding"
            />
          </Hobbie>
          <Hobbie duration="500">
            <v-icon
              name="bi-search-heart"
              class="text-primary"
              scale="2.0"
              title="Research"
            />
          </Hobbie>
          <Hobbie duration="600">
            <v-icon
              name="gi-shuttlecock"
              class="text-primary"
              scale="2.0"
              title="Badminton"
            />
          </Hobbie>
          <Hobbie duration="700">
            <v-icon
              name="la-youtube"
              class="text-primary"
              scale="2.0"
              title="Watch Youtube Video"
            />
          </Hobbie>
          <Hobbie duration="800">
            <v-icon
              name="ai-ideas-repec"
              class="text-primary"
              scale="2.0"
              title="Thinking about new Trend"
            />
          </Hobbie>
        </div>
      </div>
    </div>
  </main>
</template>
