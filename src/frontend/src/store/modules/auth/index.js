import * as actions from "@/store/modules/auth/actions";
import getters from "@/store/modules/auth/getters";
import mutations from "@/store/modules/auth/mutations";

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    user: { avatar: "", email: "", id: "", name: "", phone: "" },
  },
  actions,
  mutations,
  getters,
};
