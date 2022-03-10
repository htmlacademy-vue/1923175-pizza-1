import { ORDER_COMPLETED, ADD_TO_CART } from "@/store/mutation-types";

export default {
  [ORDER_COMPLETED](state, isOrderComplete) {
    state.isOrderComplete = isOrderComplete;
  },
  [ADD_TO_CART](state, pizzaList) {
    console.log(pizzaList);
    state.cartList.push(pizzaList);
  },
};
