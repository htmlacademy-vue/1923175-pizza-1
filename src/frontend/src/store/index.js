import Vue from "vue";
import Vuex from "vuex";
import * as actions from "@/store/actions";
import mutations from "@/store/mutations";
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
  state: {
    totalPrice: 0,
  },
  actions,
  mutations,
});
