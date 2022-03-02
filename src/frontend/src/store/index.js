import Vue from "vue";
import Vuex from "vuex";
import { Builder, Cart, Login, Orders, Profile } from "@/store/modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Builder,
    Cart,
    Login,
    Orders,
    Profile,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
