<template>
  <AppLayout>
    <transition
      name="view"
      appear
      enter-active-class="animate__animated animate__bounceInRight"
    >
      <router-view />
    </transition>
  </AppLayout>
</template>
<script>
import AppLayout from "@/layouts/AppLayout";
export default {
  name: "App",
  components: {
    AppLayout,
  },
  created() {
    window.onerror = function (msg, url, line, col, error) {
      console.log(error);
    };

    this.$store.dispatch("init");
  },
};
</script>
<style lang="scss">
@import "~@/assets/scss/app";
</style>
