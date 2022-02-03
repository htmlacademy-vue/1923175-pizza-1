<template>
  <input
    type="radio"
    :name="name"
    :value="value"
    class="visually-hidden"
    :checked="checked"
    @change="$emit('change', item)"
  />
</template>
<script>
export default {
  name: "RadioButton",
  props: {
    value: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    checked: {
      type: Boolean,
      default: false,
    },
    item: {
      type: [Number, String],
      default: 1,
    },
  },
};
</script>
