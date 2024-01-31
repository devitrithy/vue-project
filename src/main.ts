// main.js
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import { MotionPlugin } from "@vueuse/motion";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import * as FaIcons from "oh-vue-icons/icons";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(MotionPlugin);
app.mount("#app");
