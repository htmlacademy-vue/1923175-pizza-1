import pizza from "@/static/pizza.json";

export default {
  namespaced: true,
  state: {
    dough: pizza.dough,
    ingredients: pizza.ingredients,
    sauces: pizza.sauces,
    sizes: pizza.sizes,
  },
};
