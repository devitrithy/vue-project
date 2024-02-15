<script setup lang="ts">
import axios from "axios";
import Heading from "./shared/Heading.vue";
import StayConnected from "./shared/StayConnected.vue";
let name: String;
let email: String;
let description: String;

async function sendMsg() {
  await axios
    .post("https://devit-message-server.vercel.app/api/message", {
      name: name,
      email: email,
      description: description,
    })
    .then(() => {
      console.log("Done");
    })
    .catch((err) => console.log(err));
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
          <label for="subject">Fullname</label>
          <input type="text" id="subject" class="form-input" v-bind="name" />
        </div>
        <div class="grid gap-2">
          <label for="email">EMAIL</label>
          <input type="email" class="form-input" v-bind="email" />
        </div>

        <div class="grid gap-2">
          <label for="description">DESCRIPTION</label>
          <textarea
            v-bind="description"
            name=""
            id="description"
            cols="100"
            rows="10"
            class="form-input"
          ></textarea>
        </div>
        <button
          type="button"
          @click="sendMsg"
          class="py-2 bg-primary/10 border border-primary hover:bg-primary transition-all duration-500 rounded-full hover:text-black"
        >
          Send
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
