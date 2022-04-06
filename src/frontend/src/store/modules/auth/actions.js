import { SET_ENTITY } from "@/store/mutation-types";

export async function login({ dispatch }, credentials) {
  let data;
  try {
    data = await this.$api.auth.login(credentials);
  } catch (e) {
    console.error(e);
    return;
  }
  this.$jwt.saveToken(data.token);
  this.$api.auth.setAuthHeader();
  await dispatch("getMe");
}

export async function logout({ commit }, sendRequest = true) {
  if (sendRequest) {
    await this.$api.auth.logout();
  }
  this.$jwt.destroyToken();
  this.$api.auth.setAuthHeader();
  commit(SET_ENTITY, { isAuthenticated: false, user: null });
}

export async function getMe({ commit, dispatch }) {
  try {
    const data = await this.$api.auth.getMe();
    commit(SET_ENTITY, { isAuthenticated: true, user: data });
  } catch (e) {
    // Note: in case of not proper login, i.e. token is expired
    dispatch("logout", false);
  }
}
