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

export const getDoughID = ({ commit }, id) => {
  commit(GET_DOUGH_ID, id);
};

export const getSaucesId = ({ commit }, id) => {
  commit(GET_SAUCES_ID, id);
};

export const resetState = ({ commit }) => {
  commit(RESET_STATE);
};

export const onReduce = ({ commit }, item) => {
  commit(ON_REDUCE, item);
};

export const onIncrease = ({ commit }, item) => {
  commit(ON_INCREASE, item);
};
