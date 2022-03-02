import {
  GET_TOTAL_PRICE,
  SET_PIZZA_NAME,
  GET_SIZE_ID,
  GET_DOUGH_ID,
  GET_SAUCES_ID,
  ON_REDUCE,
  ON_INCREASE,
} from "@/store/mutation-types";

export default {
  [SET_PIZZA_NAME](state, value) {
    state.pizzaName = value;
  },
  [GET_TOTAL_PRICE](state, totalPrice) {
    state.totalPrice = totalPrice;
  },
  [GET_SIZE_ID](state, id) {
    state.sizeID = id;
  },
  [GET_DOUGH_ID](state, id) {
    state.doughID = id;
  },
  [GET_SAUCES_ID](state, id) {
    state.saucesID = id;
  },
  [ON_REDUCE](state, item) {
    --item.amount;
  },
  [ON_INCREASE](state, item) {
    ++item.amount;
  },
};
