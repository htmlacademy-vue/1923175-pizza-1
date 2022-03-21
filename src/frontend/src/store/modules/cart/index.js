import misc from "@/static/misc.json";
import * as actions from "@/store/modules/cart/actions";
import mutations from "@/store/modules/cart/mutations";
import getters from "@/store/modules/cart/getters";
import colaImg from "@/assets/img/cola.svg";
import sauceImg from "@/assets/img/sauce.svg";
import potatoImg from "@/assets/img/potato.svg";

const images = [
  { id: 1, image: colaImg },
  { id: 2, image: sauceImg },
  { id: 3, image: potatoImg },
];

export default {
  namespaced: true,
  state: {
    isOrderComplete: false,
    cart: [],
    misc: misc.map((item) => {
      const img = images.find((it) => it.id === item.id);
      return {
        ...item,
        image: img.image,
        amount: 0,
      };
    }),
  },
  actions,
  mutations,
  getters,
};
