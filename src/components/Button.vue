<template>
  <button
    @click="onClick"
    @dblclick="onDoubleClick"
    :class="[
      'nice-button',
      'nice-button--' + color,
      'nice-button--' + size,
      {
        'nice-button--rounded': rounded,
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button",
  props: {
    color: {
      type: String,
      default: "blue",
      validator(x) {
        return ["blue", "green", "red"].indexOf(x) !== -1;
      },
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: "default",
      validator(x) {
        return ["small", "default", "large"].indexOf(x) !== -1;
      },
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    },
    onDoubleClick(e) {
      this.$emit("dblclick", e);
    },
  },
};
</script>
