<template>
  <span class="filling" :class="`filling--${getNameImg(ingredient)}`">
    {{ ingredient.name }}
  </span>
</template>
<script>
export default {
  name: "SelectorItem",
  props: {
    ingredient: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getNameImg({ image }) {
      const img = image.split(/[/\\./]+/);
      return img[img.length - 2];
    },
  },
};
</script>
