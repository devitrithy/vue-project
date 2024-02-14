<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import Project from "./shared/Project.vue";
</script>
<template>
  <main class="container px-5">
    <Heading title="My Projects" />
    <div class="py-20">
      <!--  -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  </main>
</template>
