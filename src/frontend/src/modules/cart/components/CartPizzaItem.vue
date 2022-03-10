<template>
  <div>{{ item }}</div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "CartPizzaItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["totalPrice"]),
    listIngredients() {
      return this.item.ingredients.map((item) => item.name).join(", ");
    },
  },
  methods: {
    ...mapActions("Cart", ["editOrder"]),
  },
};
</script>
