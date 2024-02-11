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
let skillPercentage: Ref<number> = ref(0.0);
let width: Ref<StyleValue> = ref("width: 10px");
let startAnimation: Ref<boolean> = ref(false);

function startAnimate() {
  let animate = setInterval(() => {
    console.log("run");
    if (skillPercentage.value >= skillPercent) {
      return;
    } else {
      skillPercentage.value = skillPercentage.value + 1;
      width.value = `width: ${skillPercentage.value}px`;
    }
    if (percentage.value < parseInt(props.percent!)) {
      percentage.value += 1;
    }
  }, 10);
  setTimeout(() => {
    clearInterval(animate);
  }, 3000);
}

let scroll = ref(0.0);
window.addEventListener("scroll", () => {
  if (scroll.value > parseInt(props.yPoint!)) {
    if (startAnimation.value === false) {
      startAnimate();
    }
    startAnimation.value = true;
  } else {
    scroll.value = window.scrollY;
  }
});
</script>
<template>
  <article id="myElement">
    <h1>{{ subject }}</h1>
    <div class="flex items-center gap-4">
      <div class="block w-64 h-3">
        <div class="w-[256px] h-3 bg-primary/20 rounded-full absolute"></div>
        <div
          v-bind:style="width"
          class="h-3 bg-primary rounded-full absolute"
        ></div>
      </div>
      <h3>{{ percentage }}%</h3>
    </div>
  </article>
</template>
