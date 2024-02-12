<script setup lang="ts">
import Person from "./icons/Person.vue";
import IconScrollDown from "./icons/ScrollDown.vue";
function downloadFile() {
  const link = document.createElement("a");
  link.href = "./rithy_devit.pdf";
  link.download = "RithyDevit.pdf";
  link.click();
}
</script>
<template>
  <main
    class="container flex md:flex-row flex-col-reverse justify-between items-center px-5 gap-10"
  >
    <div
      class="2xl:text-6xl xl:text-5xl lg:text-5xl md:text-3xl text-4xl font-bold md:block flex justify-center items-center flex-col md:w-1/2"
    >
      <h1 class="mb-5">Hello</h1>
      <h1 class="mb-5">I'm Rithy Devit,</h1>
      <h1 class="text-primary mb-5">Full-Stack Developer</h1>
      <button
        @click="downloadFile"
        class="text-xl font-bold py-2 px-10 bg-primary text-black rounded-full hover:bg-primary/90"
      >
        <v-icon class="mr-4" name="bi-cloud-download" scale="1.5" />
        <span>Download CV</span>
      </button>
    </div>
    <Person
      class="xl:w-[785px] xl:h-[572px] lg:w-[585px] lg:h-[372px] md:w-[485px] md:h-[272px] w-[400px] h-[200px]"
    />
  </main>
</template>
