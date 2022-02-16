<template>
  <AppDrag :transfer-data="ingredient" :disabled="isDisabled">
    <span class="filling" :class="`filling--${getNameImg(ingredient)}`">
      {{ ingredient.name }}
    </span>
  </AppDrag>
</template>
<script>
import AppDrag from "@/common/components/AppDrag";
import { MAX_INGREDIENTS } from "@/common/constants";

export default {
  name: "SelectorItem",
  components: {
    AppDrag,
  },
  props: {
    ingredient: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isDisabled() {
      return this.ingredient.amount === MAX_INGREDIENTS;
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
