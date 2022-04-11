<template>
  <ul class="cart-list sheet">
    <li
      v-for="item in cart"
      :key="item.id"
      :pizzaid="item.id"
      class="cart-list__item"
    >
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
            <li>
              <span name="size">{{ getSize(item.size.id) }},</span>
              <span name="dough">Тесто:{{ getDough(item.dough.id) }}</span>
            </li>
            <li>
              <span name="sauce">Соус: {{ getSauces(item.sauce.id) }}</span>
            </li>
            <li>
              <span name="ingredients">Начинка: {{ getIngredients(item.ingredients) }}</span>
            </li>
          </ul>
        </div>
      </div>

      <CartItemCounter
        :current="item.amount"
        @increase="onIncrease(item)"
        @decrease="onReduce(item)"
      />
      <div class="cart-list__price">
        <b> {{ item.price * item.amount }} ₽ </b>
      </div>

      <div class="cart-list__button">
        <button
          @click="editPizza(item.id)"
          type="button"
          class="cart-list__edit"
        >
          Изменить
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CartItemCounter from "./CartItemCounter.vue";
export default {
  name: "CartPizzaList",
  components: {
    CartItemCounter,
  },
  computed: {
    ...mapState("Cart", ["cart"]),
    ...mapState("Builder", ["doughList", "sizes", "sauces"]),
  },
  methods: {
    ...mapActions("Cart", ["onIncrease", "onReduce"]),
    getDough(id) {
      return this.doughList.filter((item) => item.id === id)[0]?.name;
    },
    getSize(id) {
      return this.sizes.filter((item) => item.id === id)[0]?.name;
    },
    getSauces(id) {
      return this.sauces.filter((item) => item.id === id)[0]?.name;
    },
    getIngredients(ingredients) {
      return ingredients.map(({ name }) => name).join(",");
    },
    editPizza(pizzaId) {
      const pizza = this.cart.find((x) => x.id === pizzaId);
      this.$store.commit("Builder/SET_STATE", pizza);
      this.$router.push("/");
    },
  },
};
</script>
