import * as actions from "@/store/modules/orders/actions";
import mutations from "@/store/modules/orders/mutations";

export default {
  namespaced: true,
  state: {
    orders: null,
  },
  actions,
  mutations,
};
