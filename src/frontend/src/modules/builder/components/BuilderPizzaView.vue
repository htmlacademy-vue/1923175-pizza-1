<template>
  <div class="content__pizza">
    <label class="input">
      <span class="visually-hidden">Название пиццы</span>
      <input
        type="text"
        name="pizza_name"
        placeholder="Введите название пиццы"
        @input="setPizzaName"
      />
    </label>
    <AppDrop @drop="getIngredient">
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
      <p>Итого: {{ pizzaPrice }} ₽</p>
      <button
        type="button"
        class="button"
        :disabled="isDisabled"
        @click="addCart"
      >
        Готовьте!
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import AppDrop from "@/common/components/AppDrop";

export default {
  name: "BuilderPizzaView",
  components: {
    AppDrop,
  },
  computed: {
    ...mapState("Builder", [
      "pizzaName",
      "doughID",
      "saucesID",
      "ingredients",
      "sauces",
      "doughList",
      "sizeID",
      "sizes",
    ]),
    ...mapGetters("Builder", ["pizzaPrice"]),
    getFoundation() {
      return `pizza--foundation--${this.doughID === 2 ? "big" : "small"}-${
        this.saucesID === 1 ? "tomato" : "creamy"
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
    hasIngredients() {
      return this.ingredients.some((ingredients) => ingredients.amount > 0);
    },
    isDisabled() {
      return !this.hasIngredients || !this.pizzaName;
    },
  },
  methods: {
    ...mapActions("Builder", ["setPizzaName", "onIncrease", "resetState"]),
    ...mapActions("Cart", ["onAddToCart"]),
    getIngredient({ id }) {
      this.onIncrease(this.ingredients.find((item) => item.id === id));
    },
    addCart() {
      this.onAddToCart({
        pizzaName: this.pizzaName,
        ingredients: this.ingredients,
        doughID: this.doughID,
        saucesID: this.saucesID,
        sauces: this.sauces,
        doughList: this.doughList,
        sizeID: this.sizeID,
        sizes: this.sizes,
        pizzaPrice: this.pizzaPrice,
      });
      this.resetState();
    },
  },
};
</script>
