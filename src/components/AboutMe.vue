<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import Info from "./shared/Info.vue";
import Hobbie from "./shared/Hobbie.vue";
</script>
<template>
  <main class="container flex flex-col justify-between px-5">
    <Heading title="About Me" />
    <div
      class="flex flex-col-reverse lg:flex-row gap-10 justify-between items-center py-20"
    >
      <div class="block min-w-[300px] max-w-[700px]">
        <h1
          class="text-primary text-2xl uppercase font-bold"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
        >
          Full-Stack Developer
        </h1>
        <br />
        <p
          class="font-light text-wrap"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
        >
          Hi there! I'm <span class="font-bold text-primary">Rithy Devit</span>,
          an aspiring web developer and full-stack enthusiast. Currently
          studying Management Information System, I'm passionate about creating
          engaging web experiences. I'm proficient in HTML, CSS, JavaScript,
          Vue.js, and Node.js etc., and I'm eager to learn more.
          <br />
          <br />
          Let's connect and discuss how I can contribute to your projects!
        </p>
        <br />
        <Info title="fullname" text="Rithy Devit" animate-duration="700" />
        <Info title="Date Of Birth" text="14 May 2000" animate-duration="700" />
        <Info title="phone" text="+855 88 412 4798" animate-duration="800" />
        <Info
          title="email"
          text="devitrithy1@gmail.com"
          animate-duration="900"
        />
        <Info
          title="address"
          text="Prachum Angk Village, Cheung Kaeub Commune, Kandal Stueng District, Kandal, Cambodia"
          animate-duration="1000"
        />
        <Info title="language" text="Khmer, English" animate-duration="1100" />
      </div>
      <div
        class="overflow-hidden rounded-xl border-background shadow-border border-4"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-anchor-placement="top-bottom"
      >
        <img src="../assets/profile_2.jpg" alt="" width="352" />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <div class="flex flex-col items-center gap-10">
        <h1 class="uppercase text-primary font-bold text-2xl">interest</h1>
        <div class="flex gap-5 flex-wrap justify-center">
          <!--  -->
          <Hobbie duration="500" icon="bi-music-note" title="Listen to Music" />
          <Hobbie duration="600" icon="bi-code-slash" title="Coding" />
          <Hobbie
            duration="700"
            icon="bi-search-heart"
            title="Research New Web Trend"
          />
          <Hobbie duration="800" icon="gi-shuttlecock" title="Badmintin" />
          <Hobbie duration="900" icon="la-youtube" title="Watching Youtube" />
          <Hobbie
            duration="1000"
            icon="ai-ideas-repec"
            title="Thinking About Project"
          />
        </div>
      </div>
    </div>
  </main>
</template>
