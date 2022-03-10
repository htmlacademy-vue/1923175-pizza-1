import {
  SET_PIZZA_NAME,
  GET_SIZE_ID,
  GET_DOUGH_ID,
  GET_SAUCES_ID,
  ON_REDUCE,
  ON_INCREASE,
  ADD_TO_CART,
} from "@/store/mutation-types";

export const setPizzaName = ({ commit }, { target }) => {
  commit(SET_PIZZA_NAME, target.value);
};

export const getSizeId = ({ commit }, id) => {
  commit(GET_SIZE_ID, id);
};

export const getDoughID = ({ commit }, id) => {
  commit(GET_DOUGH_ID, id);
};

export const getSaucesId = ({ commit }, id) => {
  commit(GET_SAUCES_ID, id);
};

export const onReduce = ({ commit }, item) => {
  commit(ON_REDUCE, item);
};

export const onIncrease = ({ commit }, item) => {
  commit(ON_INCREASE, item);
};

export const onAddToCart = ({ commit, state }) => {
  const pizzaIngredients = state.ingredients
    .filter((item) => item.amount > 0)
    .map((item) => {
      return {
        id: item.id,
        amount: item.amount,
        price: item.price,
      };
    });

  const pizza = {
    name: state.pizzaName,
    dough: {
      id: state.doughID,
      price: state.dough[0].price,
    },
    size: {
      id: state.sizeID,
      multiplier: state.sizes.find(({ id }) => state.sizeID === id).multiplier,
    },
    sauce: {
      id: state.saucesID,
      price: state.sauces[0].price,
    },
    ingredients: pizzaIngredients,
  };

  console.log(pizza);
  commit(ADD_TO_CART, pizza);
};
