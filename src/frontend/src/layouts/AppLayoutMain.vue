<template>
  <div class="app-layout-main">
    <AppLayoutHeader />
    <div class="content">
      <AppLayoutMainSidebar />
      <slot />
    </div>
  </div>
</template>
<script>
import AppLayoutHeader from "@/layouts/AppLayoutHeader";
import AppLayoutMainSidebar from "@/layouts/AppLayoutMainSidebar";

export default {
  name: "AppLayoutMain",
  components: {
    AppLayoutMainSidebar,
    AppLayoutHeader,
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
