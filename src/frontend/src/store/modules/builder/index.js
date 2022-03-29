import * as actions from "@/store/modules/builder/actions";
import mutations from "@/store/modules/builder/mutations";
import getters from "@/store/modules/builder/getters";

export default {
  namespaced: true,
  state: {
    pizzaData: [],
    doughList: [],
    ingredients: [],
    sauces: [],
    sizes: [],
    pizzaName: "",
    sizeID: 0,
    doughID: 0,
    saucesID: 0,
    pizzaPrice: 0,
  },
  actions,
  mutations,
  getters,
};
