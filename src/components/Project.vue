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
        <Project
          title="Customer - Legacy Cinema Booking System"
          demo="https://legacycinema.vercel.app"
          github="https://github.com/devitrithy/legacy_cinema_customer_web"
          date="Aug 10, 2023 - Dec 10, 2023 "
          ><img src="./project_1.jpg" alt="" srcset="" width="100%"
        /></Project>
        <Project
          title="Admin - Legacy Cinema Booking System"
          demo="https://admin-legacycinema.vercel.app"
          github="https://github.com/devitrithy/legacy_cinema_customer_web"
          date="Aug 10, 2023 - Dec 10, 2023 "
          ><img src="./project_2.png" alt="" srcset="" width="100%"
        /></Project>
        <Project
          title="Mobile - Legacy Cinema Booking System"
          demo="https://github.com/devitrithy/legacy_cinema_mobile_app"
          github="https://github.com/devitrithy/legacy_cinema_mobile_app"
          date="Jan 1, 2024 - Jan 13, 2024"
          ><img src="./project_3.png" alt="" srcset="" width="100%"
        /></Project>
      </div>
    </div>
  </main>
</template>
