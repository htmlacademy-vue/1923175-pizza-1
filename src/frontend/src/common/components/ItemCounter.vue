<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="isDisabledMinus"
      @click="onReduce(ingredientId)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input type="text" name="counter" class="counter__input" :value="amount" />
    <button
      type="button"
      class="counter__button counter__button--plus"
      :disabled="isDisabledPlus"
      @click="onIncrease(ingredientId)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { MAX_INGREDIENTS } from "../constants";

export default {
  name: "ItemCounter",
  props: {
    amount: {
      type: Number,
      required: true,
    },
    ingredientId: {
      type: Number,
      required: true,
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
    ...mapActions("Builder", ["onReduce", "onIncrease"]),
  },
};
</script>
