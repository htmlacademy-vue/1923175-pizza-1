<template>
  <AppLayout>
    <router-view />
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
