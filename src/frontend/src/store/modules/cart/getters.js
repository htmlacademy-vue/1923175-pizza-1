export default {
  totalPrice(state) {
    const additionalAmount = state.misc.reduce(
      (value, currentValue) => value + currentValue.price * currentValue.amount,
      0
    );

    return (
      state.cart.reduce(
        (value, currentValue) =>
          value + currentValue.price * currentValue.amount,
        0
      ) + additionalAmount
    );
  },
};
