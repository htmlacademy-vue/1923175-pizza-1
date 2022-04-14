export const init = async ({ dispatch }) => {
  dispatch("Builder/query");
  dispatch("Profile/initAddresses");
};
