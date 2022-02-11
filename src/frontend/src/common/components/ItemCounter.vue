<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="isDisabledMinus"
      @click="onReduce"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      class="counter__input"
      :value="ingredient.amount"
    />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :disabled="isDisabledPlus"
      @click="onIncrease"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
import { MAX_INGREDIENTS } from "../constants";

export default {
  name: "ItemCounter",
  data: () => ({
    amount: 0,
  }),
  props: {
    ingredient: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isDisabledMinus() {
      return this.ingredient.amount < 1;
    },
    isDisabledPlus() {
      return this.ingredient.amount >= MAX_INGREDIENTS;
    },
  },
  methods: {
    onReduce() {
      --this.ingredient.amount;
    },
    onIncrease() {
      ++this.ingredient.amount;
    },
  },
};
</script>
