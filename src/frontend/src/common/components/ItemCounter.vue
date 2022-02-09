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
    <input type="text" name="counter" class="counter__input" :value="amount" />
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
      return this.amount < 1;
    },
    isDisabledPlus() {
      return this.amount >= MAX_INGREDIENTS;
    },
  },
  methods: {
    onIncrease() {
      this.amount += 1;
      this.$emit("on-increase", {
        id: this.ingredient.id,
        amount: this.amount,
      });
    },
    onReduce() {
      this.amount -= 1;
      this.$emit("on-reduce", {
        id: this.ingredient.id,
        amount: this.amount,
      });
    },
  },
};
</script>
