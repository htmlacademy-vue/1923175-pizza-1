<template>
  <component :is="layout">
    <slot />
  </component>
</template>

<script>
const defaultLayout = "AppLayoutDefault";

export default {
  name: "AppLayout",
  data: () => ({
    totalPrice: 0,
  }),
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>
