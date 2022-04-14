import { SET_ADDRESS } from "@/store/mutation-types";

export default {
  [SET_ADDRESS](state, address) {
    state.addresses = address;
  },
};
