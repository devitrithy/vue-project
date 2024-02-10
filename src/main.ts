// main.js
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";

import { OhVueIcon, addIcons } from "oh-vue-icons";

import * as FaIcons from "oh-vue-icons/icons";
import * as GiIcons from "oh-vue-icons/icons/gi";

const Fa = Object.values({ ...FaIcons });
const Gi = Object.values({ ...GiIcons });
addIcons(...Fa);
addIcons(...Gi);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
