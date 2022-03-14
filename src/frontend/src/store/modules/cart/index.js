import * as actions from "@/store/modules/cart/actions";
import mutations from "@/store/modules/cart/mutations";
import getters from "@/store/modules/cart/getters";

export default {
  namespaced: true,
  state: {
    isOrderComplete: false,
    cart: [],
  },
  actions,
  mutations,
  getters,
};
