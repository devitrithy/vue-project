<script setup lang="ts">
import axios from "axios";
import Heading from "./shared/Heading.vue";
import Loading from "./icons/Loading.vue";
import StayConnected from "./shared/StayConnected.vue";
import { reactive, ref, type Ref } from "vue";
let loading: Ref<boolean> = ref(false);
let send: Ref<number> = ref(2);
const form = reactive({
  name: "",
  telegram: "",
  email: "",
  description: "",
});

function checkEmpty(txt: String) {
  if (txt.length < 1) {
    return false;
  }
  return true;
}
async function sendMsg() {
  loading.value = true;

  await axios
    .post("https://devit-message-server.vercel.app/api/message", {
      name: form.name,
      telegram: form.telegram,
      email: form.email,
      description: form.description,
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
          <label for="subject">FULLNAME</label>
          <input
            type="text"
            id="subject"
            class="form-input"
            v-model="form.name"
          />
        </div>
        <div class="grid gap-2">
          <label for="email">EMAIL</label>
          <input type="email" class="form-input" v-model="form.email" />
        </div>
        <div class="grid gap-2">
          <label for="telegram">TELEGRAM</label>
          <input type="text" class="form-input" v-model="form.telegram" />
        </div>

        <div class="grid gap-2">
          <label for="description">DESCRIPTION</label>
          <textarea
            v-model="form.description"
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
