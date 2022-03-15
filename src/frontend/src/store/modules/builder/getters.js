export default {
  ingredientsPrice(state) {
    return state.ingredients.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
  },
  pizzaPrice(state, getters) {
    return (
      (state.doughList[0].price +
        state.sauces[0].price +
        getters.ingredientsPrice) *
      state.sizes.find(({ id }) => state.sizeID === id).multiplier
    );
  },
};
