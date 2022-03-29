import { SET_ENTITY } from "@/store/mutation-types";

export const init = async ({ dispatch }) => {
  dispatch("Builder/query");
};

export async function fetchUsers({ commit }) {
  const users = await this.$api.users.query();
  commit(SET_ENTITY, { module: null, entity: "users", value: users });
}
