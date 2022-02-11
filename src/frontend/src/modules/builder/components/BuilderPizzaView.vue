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
            <template v-for="(item, index) in getComputedClass">
              <div :class="item" :key="index"></div>
            </template>
          </div>
        </div>
      </div>
    </AppDrop>
    <div class="content__result">
      <p>Итого: {{ totalPrice }} ₽</p>
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
    totalPrice: {
      type: Number,
      default: 0,
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    getFoundation() {
      return `pizza--foundation--${this.doughId === 2 ? "big" : "small"}-${
        this.saucesId === 1 ? "tomato" : "creamy"
      }`;
    },
    getComputedClass() {
      return this.ingredients
        .filter((item) => item.amount > 0)
        .map((item) => {
          const image = item.image.match(/(\w+).svg/);
          const result = [];
          if (item.amount === 2) {
            result.push("pizza__filling--second");
          }

          if (item.amount === 3) {
            result.push("pizza__filling--third");
          }

          return ["pizza__filling", `pizza__filling--${image[1]}`, ...result];
        });
    },
  },
  methods: {
    onDrop(ingredient) {
      this.$emit("on-drop", ingredient);
    },
  },
};
</script>
