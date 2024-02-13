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
  >
    <v-icon v-bind:name="icon" class="text-primary" scale="2.0" />
  </div>
</template>
