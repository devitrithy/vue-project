<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import Certificate from "./icons/Certificate.vue";
import Graduated from "./icons/Graduated.vue";
import Graduation from "./icons/Graduation.vue";
import Graduate from "./icons/Graduate.vue";
</script>
<template>
  <main class="container flex flex-col justify-between px-5">
    <Heading title="My Education" />
    <div class="flex flex-row gap-10 justify-evenly items-center py-20">
      <!--  -->
      <div
        class="xl:block hidden"
        data-aos="fade-left"
        data-aos-duration="400"
        data-aos-anchor-placement="top-bottom"
        data-aos-once="false"
      >
        <Certificate />
      </div>
      <div class="md:flex flex-col items-center hidden">
        <div
          class="w-[52px] h-[52px] flex justify-center items-center p-1 z-10 ed"
          data-aos="fade-down"
          data-aos-duration="400"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        >
          <Graduated />
        </div>
        <div
          class="box-style -mt-[.5px]"
          data-aos="fade-down"
          data-aos-duration="400"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        ></div>
        <div
          class="w-[30px] h-[30px] ed z-10 -mt-[.5px]"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        ></div>
        <div
          class="box-style -mt-[.5px]"
          data-aos="fade-down"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        ></div>
        <div
          class="w-[30px] h-[30px] ed z-10 -mt-[.5px]"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        ></div>
        <div
          class="box-style border-b -mt-[.5px]"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        ></div>
      </div>
      <div class="flex flex-col gap-7 justify-between">
        <!--  -->
        <div
          class="box-item"
          data-aos="fade-right"
          data-aos-duration="400"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        >
          <div class="w-[120px]">
            <Graduation />
          </div>
          <div class="flex flex-col gap-4">
            <h1 class="uppercase text-lg md:text-xl font-bold">
              setec institute
            </h1>
            <h1 class="font-thin text-sm">
              Bachelor of Management Information System
            </h1>
            <h1 class="capitalize font-thin text-sm">2022 - Present</h1>
          </div>
        </div>
        <div
          class="box-item"
          data-aos="fade-right"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        >
          <div class="w-[120px]">
            <Graduate />
          </div>
          <div class="flex flex-col gap-4">
            <h1 class="uppercase text-lg md:text-xl font-bold">
              setec institute
            </h1>
            <h1 class="font-thin text-sm">
              Associate of Management Information System
            </h1>
            <h1 class="capitalize font-thin text-sm">2019 - 2021</h1>
          </div>
        </div>
        <div
          class="box-item"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-anchor-placement="top-bottom"
          data-aos-once="false"
        >
          <div class="w-[120px]">
            <Graduate />
          </div>
          <div class="flex flex-col gap-4">
            <h1 class="uppercase text-lg md:text-xl font-bold">
              hun sen serey pheap highschool
            </h1>
            <h1 class="font-thin text-sm">Graduated</h1>
            <h1 class="capitalize font-thin text-sm">2022 - Present</h1>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </main>
</template>

<style>
.ed {
  @apply rounded-full bg-primary/20  border border-primary;
}
.secondary {
  @apply bg-primary/10 border-primary;
}
.box-item {
  @apply lg:w-[700px] h-[200px] min-w-[300px] secondary border rounded-xl shadow-lg shadow-primary/20 p-5 lg:pl-10 flex items-center gap-5;
}
.box-style {
  @apply w-[8px] h-[187px] border-l border-r secondary;
}
</style>
