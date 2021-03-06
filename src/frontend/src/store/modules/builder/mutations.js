import {
  GET_TOTAL_PRICE,
  SET_PIZZA_NAME,
  GET_SIZE_ID,
  GET_DOUGH_ID,
  GET_SAUCES_ID,
  ON_REDUCE,
  ON_INCREASE,
  RESET_STATE,
  SET_INGREDIENTS,
  GET_SAUCES_DATA,
  GET_SIZES_DATA,
  GET_DOUGH_DATA,
  GET_INGREDIENTS_DATA,
  GET_PIZZA_DATA,
  SET_STATE,
} from "@/store/mutation-types";

export default {
  [GET_SAUCES_DATA](state, data) {
    state.sauces = data;
  },
  [GET_SIZES_DATA](state, data) {
    state.sizes = data;
  },
  [GET_DOUGH_DATA](state, data) {
    state.doughList = data;
  },
  [GET_INGREDIENTS_DATA](state, data) {
    state.ingredients = data.map((item) => ({
      ...item,
      amount: 0,
    }));
  },
  [SET_PIZZA_NAME](state, value) {
    state.pizzaName = value;
  },
  [GET_TOTAL_PRICE](state, pizzaPrice) {
    state.pizzaPrice = pizzaPrice;
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
  [ON_REDUCE](state, id) {
    const findIngredient = state.ingredients.find(
      (ingredient) => ingredient.id === id
    );
    if (findIngredient) {
      --findIngredient.amount;
    }
  },
  [ON_INCREASE](state, id) {
    const findIngredient = state.ingredients.find(
      (ingredient) => ingredient.id === id
    );

    if (findIngredient) {
      ++findIngredient.amount;
    }
  },
  [RESET_STATE](state) {
    const ingredients = state.ingredients.map((item) => ({
      ...item,
      amount: 0,
    }));

    state.ingredients = ingredients;
    state.pizzaName = "";
    state.sizeID = state.sizes[0].id;
    state.doughID = state.doughList[0].id;
    state.saucesID = state.sauces[0].id;
    state.pizzaPrice = 0;
  },
  [SET_INGREDIENTS](state, ingredients) {
    state.ingredients = ingredients;
  },
  [GET_PIZZA_DATA](state, data) {
    state.pizzaData = data;
  },
  [SET_STATE](state, payload) {
    state.pizzaName = payload.name;
    state.pizzaId = payload.id;
    state.doughId = payload.dough?.id;
    state.sizeID = payload.size?.id;
    state.saucesID = payload.sauce?.id;
    payload.ingredients.forEach((i) => {
      state.ingredients[i.id].amount = i.amount;
    });
  },
};
