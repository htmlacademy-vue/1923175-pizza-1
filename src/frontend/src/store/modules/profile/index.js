import * as actions from "@/store/modules/profile/actions";
import mutations from "@/store/modules/profile/mutations";

export default {
  namespaced: true,
  state: {
    addresses: null,
  },
  actions,
  mutations,
};
