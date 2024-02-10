<script setup lang="ts">
defineProps({
  duration: String,
});
</script>
<template>
  <div
    class="p-2 border border-primary rounded-full"
    data-aos="fade-up"
    v-bind:data-aos-duration="duration"
  >
    <slot></slot>
  </div>
</template>
