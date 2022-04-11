<template>
  <div class="cart__form">
    <div class="cart-form">
      <label class="cart-form__select">
        <span class="cart-form__label">Получение заказа:</span>

        <select v-model="deliveryMethod" name="test" class="select">
          <option
            v-for="address in addresses"
            :key="address.id"
            :value="address.id"
          >
            {{ address.name }}
          </option>
          >
        </select>
      </label>

      <label class="input input--big-label">
        <span>Контактный телефон*:</span>
        <input
          v-model="phone"
          type="text"
          name="tel"
          placeholder="+7 999-999-99-99"
          required
        />
      </label>
      <div v-if="deliveryMethod === 'new-address'" class="cart-form__address">
        <span class="cart-form__label">Новый адрес:</span>

        <div class="cart-form__input">
          <label class="input">
            <span>Улица*</span>
            <input v-model="street" type="text" name="street" required />
          </label>
        </div>

        <div class="cart-form__input cart-form__input--small">
          <label class="input">
            <span>Дом*</span>
            <input v-model="building" type="text" name="house" required />
          </label>
        </div>

        <div class="cart-form__input cart-form__input--small">
          <label class="input">
            <span>Квартира</span>
            <input v-model="flat" type="text" name="apartment" />
          </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "CartAddressForm",
  computed: {
    ...mapGetters("Cart", ["addresses"]),
    phone: {
      get() {
        return this.$store.state.Cart.phone;
      },
      set(value) {
        this.$store.commit("Cart/SET_PHONE", value);
      },
    },
    street: {
      get() {
        return this.$store.state.Cart.newAddress.street;
      },
      set(value) {
        this.$store.commit("Cart/NEW_ADDRESS_SET_STREET", value);
      },
    },
    building: {
      get() {
        return this.$store.state.Cart.newAddress.building;
      },
      set(value) {
        this.$store.commit("Cart/NEW_ADDRESS_SET_BUILDING", value);
      },
    },
    flat: {
      get() {
        return this.$store.state.Cart.newAddress.flat;
      },
      set(value) {
        this.$store.commit("Cart/NEW_ADDRESS_SET_FLAT", value);
      },
    },
    deliveryMethod: {
      get() {
        return this.$store.state.Cart.deliveryMethod;
      },
      set(value) {
        this.$store.commit("Cart/SET_DELIVERY_METHOD", value);
      },
    },
  },
  methods: {},
};
</script>
