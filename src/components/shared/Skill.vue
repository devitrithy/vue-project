<script setup lang="ts">
import { store } from "../../store";
const props = defineProps({
  subject: String,
  percent: String,
  yPoint: { type: String, default: "2000" },
});

let width = `width: ${parseInt(props.percent!)}%`;
</script>
<template>
  <div class="uppercase">
    <div class="flex gap-5 items-center text-primary text-2xl">
      <slot></slot>
      <h3 class="text-white text-base">{{ subject }}</h3>
    </div>
    <div class="flex items-center gap-4 w-[310px] justify-between">
      <span class="bar"
        ><span
          v-bind:style="width"
          :class="{ content: store.startSkillAnimation === true }"
        ></span
      ></span>
      <h1>{{ percent }}%</h1>
    </div>
  </div>
</template>

<style>
.bar {
  @apply bg-primary/20 h-3 w-[256px] overflow-hidden rounded-full shadow-md shadow-black/30;
}
.bar span {
  @apply bg-primary h-3 float-left;
}
.content {
  animation: content 3s;
}
@keyframes content {
  0% {
    width: 0%;
  }
}
</style>
