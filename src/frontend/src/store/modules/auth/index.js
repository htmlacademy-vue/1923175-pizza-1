import * as actions from "@/store/modules/auth/actions";
import getters from "@/store/modules/auth/getters";

export default {
  namespaced: true,
  state: {
    user: [],
  },
  actions,
  getters,
};
