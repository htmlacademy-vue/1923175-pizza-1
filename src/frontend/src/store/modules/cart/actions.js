import { ORDER_COMPLETED } from "@/store/mutation-types";

export const onSubmit = ({ commit }, isOrderComplete) => {
  commit(ORDER_COMPLETED, isOrderComplete);
};

export const editOrder = () => {
  alert("edit");
};

export const onClose = ({ commit }) => {
  commit(ORDER_COMPLETED, false);
};
