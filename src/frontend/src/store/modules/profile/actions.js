import { SET_ADDRESS } from "@/store/mutation-types";

export async function initAddresses({ commit }) {
  const addresses = await this.$api.addresses.query();
  commit(SET_ADDRESS, addresses);
}

export async function addAddress({ dispatch }, address) {
  await this.$api.addresses.post(address);
  dispatch("initAddresses");
}

export async function updateAddress({ dispatch }, address) {
  await this.$api.addresses.put(address);
  dispatch("initAddresses");
}

export async function deleteAddress({ dispatch }, addressId) {
  await this.$api.addresses.delete(addressId);
  dispatch("initAddresses");
}
