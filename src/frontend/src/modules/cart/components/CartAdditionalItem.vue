<template>
  <li class="additional-list__item sheet">
    <p class="additional-list__description">
      <img :src="item.image" width="39" height="60" :alt="item.name" />
      <span>{{ item.name }}</span>
    </p>
    <div class="additional-list__wrapper">
      <div class="counter additional-list__counter">
        <button
          type="button"
          class="counter__button counter__button--minus"
          @click="onReduceMisc(item)"
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
          @click="onIncreaseMisc(item)"
        >
          <span class="visually-hidden">Больше</span>
        </button>
      </div>

      <div class="additional-list__price">
        <b>× {{ item.price }} ₽</b>
      </div>
    </div>
  </li>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "CartAdditionalItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("Cart", ["onIncreaseMisc", "onReduceMisc"]),
  },
};
</script>
