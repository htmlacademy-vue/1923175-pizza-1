<template>
  <div class="counter counter--orange ingredients__counter">
    <button
      type="button"
      class="counter__button counter__button--minus"
      :disabled="isDisabled"
      @click="onReduce"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input type="text" name="counter" class="counter__input" :value="amount" />
    <button
      type="button"
      class="counter__button counter__button--plus"
      @click="onIncrease"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "ItemCounter",
  data: () => ({
    amount: 0,
  }),
  computed: {
    isDisabled() {
      return this.amount < 1;
    },
  },
  methods: {
    onIncrease() {
      this.amount += 1;
    },
    onReduce() {
      this.amount -= 1;
    },
  },
};
</script>
