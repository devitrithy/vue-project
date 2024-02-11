<script setup lang="ts">
defineProps({
  duration: String,
  icon: String,
});
</script>
<template>
  <div
    class="p-2 border border-primary rounded-full"
    data-aos="fade-up"
    data-aos-offset="200"
    v-bind:data-aos-duration="duration"
    data-aos-once="false"
  >
    <v-icon
      v-bind:name="icon"
      class="text-primary"
      scale="2.0"
      title="Listen to music"
    />
  </div>
</template>
