import { SET_ORDER } from "@/store/mutation-types";

export async function initOrders({ commit }) {
  const orders = await this.$api.orders.query();
  commit(SET_ORDER, orders);
}

export async function submitOrder({ rootState, dispatch }, order) {
  this.$api.orders.post(order).then(() => {
    if (rootState.Auth.isAuthenticated) {
      dispatch("initOrders");
      if (rootState.Cart.deliveryMethod === "new-address") {
        dispatch("Profile/initAddresses", null, { root: true });
      }
    }
  });
}

export async function deleteOrder({ dispatch }, orderId) {
  this.$api.orders.delete(orderId).then(() => dispatch("initOrders"));
}
