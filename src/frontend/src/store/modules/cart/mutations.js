import {
  ADD_TO_CART,
  ON_INCREASE,
  ON_REDUCE,
  ORDER_COMPLETED,
  ON_REDUCE_MICS,
  ON_INCREASE_MISC,
} from "@/store/mutation-types";

export default {
  [ORDER_COMPLETED](state, isOrderComplete) {
    state.isOrderComplete = isOrderComplete;
  },
  [ADD_TO_CART](state, pizzas) {
    if (state.cart.findIndex((item) => pizzas.name === item.name) > -1) {
      state.cart.splice(
        state.cart.findIndex((item) => pizzas.name === item.name),
        1,
        pizzas
      );
    } else {
      state.cart.push(pizzas);
    }
  },
  [ON_REDUCE](state, { id }) {
    const itemCart = state.cart.find((item) => item.id === id);

    if (itemCart && itemCart.amount > 0) {
      --itemCart.amount;
    }
  },
  [ON_INCREASE](state, { id }) {
    const itemCart = state.cart.find((item) => item.id === id);

    if (itemCart) {
      ++itemCart.amount;
    }
  },
  [ON_REDUCE_MICS](state, { id }) {
    const itemMics = state.misc.find((item) => item.id === id);

    if (itemMics && itemMics.amount > 0) {
      --itemMics.amount;
    }
  },
  [ON_INCREASE_MISC](state, { id }) {
    const itemMics = state.misc.find((item) => item.id === id);
    if (itemMics) {
      ++itemMics.amount;
    }
  },
};
