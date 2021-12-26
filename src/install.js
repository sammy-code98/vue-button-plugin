import MyButton from "./components/MyButton.vue";
export default {
  install(Vue) {
    // register component globally
    Vue.component("my-button", MyButton);
  },
};
