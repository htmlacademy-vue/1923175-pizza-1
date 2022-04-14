import { SET_ENTITY } from "@/store/mutation-types";

export default {
  [SET_ENTITY](state, { isAuthenticated, user }) {
    state.isAuthenticated = isAuthenticated;
    state.user = user;
  },
};
