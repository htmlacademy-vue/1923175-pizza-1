import Vue from "vue";
import Vuex from "vuex";
import * as actions from "@/store/actions";
import mutations from "@/store/mutations";
import { Builder, Cart, Auth, Orders, Profile } from "@/store/modules";
import VuexPlugins from "@/plugins/vuexPlugins";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Builder,
    Cart,
    Auth,
    Orders,
    Profile,
  },
  state: {
    users: [],
    pizzaPrice: 0,
  },
  plugins: [VuexPlugins],
  actions,
  mutations,
});
