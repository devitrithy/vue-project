<script setup lang="ts">
import { ref, type Ref, type StyleValue } from "vue";

const props = defineProps({
  subject: String,
  percent: String,
  yPoint: { type: String, default: "2000" },
});

let def = 256;
let percentage = ref(0);
let skillPercent = (def * parseInt(props.percent!)) / 100;
console.log(skillPercent);

let skillPercentage: Ref<number> = ref(0.0);
let width = `width: ${parseInt(props.percent!)}%`;
let startAnimation: Ref<boolean> = ref(false);

// function startAnimate() {
//   let animate = setInterval(() => {
//     console.log("run");
//     if (skillPercentage.value >= skillPercent) {
//       return;
//     } else {
//       skillPercentage.value = skillPercentage.value + 1;
//       width.value = `width: ${skillPercentage.value}px`;
//     }
//     if (percentage.value < parseInt(props.percent!)) {
//       percentage.value += 1;
//     }
//   }, 10);
//   setTimeout(() => {
//     clearInterval(animate);
//   }, 5000);
// }

let scroll = ref(0.0);
window.addEventListener("scroll", () => {
  if (scroll.value > parseInt(props.yPoint!)) {
    startAnimation.value = true;
    console.log(scroll.value);
  } else {
    startAnimation.value = false;
  }
  scroll.value = window.scrollY;
});
</script>
<template>
  <div class="mb-5 uppercase">
    <h3>{{ subject }}</h3>
    <div class="flex items-center gap-4 w-[310px] justify-between">
      <span class="bar"
        ><span
          v-bind:style="width"
          :class="{ content: startAnimation === true }"
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
