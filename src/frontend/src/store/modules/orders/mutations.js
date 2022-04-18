import { SET_ORDER } from "@/store/mutation-types";

export default {
  [SET_ORDER](state, orders) {
    state.orders = orders;
  },
};
