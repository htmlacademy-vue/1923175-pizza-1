<template>
  <form @submit.prevent="onSubmit" method="post" class="layout-form">
    <main class="content cart">
      <div class="container">
        <div class="cart__title">
          <h1 class="title title--big">Корзина</h1>
        </div>
        <div v-if="cart.length < 1" class="sheet cart__empty">
          <p>В корзине нет ни одного товара</p>
        </div>
        <template v-else>
          <ul class="cart-list sheet">
            <template v-for="item in cart">
              <CartPizzaItem :key="item.id" :item="item" />
            </template>
          </ul>
          <div class="cart__additional">
            <ul class="additional-list">
              <CartAdditionalItem
                v-for="item in misc"
                :key="item.id"
                :item="item"
              />
            </ul>
          </div>
          <div class="cart__form">
            <div class="cart-form">
              <label class="cart-form__select">
                <span class="cart-form__label">Получение заказа:</span>
                <select name="test" class="select">
                  <option value="1">Заберу сам</option>
                  <option value="2">Новый адрес</option>
                  <option value="3">Дом</option>
                </select>
              </label>
              <label class="input input--big-label">
                <span>Контактный телефон:</span>
                <input type="text" name="tel" placeholder="+7 999-999-99-99" />
              </label>
              <div class="cart-form__address">
                <span class="cart-form__label">Новый адрес:</span>
                <div class="cart-form__input">
                  <label class="input">
                    <span>Улица*</span>
                    <input type="text" name="street" />
                  </label>
                </div>

                <div class="cart-form__input cart-form__input--small">
                  <label class="input">
                    <span>Дом*</span>
                    <input type="text" name="house" />
                  </label>
                </div>

                <div class="cart-form__input cart-form__input--small">
                  <label class="input">
                    <span>Квартира</span>
                    <input type="text" name="apartment" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </main>
    <section class="footer" v-if="cart.length > 0">
      <div class="footer__more">
        <router-link to="/" class="button button--border button--arrow">
          Хочу еще одну
        </router-link>
      </div>
      <p class="footer__text">
        Перейти к конструктору<br />
        чтоб собрать ещё одну пиццу
      </p>
      <div class="footer__price">
        <b>Итого: {{ totalPrice }} ₽</b>
      </div>

      <div class="footer__submit">
        <button type="submit" class="button">Оформить заказ</button>
      </div>
    </section>
    <CartOrderComplete v-if="isOrderComplete" />
  </form>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CartOrderComplete from "@/modules/cart/components/CartOrderComplete";
import CartPizzaItem from "@/modules/cart/components/CartPizzaItem";
import CartAdditionalItem from "@/modules/cart/components/CartAdditionalItem";

export default {
  name: "Cart",
  components: {
    CartAdditionalItem,
    CartPizzaItem,
    CartOrderComplete,
  },
  created() {
    if (this.cart.length > 0) {
      this.query();
    }
  },
  computed: {
    ...mapState("Cart", ["isOrderComplete", "cart", "misc"]),
    ...mapGetters("Cart", ["totalPrice"]),
  },
  methods: {
    ...mapActions("Cart", ["onSubmit", "query"]),
  },
};
</script>
<style>
.layout-form {
  height: 100%;
}
</style>
