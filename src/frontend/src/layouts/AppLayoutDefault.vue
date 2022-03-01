<template>
  <div class="app-layout-default">
    <AppLayoutHeader :cart-total-price="cartTotalPrice" />
    <slot />
  </div>
</template>
<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
export default {
  name: "AppLayoutDefault",
  components: {
    AppLayoutHeader,
  },
  props: {
    cartTotalPrice: {
      type: Number,
      default: 0,
    },
  },
};
</script>
