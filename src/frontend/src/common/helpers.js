import RESOURCES from "@/common/enums/resources";
import { AuthApiService, ReadOnlyApiService } from "@/services/api.service";

export const createResources = (notifier) => {
  return {
    [RESOURCES.USERS]: new ReadOnlyApiService(RESOURCES.USERS, notifier),
    [RESOURCES.AUTH]: new AuthApiService(notifier),
    [RESOURCES.SIZES]: new ReadOnlyApiService(RESOURCES.SIZES, notifier),
    [RESOURCES.SAUCES]: new ReadOnlyApiService(RESOURCES.SAUCES, notifier),
    [RESOURCES.DOUGH]: new ReadOnlyApiService(RESOURCES.DOUGH, notifier),
    [RESOURCES.INGREDIENTS]: new ReadOnlyApiService(
      RESOURCES.INGREDIENTS,
      notifier
    ),
    [RESOURCES.MICS]: new ReadOnlyApiService(RESOURCES.MICS, notifier),
  };
};

export const setAuth = (store) => {
  store.$api.auth.setAuthHeader();
  store.dispatch("Auth/getMe");
};
