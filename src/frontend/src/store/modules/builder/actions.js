import {
  SET_PIZZA_NAME,
  GET_SIZE_ID,
  GET_DOUGH_ID,
  GET_SAUCES_ID,
  ON_REDUCE,
  ON_INCREASE,
  RESET_STATE,
  SET_INGREDIENTS,
  GET_PIZZA_DATA,
  GET_SAUCES_DATA,
  GET_SIZES_DATA,
  GET_DOUGH_DATA,
  GET_INGREDIENTS_DATA,
} from "@/store/mutation-types";

export async function query({ commit }) {
  const sauces = await this.$api.sauces.query();
  const sizes = await this.$api.sizes.query();
  const dough = await this.$api.dough.query();
  const ingredients = await this.$api.ingredients.query();

  commit(GET_SAUCES_DATA, sauces);
  commit(GET_SIZES_DATA, sizes);
  commit(GET_DOUGH_DATA, dough);
  commit(GET_INGREDIENTS_DATA, ingredients);
  commit(GET_PIZZA_DATA, [sauces, sizes, dough, ingredients]);
  commit(GET_SIZE_ID, sizes[0].id);
  commit(GET_DOUGH_ID, dough[0].id);
  commit(GET_SAUCES_ID, sauces[0].id);
}

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

export const onReduce = ({ commit }, { id }) => {
  commit(ON_REDUCE, id);
};

export const onIncrease = ({ commit }, { id }) => {
  commit(ON_INCREASE, id);
};

export const editOrder = ({ commit, state }, pizza) => {
  const dough = state.pizzaData.dough.find(
    (item) => item.id === pizza.dough.id
  );
  const size = state.pizzaData.sizes.find((item) => item.id === pizza.size.id);
  const sauce = state.pizzaData.sauces.find(
    (item) => item.id === pizza.sauce.id
  );

  const allIngredients = state.ingredients.map((item) => ({
    ...item,
    amount: 0,
  }));

  pizza.ingredients.forEach((pizzaIngredient) => {
    const ingredient = allIngredients.find(
      (ingredient) => ingredient.id === pizzaIngredient.id
    );
    ingredient.amount = pizzaIngredient.amount;
  });

  commit(GET_DOUGH_ID, dough.id);
  commit(GET_SIZE_ID, size.id);
  commit(GET_SAUCES_ID, sauce.id);
  commit(SET_INGREDIENTS, allIngredients);
  commit(SET_PIZZA_NAME, pizza.name);
};
