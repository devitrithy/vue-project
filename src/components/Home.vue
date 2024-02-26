<script setup lang="ts">
import Person from "./icons/Person.vue";
function downloadFile() {
  const link = document.createElement("a");
  link.href = "./rithy_devit.pdf";
  link.download = "RithyDevit.pdf";
  link.click();
}
</script>
<template>
  <main
    class="container flex md:flex-row flex-col-reverse md:justify-between justify-center items-center px-5 gap-10"
  >
    <div
      class="2xl:text-6xl xl:text-5xl lg:text-5xl md:text-3xl text-4xl font-bold md:block flex justify-center items-center flex-col md:w-1/2"
    >
      <h1 class="mb-5">Hello</h1>
      <h1 class="mb-5">I'm Rithy Devit,</h1>
      <h1 class="text-primary mb-5">Full-Stack Developer</h1>
      <a
        target="_blank"
        href="https://export-download.canva.com/EFiCU/DAF6xBEFiCU/44/0-2155392096529354817.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240223%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240223T221420Z&X-Amz-Expires=44894&X-Amz-Signature=95db1dc92dbf98ddda2cf0764fc07fb3b66a16f7d6f20e08b34e7571bc76457f&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Rithy_Devit_Resume.pdf&response-expires=Sat%2C%2024%20Feb%202024%2010%3A42%3A34%20GMT"
        class="transition-all duration-300 text-xl font-bold py-2 px-10 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-background rounded-full shadow-lg hover:shadow-primary/10"
      >
        <v-icon class="mr-4" name="bi-cloud-download" scale="1.5" />
        <span>Download CV</span>
      </a>
    </div>
    <Person
      class="xl:w-[785px] xl:h-[572px] lg:w-[585px] lg:h-[372px] md:w-[485px] md:h-[272px] w-[256px] h-[200px]"
    />
  </main>
</template>
