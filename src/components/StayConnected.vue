<script setup lang="ts">
import Heading from "./shared/Heading.vue";
import StayConnected from "./shared/StayConnected.vue";
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
      <form action="" method="post" class="grid gap-5">
        <div class="grid gap-2">
          <label for="subject">SUBJECT</label>
          <input type="text" id="subject" class="form-input" />
        </div>
        <div class="grid gap-2">
          <label for="email">EMAIL</label>
          <input type="email" class="form-input" />
        </div>

        <div class="grid gap-2">
          <label for="description">DESCRIPTION</label>
          <textarea
            name=""
            id="description"
            cols="100"
            rows="10"
            class="form-input"
          ></textarea>
        </div>
        <button
          class="py-2 bg-primary/10 border border-primary hover:bg-primary transition-all duration-500 rounded-full hover:text-black"
        >
          Send
        </button>
      </form>
    </div>
  </main>
</template>
<style>
.form-input {
  @apply py-2 rounded-lg indent-5 bg-primary/10 border border-primary/50  outline-none focus:border-primary;
}
</style>
