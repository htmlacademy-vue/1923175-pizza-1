import {
  ADD_TO_CART,
  ON_INCREASE,
  ON_REDUCE,
  ON_INCREASE_MISC,
  ON_REDUCE_MICS,
  ORDER_COMPLETED,
  GET_MICS_LIST,
} from "@/store/mutation-types";
import colaImg from "@/assets/img/cola.svg";
import sauceImg from "@/assets/img/sauce.svg";
import potatoImg from "@/assets/img/potato.svg";

export async function query({ commit }) {
  const images = [
    { id: 1, image: colaImg },
    { id: 2, image: sauceImg },
    { id: 3, image: potatoImg },
  ];

  const data = await this.$api.misc.query();

  const misc = data.map((item) => {
    const img = images.find((it) => it.id === item.id);
    return {
      ...item,
      image: img.image,
      amount: 0,
    };
  });

  commit(GET_MICS_LIST, misc);
}

export const onSubmit = ({ commit }, isOrderComplete) => {
  commit(ORDER_COMPLETED, isOrderComplete);
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

export const onReduceMisc = ({ commit }, item) => {
  commit(ON_REDUCE_MICS, item);
};

export const onIncreaseMisc = ({ commit }, item) => {
  commit(ON_INCREASE_MISC, item);
};
