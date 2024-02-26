<script setup lang="ts">
import axios from "axios";
import Input from "@/components/shared/Input.vue";
import Heading from "./shared/Heading.vue";
import Loading from "./icons/Loading.vue";
import StayConnected from "./shared/StayConnected.vue";
import { reactive, ref, type Ref } from "vue";
import { type Form, validated } from "@/type";
let loading: Ref<boolean> = ref(false);
let send: Ref<number> = ref(2);
const form: Form = reactive({
  name: {
    titles: "NAME",
    value: "",
    message: "",
    validate: validated.start,
  },
  email: {
    titles: "EMAIL",
    value: "",
    message: "",
    validate: validated.start,
  },
  telegram: {
    titles: "TELEGRAM",
    value: "",
    message: "",
    validate: validated.start,
  },
  description: {
    titles: "DESCRIPTION",
    value: "",
    message: "",
    validate: validated.start,
  },
});

function checkValidation(txt: string) {
  return true;
}

async function sendMsg() {
  loading.value = true;

  await axios
    .post("https://devit-message-server.vercel.app/api/message", {
      name: form.name.value,
      telegram: form.telegram.value,
      email: form.email.value,
      description: form.description.value,
    })
    .then(() => {
      loading.value = false;
      send.value = 0;
    })
    .catch((err) => (send.value = 1));
}
</script>
<template>
  <main class="container flex flex-col justify-between px-5">
    <Heading title="Stay Connected" />
    <div
      class="flex flex-col-reverse lg:flex-row gap-10 justify-between items-center py-20"
    >
      <StayConnected
        class="xl:w-[785px] xl:h-[572px] lg:w-[585px] lg:h-[372px] md:w-[485px] md:h-[272px] hidden lg:block"
      />
      <div class="grid gap-5">
        <div class="grid gap-2">
          <label for="subject">{{ form.name.titles }}</label>
          <input
            :value="form.name.value"
            type="text"
            id="subject"
            class="form-input"
          />
        </div>
        <div class="grid gap-2">
          <label for="subject">{{ form.email.titles }}</label>
          <input
            :value="form.email.value"
            type="text"
            id="subject"
            class="form-input"
          />
        </div>
        <div class="grid gap-2">
          <label for="subject">{{ form.telegram.titles }}</label>
          <input
            :value="form.telegram.value"
            type="text"
            id="subject"
            class="form-input"
          />
        </div>
        <div class="grid gap-2">
          <label for="description">{{ form.description.titles }}</label>
          <textarea
            v-model="form.description.value"
            name=""
            id="description"
            cols="100"
            rows="10"
            class="form-input"
          ></textarea>
        </div>
        <button
          :disabled="send === 0 || loading === true"
          type="button"
          @click="sendMsg"
          class="py-2 bg-primary/10 border border-primary hover:bg-primary transition-all duration-500 rounded-full hover:text-black flex items-center justify-center disabled:text-gray-500 disabled:hover:bg-primary/10"
        >
          <span class="flex items-center gap-4">
            <Loading :class="{ hidden: loading !== true }" class="text-2xl" />
            <span v-if="send === 0">Successfully Sent</span>
            <span v-else-if="send === 1">Failed to Sent</span>
            <span v-else-if="loading">Sending</span>
            <span v-else>Send</span>
          </span>
        </button>
      </div>
    </div>
  </main>
</template>
<style>
.form-input {
  @apply py-2 rounded-lg indent-5 bg-primary/10 border border-primary/50  outline-none focus:border-primary;
}
</style>
