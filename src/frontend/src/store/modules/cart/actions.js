import {
  ADD_TO_CART,
  ON_INCREASE,
  ON_REDUCE,
  ORDER_COMPLETED,
} from "@/store/mutation-types";

export const onSubmit = ({ commit }, isOrderComplete) => {
  commit(ORDER_COMPLETED, isOrderComplete);
};

export const editOrder = () => {
  alert("edit");
};

export const onClose = ({ commit }) => {
  commit(ORDER_COMPLETED, false);
};

export const onAddToCart = ({ commit }, pizza) => {
  const pizzaIngredients = pizza.ingredients
    .filter((item) => item.amount > 0)
    .map((item) => {
      return {
        id: item.id,
        amount: item.amount,
        price: item.price,
        name: item.name,
      };
    });

  commit(ADD_TO_CART, {
    amount: 1,
    name: pizza.pizzaName,
    dough: {
      id: pizza.doughID,
      price: pizza.doughList[0].price,
    },
    size: {
      id: pizza.sizeID,
      multiplier: pizza.sizes.find(({ id }) => pizza.sizeID === id).multiplier,
    },
    sauce: {
      id: pizza.saucesID,
      price: pizza.sauces[0].price,
    },
    ingredients: pizzaIngredients,
    price: pizza.pizzaPrice,
  });
};

export const onReduce = ({ commit }, item) => {
  commit(ON_REDUCE, item);
};

export const onIncrease = ({ commit }, item) => {
  commit(ON_INCREASE, item);
};
