import { ORDER_COMPLETED } from "@/store/mutation-types";

export default {
  [ORDER_COMPLETED](state, isOrderComplete) {
    state.isOrderComplete = isOrderComplete;
  },
};
