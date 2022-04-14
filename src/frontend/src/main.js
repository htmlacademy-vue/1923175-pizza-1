import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import * as VuePlugins from "@/plugins/vuePlugins";

Vue.config.productionTip = false;
Vue.use(VuePlugins);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
