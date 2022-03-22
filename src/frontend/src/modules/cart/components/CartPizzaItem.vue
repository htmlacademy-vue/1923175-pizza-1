<template>
  <li class="cart-list__item">
    <div class="product cart-list__product">
      <img
        src="@/assets/img/product.svg"
        class="product__img"
        width="56"
        height="56"
        :alt="item.name"
      />
      <div class="product__text">
        <h2>{{ item.name }}</h2>
        <ul>
          <li>{{ getSize }} см, на {{ nameDough }} тесте</li>
          <li>Соус: {{ getNameSauce }}</li>
          <li>Начинка: {{ listIngredients }}</li>
        </ul>
      </div>
    </div>

    <div class="counter cart-list__counter">
      <button
        type="button"
        class="counter__button counter__button--minus"
        @click="onReduce(item)"
      >
        <span class="visually-hidden">Меньше</span>
      </button>
      <input
        type="text"
        name="counter"
        class="counter__input"
        :value="item.amount"
      />
      <button
        type="button"
        class="counter__button counter__button--plus counter__button--orange"
        :disabled="isDisabledIncrease"
        @click="onIncrease(item)"
      >
        <span class="visually-hidden">Больше</span>
      </button>
    </div>

    <div class="cart-list__price">
      <b>{{ itemComputedPrice }} ₽</b>
    </div>

    <div class="cart-list__button">
      <button type="button" class="cart-list__edit" @click="onEditOrder(item)">
        Изменить
      </button>
    </div>
  </li>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CartPizzaItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    itemComputedPrice() {
      return this.item.amount > 0 ? this.item.price * this.item.amount : 1;
    },
    isDisabledIncrease() {
      return this.item.amount > 10;
    },
    listIngredients() {
      return this.item.ingredients.map((item) => item.name).join(", ");
    },
    nameDough() {
      return this.item.dough.id === 1 ? "тонком" : "толстом";
    },
    getNameSauce() {
      return this.item.sauce.id === 1 ? "Томатный" : "Сливочный";
    },
    getSize() {
      if (this.item.size.multiplier === 1) {
        return "23";
      } else if (this.item.size.multiplier === 2) {
        return "32";
      } else {
        return "45";
      }
    },
  },
  methods: {
    ...mapActions("Cart", ["onIncrease", "onReduce"]),
    ...mapActions("Builder", ["editOrder"]),
    onEditOrder(item) {
      this.editOrder(item);
      this.$router.push("/");
    },
  },
};
</script>
