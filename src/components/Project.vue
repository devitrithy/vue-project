<script setup lang="ts">
import Heading from "./shared/Heading.vue";
</script>
<template>
  <main class="container px-5">
    <Heading title="My Projects" />
    <div class="py-20">
      <!--  -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        <div
          class="rounded-lg overflow-hidden transition-all border border-primary/50 hover:border-primary bg-primary/10 shadow-lg hover:shadow-primary/10"
        >
          <img
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt=""
          />
          <h1 class="px-4 py-2 text-xl font-bold">Title</h1>
          <h3 class="px-4 py-2 font-light">2021 - 2022</h3>
        </div>
        <div
          class="rounded-lg overflow-hidden transition-all border border-primary/50 hover:border-primary bg-primary/10 shadow-lg hover:shadow-primary/10"
        >
          <img
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt=""
          />
          <h1 class="px-4 py-2 text-xl font-bold">Title</h1>
          <h3 class="px-4 py-2 font-light">2021 - 2022</h3>
        </div>
        <div
          class="rounded-lg overflow-hidden transition-all border border-primary/50 hover:border-primary bg-primary/10 shadow-lg hover:shadow-primary/10"
        >
          <img
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt=""
          />
          <h1 class="px-4 py-2 text-xl font-bold">Title</h1>
          <h3 class="px-4 py-2 font-light">2021 - 2022</h3>
        </div>
        <div
          class="rounded-lg overflow-hidden transition-all border border-primary/50 hover:border-primary bg-primary/10 shadow-lg hover:shadow-primary/10"
        >
          <img
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt=""
          />
          <h1 class="px-4 py-2 text-xl font-bold">Title</h1>
          <h3 class="px-4 py-2 font-light">2021 - 2022</h3>
        </div>
      </div>
    </div>
  </main>
</template>
