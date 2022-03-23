<template>
  <div class="app-layout-main">
    <AppLayoutHeader />
    <div class="content">
      <AppLayoutMainSidebar v-if="isAuthenticated" />
      <slot />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutMainSidebar from "@/layouts/AppLayoutMainSidebar";

export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutMainSidebar,
    AppLayoutHeader,
  },
  computed: {
    ...mapState(["Auth"]),
    isAuthenticated() {
      return this.Auth.isAuthenticated;
    },
  },
};
</script>
<style>
.app-layout-main {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.content {
  height: 100%;
}
</style>
