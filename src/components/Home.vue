<script setup lang="ts">
import Person from "./icons/Person.vue";
</script>
<template>
  <main class="flex justify-evenly items-center container">
    <div class="target">
      <h1 class="text-6xl capitalize align-middle">
        Hello, I'm
        <span class="gradiant text-transparent bg-clip-text">Rithy Devit</span>
        <div class="mt-5">
          I'm <span class="lowercase">a</span> Full-Stack Developer
        </div>
      </h1>
      <div>
        <blockquote class="text-xl italic font-semibold text-gray-500">
          <p class="w-1/2 mt-5">
            "Management Information System student. I consider my self a
            responsible and orderly person. I am looking foward for my first
            work experience."
          </p>
        </blockquote>
      </div>
      <button class="gradiant text-gray-950 px-5 py-2 rounded-xl mt-5">
        <v-icon name="fa-external-link-alt" /> Hire Me
      </button>
    </div>
    <div class="target w-4/6">
      <Person />
    </div>
  </main>
</template>
