import * as actions from "@/store/modules/cart/actions";
import mutations from "@/store/modules/cart/mutations";

export default {
  namespaced: true,
  state: {
    cartList: [],
    isOrderComplete: false,
  },
  actions,
  mutations,
};
