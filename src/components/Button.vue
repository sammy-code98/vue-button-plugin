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
<style>
.nice-button {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  user-select: none;
  cursor: pointer;
}
/* colors */
.nice-button--blue {
  background-color: #0194ef;
}
.nice-button--green {
  background-color: #1bb934;
}

.nice-button--red {
  background-color: #e1112c;
}
/* sizes */
.nice-button--small {
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
}
.nice-button--default {
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
}
.nice-button--large {
  padding: 16px 18px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
}

/* booleans */
.nice-button--rounded {
  border-radius: 60px;
}
</style>
