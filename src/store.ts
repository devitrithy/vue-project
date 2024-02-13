import { reactive } from "vue";

export const store = reactive({
  showNavbar: false,
  changeNavMode() {
    this.showNavbar = !this.showNavbar;
  },
  closeNavbar() {
    this.showNavbar = false;
  },
  startSkillAnimation: false,
  isMobile: false,
  scorllUp: false,
});
