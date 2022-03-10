export default {
  ingredientsPrice(state) {
    return state.ingredients.reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0);
  },
  totalPrice(state, getters) {
    return (
      (state.dough[0].price +
        state.sauces[0].price +
        getters.ingredientsPrice) *
      state.sizes.find(({ id }) => state.sizeID === id).multiplier
    );
  },
  pizzaList(state) {
    return {
      id: 1,
      name: state.pizzaName,
      dough: state.doughID,
      size: state.sizeID,
      sauces: state.saucesID,
      ingredients: state.ingredients,
      amount: state.amount,
    };
  },
};
