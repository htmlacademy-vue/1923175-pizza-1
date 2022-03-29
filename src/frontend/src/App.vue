<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>
<script>
import { setAuth } from "@/common/helpers";
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

    if (this.$jwt.getToken()) {
      setAuth(this.$store);
    }

    this.$store.dispatch("init");
  },
};
</script>
<style lang="scss">
@import "~@/assets/scss/app";
</style>
