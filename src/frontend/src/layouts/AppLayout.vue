<template>
  <div class="app-layout">
    <AppLayoutHeader :cart-total-price="totalPrice" />
    <main class="content">
      <IndexHome @click="handlerAddСart($event)" />
    </main>
  </div>
</template>

<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import IndexHome from "@/views/Index";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    IndexHome,
  },
  data: () => ({
    totalPrice: 0,
  }),
  methods: {
    handlerAddСart(totalPrice) {
      this.totalPrice = totalPrice;
    },
  },
};
</script>
