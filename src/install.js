import Button from "./components/Button.vue";
export default {
  install(Vue) {
    // register component globally
    Vue.component("button", Button);
  },
};
