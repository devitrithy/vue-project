<script setup lang="ts">
import { validated, type InputField } from "@/type";
import { ref, type Ref } from "vue";

const props: InputField = defineProps<InputField>();
const validation = ref("border-primary");
function onChange(txt: String) {
  console.log(txt);
}
</script>
<template>
  <div class="grid gap-2">
    <label for="subject">{{ titles }}</label>
    <input
      @change="onChange(value)"
      type="text"
      id="subject"
      class="form-input"
      :class="
        validate === validated.start
          ? 'border-primary'
          : validate === validated.validated
          ? 'border-success'
          : 'border-danger'
      "
    />
    <small
      v-if="validate !== validated.start"
      :class="
        validate === validated.validated ? 'border-success' : 'border-danger'
      "
      class="text-gray-400"
      >{{ message }}</small
    >
  </div>
</template>
