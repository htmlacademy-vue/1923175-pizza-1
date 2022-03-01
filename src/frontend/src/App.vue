<template>
  <div id="app">
    <AppLayout :cart-total-price="cartTotalPrice">
      <router-view @click="addCart" />
    </AppLayout>
  </div>
</template>
<script>
import AppLayout from "@/layouts/AppLayout";
export default {
  name: "App",
  components: {
    AppLayout,
  },
  data: () => ({
    cartTotalPrice: 0,
  }),
  methods: {
    addCart(price) {
      this.cartTotalPrice = price;
    },
  },
};
</script>
<style lang="scss">
@import "~@/assets/scss/app";
</style>
