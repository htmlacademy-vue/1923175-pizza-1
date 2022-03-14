import {
  ADD_TO_CART,
  ON_INCREASE,
  ON_REDUCE,
  ORDER_COMPLETED,
} from "@/store/mutation-types";

export default {
  [ORDER_COMPLETED](state, isOrderComplete) {
    state.isOrderComplete = isOrderComplete;
  },
  [ADD_TO_CART](state, pizzas) {
    state.cart.push(pizzas);
  },
  [ON_REDUCE](state, item) {
    --item.amount;
  },
  [ON_INCREASE](state, item) {
    ++item.amount;
  },
};
