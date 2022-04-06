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
          src="img/product.svg"
          class="product__img"
          width="56"
          height="56"
          :alt="item.name"
        />
        <div class="product__text">
          <h2>{{ item.name }}</h2>
          <ul>
            <li>
              <span name="size">{{ item.size }},</span>
              <span name="dough">Тесто: ''</span>
            </li>
            <li>
              <span name="sauce">Соус: ''</span>
            </li>
            <li>
              <span name="ingredients">Начинка: ''</span>
            </li>
          </ul>
        </div>
      </div>

      <CartItemCounter
        :current="item.count"
        @increase="increasePizzaCount(item.id)"
        @decrease="decreaseOrRemovePizza(item.id)"
      />
      <div class="cart-list__price">
        <b> {{ item.price * item.count }} ₽ </b>
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
import { mapState } from "vuex";
import CartItemCounter from "./CartItemCounter.vue";
export default {
  name: "CartPizzaList",
  components: {
    CartItemCounter,
  },
  computed: {
    ...mapState("Cart", ["cart"]),
  },
  methods: {
    getIngredientNames(pizza) {
      return pizza.ingredients.map((i) => i.name.toLowerCase()).join(",");
    },
    increasePizzaCount(pizzaId) {
      this.$store.commit("Cart/increasePizzaCount", pizzaId);
    },
    decreaseOrRemovePizza(pizzaId) {
      const pizza = this.cart.find((x) => x.id === pizzaId);
      if (pizza.count > 1) {
        this.$store.commit("Cart/decreasePizzaCount", pizzaId);
      } else {
        this.$store.commit("Cart/removePizza", pizzaId);
        if (this.cart.length === 0) {
          // We`ve removed last pizza. Cleaning up additional items from cart
          this.$store.commit("Cart/resetCart");
        }
      }
    },
    editPizza(pizzaId) {
      const pizza = this.cart.find((x) => x.id === pizzaId);
      this.$store.commit("Builder/setState", pizza);
      this.$router.push("/");
    },
  },
};
</script>
