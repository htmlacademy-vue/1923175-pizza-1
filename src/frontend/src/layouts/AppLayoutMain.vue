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
