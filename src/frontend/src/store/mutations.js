import { SET_ENTITY } from "@/store/mutation-types";

export default {
  [SET_ENTITY](state, { module, entity, value }) {
    module ? (state[module][entity] = value) : (state[entity] = value);
  },
};
