import { reactive } from "vue";

export const store = reactive({
  showNavbar: false,
  changeNavMode() {
    this.showNavbar = !this.showNavbar;
  },
});
