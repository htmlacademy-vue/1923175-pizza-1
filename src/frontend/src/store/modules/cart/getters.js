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
  addresses(state, getters, rootState) {
    let addresses = [
      {
        name: "Заберу сам",
        street: "",
        building: "",
        comment: "",
        id: "self-delivery",
      },
      {
        name: "Новый адрес",
        street: "",
        building: "",
        comment: "",
        id: "new-address",
      },
    ];
    if (rootState.Auth.isAuthenticated) {
      addresses = addresses.concat(rootState.Profile.addresses);
    }
    return addresses;
  },
};
