<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @input="(e) => $emit('input', e.target.value)"
      />
    </label>
    <AppDrop @drop="onDrop">
      <div class="content__constructor">
        <div class="pizza" :class="getFoundation">
          <div class="pizza__wrapper">
            {{ getClassComputed }}
          </div>
        </div>
      </div>
    </AppDrop>
    <div class="content__result">
      <p>Итого: 0 ₽</p>
      <button type="button" class="button" disabled="">Готовьте!</button>
    </div>
  </div>
</template>
<script>
import AppDrop from "@/common/components/AppDrop";

export default {
  name: "BuilderPizzaView",
  components: {
    AppDrop,
  },
  data: () => ({
    ingredients: [],
  }),
  props: {
    size: {
      type: String,
      default: "",
    },
    doughId: {
      type: [Number, String],
      default: 1,
    },
    saucesId: {
      type: [Number, String],
      default: 1,
    },
  },
  computed: {
    getFoundation() {
      return `pizza--foundation--${this.doughId === 2 ? "big" : "small"}-${
        this.saucesId === 1 ? "tomato" : "creamy"
      }`;
    },
    getClassComputed() {
      return this.ingredients;
    },
  },
  methods: {
    onDrop(ingredient) {
      this.ingredients.push(ingredient);
    },
  },
};
</script>
