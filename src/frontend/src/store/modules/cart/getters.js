export default {
  totalPrice(state) {
    return state.cart.reduce(
      (value, currentValue) => value + currentValue.price * currentValue.amount,
      0
    );
  },
};
