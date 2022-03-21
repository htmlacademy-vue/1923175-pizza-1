import {
  SET_PIZZA_NAME,
  GET_SIZE_ID,
  GET_DOUGH_ID,
  GET_SAUCES_ID,
  ON_REDUCE,
  ON_INCREASE,
  RESET_STATE,
} from "@/store/mutation-types";

export const setPizzaName = ({ commit }, { target }) => {
  commit(SET_PIZZA_NAME, target.value);
};

export const getSizeId = ({ commit }, id) => {
  commit(GET_SIZE_ID, id);
};

export const setDoughID = ({ commit }, id) => {
  commit(GET_DOUGH_ID, id);
};

export const setSaucesId = ({ commit }, id) => {
  commit(GET_SAUCES_ID, id);
};

export const resetState = ({ commit }) => {
  commit(RESET_STATE);
};

export const onReduce = ({ commit }, id) => {
  commit(ON_REDUCE, id);
};

export const onIncrease = ({ commit }, id) => {
  commit(ON_INCREASE, id);
};

export const editOrder = ({ state }, pizza) => {
  const dough = state.pizzaData.dough.find(
    (item) => item.id === pizza.dough.id
  );
  const size = state.pizzaData.sizes.find((item) => item.id === pizza.size.id);
  const sauce = state.pizzaData.sauces.find(
    (item) => item.id === pizza.sauce.id
  );

  console.log(dough, size, sauce);
};
