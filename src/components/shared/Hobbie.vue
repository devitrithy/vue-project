<script setup lang="ts">
defineProps({
  duration: String,
  title: String,
  icon: String,
});
</script>
<template>
  <div
    class="p-2 border border-primary rounded-full hover-effect relative cursor-pointer tooltip"
    data-aos="fade-up"
    data-aos-offset="200"
    v-bind:data-aos-duration="duration"
    data-aos-once="false"
  >
    <div>
      <span
        class="absolute left-1/2 top-0 transform -translate-x-1/2 bg-primary/10 text-white whitespace-nowrap px-7 py-4 border-color border border-primary nav rounded-full"
        >{{ title }}</span
      >
      <span></span>
    </div>
    <v-icon v-bind:name="icon" class="text-primary" scale="2.0" />
  </div>
</template>

<style>
.border-color {
  opacity: 0;
  transition: opacity 0.4s ease;
  visibility: hidden;
}
.border-color::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 100%;
  transform: translateX(-50%);

  border: 14px solid;
  @apply border-t-primary border-transparent;
}

.tooltip:hover .border-color {
  top: -140%;
  visibility: visible;
  opacity: 1;
}
</style>
