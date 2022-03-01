<template>
  <div>
    <main class="layout">
      <Sidebar />
      <slot />
    </main>
  </div>
</template>
<script>
import Sidebar from "@/common/components/Sidebar";
export default {
  name: "AppLayoutMainSidebar",
  components: {
    Sidebar,
  },
};
</script>
